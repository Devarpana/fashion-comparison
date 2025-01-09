import React, { useState } from "react";

function App() {
    const [data, setData] = useState([]);
    const [file, setFile] = useState(null);

    // Handle file selection
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    // Handle file upload
    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file!");
            return;
        }
    
        const formData = new FormData();
        formData.append("file", file);
    
        try {
            const response = await fetch("http://127.0.0.1:5000/upload", {
                method: "POST",
                body: formData,
            });
    
            if (!response.ok) throw new Error("Failed to process the file");
    
            const result = await response.json();
    
            // Log the response for debugging
            console.log("Backend Response:", result);
    
            setData(result);
        } catch (error) {
            console.error("Error:", error);
        }
    };


    return (
        <div className="h-screen p-8 bg-gray-100">
            <h1 className="text-3xl font-bold mb-4 text-center">JSON Data Extractor</h1>
            <div className="mb-4 text-center">
                <input
                    type="file"
                    accept=".json"
                    onChange={handleFileChange}
                    className="mb-2"
                />
                <button
                    onClick={handleUpload}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Upload and Process
                </button>
            </div>
            <div>
                {data.length > 0 ? (
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 px-4 py-2">Type</th>
                                <th className="border border-gray-300 px-4 py-2">Title</th>
                                <th className="border border-gray-300 px-4 py-2">Price/Address</th>
                                <th className="border border-gray-300 px-4 py-2">Rating/Source</th>
                                <th className="border border-gray-300 px-4 py-2">Thumbnail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-300 px-4 py-2">{item.type}</td>
                                    <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {item.price || item.address}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {item.rating || item.source}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {item.thumbnail && (
                                            <img src={item.thumbnail} alt="Thumbnail" width="50" />
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-center text-gray-500">No data to display.</p>
                )}
            </div>
        </div>
    );
}

export default App;
