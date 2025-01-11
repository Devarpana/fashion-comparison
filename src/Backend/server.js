import express from "express";
import {getJson} from "serpapi";
import dotenv from "dotenv";
import path from "path";
import {fileURLToPath} from "url";

dotenv.config(); // To load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Handle __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json()); // Middleware to parse JSON requests

// Serve the HTML file on the root route
app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "../../../fashion-comparison/index.html")
    );
});

// Define a route to handle search requests
app.post("/search", (req, res) => {
    const query = req.body.query; // Get the search query from the request body

    getJson(
        {
            engine: "google",
            api_key: process.env.SERPAPI_API_KEY, // Use your SerpApi key from .env file
            q: query,
            location: "Austin, Texas", // Modify as needed
        },
        (json) => {
            res.json(json); // Send the search results as JSON response
        }
    );
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
