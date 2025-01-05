import React, {useState} from "react";
import ImageSearch from "./ImageSearch";
import TextSearch from "./TextSearch";

const Home = () => {
    // State to track which search component is visible
    const [visibleComponent, setVisibleComponent] = useState("both");
    let x, y;

    const handleImageClick = () => {
        setVisibleComponent("image");
        x = 1;
    };

    const handleTextClick = () => {
        setVisibleComponent("text");
        y = 1;
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white flex-col">
            <div className="flex flex-col items-center p-6 shadow-lg rounded-lg border border-gray-300">
                {/* Conditionally render ImageSearch */}
                {visibleComponent !== "text" && (
                    <div
                        onClick={handleImageClick}
                        className="p-8 cursor-pointer"
                    >
                        <ImageSearch />
                    </div>
                )}

                {/* Conditionally render TextSearch */}
                {visibleComponent !== "image" && (
                    <div
                        onClick={handleTextClick}
                        className="p-8 cursor-pointer"
                    >
                        <TextSearch />
                    </div>
                )}

                {/* Optional: Button to show both components again */}
                {visibleComponent !== "both" && (
                    <button
                        onClick={() => setVisibleComponent("both")}
                        className="border-gray-700 bg-gray-500 hover:bg-gray-700 text-white h-8 px-2 rounded-md"
                    >
                        Show Both
                    </button>
                )}
            </div>
        </div>
    );
};

export default Home;
