from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/search', methods=['GET', 'POST'])
def search():
    return {"message": "CORS enabled!"}
