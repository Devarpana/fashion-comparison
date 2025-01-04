import React from "react";

function App() {
    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-white mb-4 ">
                    Welcome to Our App!
                </h1>
                <p className="text-2xl text-white opacity-80 mb-8">
                    We're thrilled to have you on board!
                </p>
                <button
                    className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => alert("Welcome Here")}
                >
                    Get Started
                </button>
            </div>
        </div>
    );
}

export default App;
