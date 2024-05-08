from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def main():
    return "This is to test if the web service works or not"

if __name__ == "__main__":
    app.run(host="0.0.0.0")