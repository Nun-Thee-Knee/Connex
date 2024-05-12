from flask import Flask, request, jsonify, redirect, url_for
import pdfplumber
from flask_cors import CORS
import requests
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import PyPDF2
import pdfminer


app = Flask(__name__)

app.config['CORS_HEADERS'] = 'Content-Type'

CORS(app, resources={r"/upload": {"origins": "*"}})

cv=CountVectorizer()

def extract_text_from_pdf(file_path):
    try:
        with pdfplumber.open(file_path) as pdf:
            text = ""
            for page in pdf.pages:
                text += page.extract_text()
        return text
    except pdfminer.pdfparser.PDFSyntaxError:
        return "Invalid PDF file"

def get_similarity_score(file_path,job_desc):
    job_des = job_desc
    resume = extract_text_from_pdf(file_path=file_path)
    texts=[job_des, resume]
    matrix= cv.fit_transform(texts)
    tracker= cosine_similarity(matrix)[0][1]
    ats_score = round(tracker*100, 2)
    return ats_score

@app.route('/')
def home():
    return "Hello, World!"

@app.route('/upload', methods=['POST'])
def upload_file():
    if request.method == 'POST':
        url = request.get_json()['file']
        job_desc = request.get_json()['desc']
        response = requests.get(url)
        filename = "resume.pdf"
        if response.status_code == 200:
            with open(f"static/{filename}", 'wb') as f:
                f.write(response.content)
                print(f"PDF downloaded successfully as {filename}")
                score = get_similarity_score(f"static/{filename}", job_desc)
                return jsonify({'message': score})
        else:
            print(f"Failed to download PDF from {url}")
            return jsonify({'message': 'Failed to upload PDF'})


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
