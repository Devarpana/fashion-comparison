import React, {useState} from "react";

const ImageSearch = () => {
    const [imageName, setImageName] = useState("");
    const [imageFile, setImageFile] = useState(null);

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
                window.open(googleLensUrl, "_blank");
            };
            reader.readAsDataURL(imageFile);
        }
    };

    return (
        <>
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
                className="border-gray-700 bg-gray-500 hover:bg-gray-700 text-white h-8 px-2 rounded-md"
                onClick={handleSearch}
            >
                Search
            </button>
        </>
    );
};

export default ImageSearch;
