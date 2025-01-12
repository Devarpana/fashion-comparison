import express from 'express';
import { GoogleSearch } from 'google-search-results-nodejs'; // Ensure you're using the correct import
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors'; // Import CORS

dotenv.config(); // Load environment variables

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

// Define a route to handle search requests
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
    res.sendFile(path.join(__dirname, "../index.html"));
});

// Define a route to handle search requests for Google Shopping
app.post('/search', async (req, res) => {
    const query = req.body.query; // Get the search query from the request body

    const search = new GoogleSearch(process.env.SERPAPI_API_KEY); // Initialize with API key

    const params = {
        engine: "google_product", // Use Google Shopping engine
        q: query, // The search query received from frontend
        hl: "en", // Language
        gl: "us", // Country code
        device: "desktop", // Device type (desktop, tablet, mobile)
    };

    try {
        const result = await search.json(params); // Fetch results
        res.json(result); // Send the search results as JSON response
    } catch (error) {
        console.error("Error fetching search results:", error);
        res.status(500).json({ error: "Failed to fetch search results" }); // Send error response
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

