import React, { useState } from "react";
import { Search } from "lucide-react";

function SearchBar() {
    const [localQuery, setLocalQuery] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!localQuery) return;

        try {
            const response = await fetch("http://localhost:5000/search", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query: localQuery }), // Send the query as JSON
            });

            if (!response.ok) {
                // Handle non-200 status codes
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Search Results:", data); // Handle the response data as needed
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    const handleChange = (e) => {
        setLocalQuery(e.target.value); // Update local state
    };

    return (
        <form onSubmit={handleSearch} className="relative">
            <input
                type="text"
                placeholder="Search for products..."
                value={localQuery}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button type="submit" className="absolute right-3 top-2.5">
                <Search className="w-5 h-5 text-white/70" />
            </button>
        </form>
    );
}

export default SearchBar; // Default export for the component
