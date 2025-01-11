import React, {useState} from "react";
import SearchBar from "./components/Header/SearchBar";
import ProductList from "./components/Products/ProductList";
import CouponSection from "./components/Coupons/CouponSection";
import logo from "./assets/logo.png";

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
            const response = await fetch("http://localhost:5000/upload", {
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
        <div className="w-[400px] min-h-[600px] bg-white">
            <header className="bg-gradient-to-r from-[#ff66c4] to-[#ffde59] p-4 text-white">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-xl font-bold flex items-center gap-2">
                        <img src={logo} alt="logo" className="h-12" />
                    </h1>
                </div>
                <SearchBar />
            </header>

            <main className="p-4">
                <ProductList />
                <CouponSection />
            </main>
        </div>
    );
}

export default App;
