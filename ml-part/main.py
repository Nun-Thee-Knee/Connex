from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

#deploy the three major functionalities

@app.route("/")
def main():
    return "let's check this"
    

if __name__ == "__main__":
    app.run(host="0.0.0.0")
