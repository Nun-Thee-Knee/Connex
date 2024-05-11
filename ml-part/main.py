from flask import Flask, render_template, request, jsonify
import pdfplumber
import subprocess
from flask_cors import CORS
import requests



app = Flask(__name__)

app.config['CORS_HEADERS'] = 'Content-Type'

CORS(app, resources={r"/upload/*": {"origins": "http://localhost:3000"}})

def extract_text_from_pdf(file_path):
    with pdfplumber.open(file_path) as pdf:
        text = ""
        for page in pdf.pages:
            text += page.extract_text()
    return text

@app.route('/')
def home():
    return "Hello, World!"

@app.route('/score', methods=['GET'])
def get_score():
    result = subprocess.run(['python', 'score.py'], stdout=subprocess.PIPE)
    score = result.stdout.decode('utf-8').strip()
    return jsonify({'score': score})

@app.route('/upload', methods=['POST'])
def upload_file():
    if request.method == 'POST':
        url = request.get_json()['file']
        response = requests.get(url)
        filename = "resume.pdf"
        if response.status_code == 200:
           with open(filename, 'wb') as f:
                f.write(response.content)
                print(f"PDF downloaded successfully as {filename}")
        else:
            print(f"Failed to download PDF from {url}")

        # pdf_file = request.files['res_file']
        # score_result = get_score()
        # ats_score = score_result.json()['score']
        # if pdf_file:
        #     text = extract_text_from_pdf(pdf_file)
        #     return render_template('index.html', ats_score=ats_score)
    return "No file"

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)
