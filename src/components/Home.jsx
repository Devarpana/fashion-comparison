import React, {useState} from "react";
import ImageSearch from "./ImageSearch";
import TextSearch from "./TextSearch";

const Home = () => {
    const [visibleComponent, setVisibleComponent] = useState("both");
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleImageClick = () => {
        setVisibleComponent("image");
        setX(1);
        setY(0);
    };

    const handleTextClick = () => {
        setVisibleComponent("text");
        setX(0);
        setY(1);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white flex-col">
            <div className="flex flex-col items-center p-6 shadow-lg rounded-lg border border-gray-300">
                {visibleComponent !== "text" && (
                    <div onClick={handleImageClick}>
                        <ImageSearch x={x} y={y} />
                    </div>
                )}
                {visibleComponent !== "image" && (
                    <div onClick={handleTextClick}>
                        <TextSearch x={x} y={y} />
                    </div>
                )}
                {visibleComponent !== "both" && (
                    <button
                        onClick={() => {
                            setVisibleComponent("both");
                            setX(0);
                            setY(0);
                        }}
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
