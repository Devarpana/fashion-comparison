import React, { useState } from "react";

function App() {
    const [productName, setProductName] = useState(""); // State for user input
    const [results, setResults] = useState([]); // State to store search results

    const handleSearch = async () => {
        try {
            const response = await fetch("http://localhost:5000/search", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: productName }),
            });
            const data = await response.json();
            setResults(data.results || []); // Update results state with API response
        } catch (error) {
            console.error("Error fetching search results:", error);
            alert("Failed to fetch search results.");
        }
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-white mb-4">
                    Welcome to our ext!
                </h1>
                <p className="text-2xl text-white opacity-80 mb-8">
                    Search for products and compare them easily!
                </p>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Enter product name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className="px-4 py-2 rounded border border-gray-300"
                    />
                    <button
                        className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded ml-4"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-lg">
                    <h2 className="text-2xl font-bold mb-2">Search Results</h2>
                    {results.length > 0 ? (
                        results.map((item, index) => (
                            <div
                                key={index}
                                className="mb-4 border-b pb-2 border-gray-300"
                            >
                                <p className="font-bold">{item.name}</p>
                                <p>Price: {item.price}</p>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    View Product
                                </a>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No results found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;