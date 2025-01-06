from flask import Flask, request, jsonify
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route('/search', methods=['POST'])
def search_product():
    data = request.get_json()
    product_name = data.get('product_name')

    if not product_name:
        return jsonify({"error": "Product name is required"}), 400

    # Example: Scraping Flipkart for product details
    url = f"https://www.flipkart.com/search?q={product_name}"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }

    try:
        response = requests.get(url, headers=headers)
        soup = BeautifulSoup(response.text, 'html.parser')

        products = []
        for item in soup.find_all('div', class_='_2kHMtA'):  # Flipkart product card class
            name = item.find('div', class_='_4rR01T')
            price = item.find('div', class_='_30jeq3')
            if name and price:
                products.append({
                    "name": name.text.strip(),
                    "price": price.text.strip()
                })

        return jsonify({"products": products})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
