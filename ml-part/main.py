from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def main():
    return "Hello"

@app.route("/uploads", methods=["GET", "POST"])
def uploadPDF():
    if request.method == "POST":
        link = request.get_json()
        return jsonify(link)
    return "Not A Post Request"

if __name__ == "__main__":
    app.run(debug=True)