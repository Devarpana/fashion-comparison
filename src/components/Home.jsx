import React, {useState} from "react";


const Home = () => {
    const [imageName, setImageName] = useState("");
    const [imageFile, setImageFile] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file);
            setImageName(file.name);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="flex flex-col items-center p-6 shadow-lg rounded-lg border border-gray-300">
                <div>
                    <label
                        htmlFor="imageUpload"
                        className="block mb-2 text-lg font-semibold"
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
                <div>
                    <label
                        htmlFor="imageName"
                        className="block mb-2 text-lg font-semibold"
                    >
                        Insert the name of the image:
                    </label>
                    <input
                        type="text"
                        id="imageName"
                        value={imageName}
                        onChange={(e) => setImageName(e.target.value)}
                        placeholder="Enter image name"
                        className="border border-gray-300 rounded-lg p-4 mb-4 w-full max-w-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
