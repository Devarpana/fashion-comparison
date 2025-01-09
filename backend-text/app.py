from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Function to extract relevant data
def extract_data(data):
    results = []
    print("Processing JSON data:", data)  # Debugging log
    
    if "shopping_results" in data:
        for item in data["shopping_results"]:
            results.append({
                "type": "shopping",
                "title": item.get("title", ""),
                "price": item.get("price", ""),
                "link": item.get("link", ""),
                "source": item.get("source", ""),
                "thumbnail": item.get("thumbnail", "")
            })

    if "local_results" in data and "places" in data["local_results"]:
        for place in data["local_results"]["places"]:
            results.append({
                "type": "local",
                "title": place.get("title", ""),
                "address": place.get("address", ""),
                "rating": place.get("rating", ""),
                "reviews": place.get("reviews", ""),
                "thumbnail": place.get("thumbnail", "")
            })

    print("Extracted Results:", results)  # Debugging log
    return results


@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No file selected"}), 400

    try:
        data = json.load(file)
        extracted_data = extract_data(data)

        # Print the extracted data for debugging
        print("Extracted Data:", extracted_data)

        return jsonify(extracted_data)
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
