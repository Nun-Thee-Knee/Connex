from flask import Flask, render_template, request, jsonify
import pdfplumber
from flask_cors import CORS, cross_origin
import subprocess

app = Flask(__name__)


def extract_text_from_pdf(file_path):
    with pdfplumber.open(file_path) as pdf:
        text = ""
        for page in pdf.pages:
            text += page.extract_text()
    return text

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/score', methods=['GET'])
def get_score():
    result = subprocess.run(['python', 'score.py'], stdout=subprocess.PIPE)
    score = result.stdout.decode('utf-8').strip()
    return jsonify({'score': score})

@app.route('/upload', methods=['POST'])
def upload_file():
    if request.method == 'POST':
        pdf_file = request.files['pdf_file']
        score_result = get_score()
        ats_score = score_result.json()['score']
        if pdf_file:
            text = extract_text_from_pdf(pdf_file)
            return render_template('index.html', ats_score=ats_score)
    return render_template('index.html', message='Please upload a PDF file.')

if __name__ == '__main__':
    app.run(debug=True)
