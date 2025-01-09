import json
import pandas as pd

# Function to load JSON
def load_json(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        return json.load(file)

# Function to extract relevant data
def extract_data(data):
    results = []
    
    # Process shopping_results
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
    
    # Process local_results
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
    
    return results

# Main execution
if __name__ == "__main__":
    json_data = load_json("jj.json")  # Load your JSON file
    extracted_data = extract_data(json_data)  # Extract relevant data
    
    # Create a DataFrame for better analysis
    df = pd.DataFrame(extracted_data)
    print(df.head())  # Display the first few rows
    print(df.columns)  # Display the column names

    print(df["link"])

# name , price, store, link, thumbnail, 