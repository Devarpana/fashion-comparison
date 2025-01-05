import React, {useState, useEffect} from "react";

const ImageSearch = ({x, y}) => {
    const [imageName, setImageName] = useState("");
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        console.log("x:", x, "y:", y);
    }, [x, y]);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file);
            setImageName(file.name);
        }
    };

    const handleSearch = () => {
        if (imageFile) {
            const reader = new FileReader();
            reader.onload = () => {
                const base64Image = reader.result.split(",")[1];
                const googleLensUrl = `https://lens.google.com/uploadbyurl?url=data:image/jpeg;base64,${base64Image}`;
                window.open(googleLensUrl);
            };
            reader.readAsDataURL(imageFile);
        }
    };

    return (
        <div className="flex justify-center items-center bg-white">
            <div className="flex flex-col items-center p-6">
                <div>
                    <label
                        htmlFor="imageUpload"
                        className="block mb-2 text-lg font-semibold text-center"
                    >
                        Upload your image:
                    </label>
                    <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="border border-gray-300 rounded-lg p-4 mb-4 w-full max-w-md cursor-pointer hover:bg-gray-100 transition duration-200"
                    />
                </div>
                {imageFile && (
                    <p className="text-lg font-semibold mb-4">
                        Uploaded Image: {imageName}
                    </p>
                )}
                <button
                    className={`border-gray-700 bg-gray-500 hover:bg-gray-700 text-white h-8 px-2 rounded-md ${
                        x === 0 ? "hidden" : ""
                    }`}
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default ImageSearch;
