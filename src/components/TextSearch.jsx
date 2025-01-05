import React, {useState, useEffect} from "react";

const TextSearch = ({x, y}) => {
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        console.log("x:", x, "y:", y);
    }, [x, y]);

    const handleTextChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearch = () => {
        if (searchText) {
            const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
                searchText
            )}`;
            window.open(googleSearchUrl, "_blank");
        }
    };

    return (
        <div className="flex flex-col items-center p-6">
            <div>
                <label
                    htmlFor="textSearch"
                    className="block mb-2 text-lg font-semibold"
                >
                    Enter your search text:
                </label>
                <input
                    type="text"
                    id="textSearch"
                    value={searchText}
                    onChange={handleTextChange}
                    className="border border-gray-300 rounded-lg p-4 mb-4 w-full max-w-md cursor-pointer hover:bg-gray-100 transition duration-200"
                />
            </div>
            <button
                className={`border-gray-700 bg-gray-500 hover:bg-gray-700 text-white h-8 px-2 rounded-md ${
                    y === 0 ? "hidden" : ""
                }`}
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
};

export default TextSearch;
