/*import express from "express"
import getJson from "serpapi"
import 'dotenv/config';


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON requests

// Define a route to handle search requests
app.post('/search', (req, res) => {
    const query = req.body.query; // Get the search query from the request body

    getJson({
        engine: "google",
        api_key: process.env.SERPAPI_API_KEY, // Use your SerpApi key from .env file
        q: query,
        location: "Assam, India", // Modify as needed
    }, (json) => {
        res.json(json); // Send the search results as JSON response
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});*/

import express from "express";
import { GoogleSearch } from "google-search-results-nodejs";
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON requests

// Define a route to handle search requests
app.post('/search', (req, res) => {
    const query = req.body.query; // Get the search query from the request body

    const search = new GoogleSearch(process.env.SERPAPI_API_KEY); // Initialize with API key

    const params = {
        engine: "google",
        q: query,
        location: "Assam, India", // Modify as needed
    };

    search.json(params, (result) => {
        res.json(result); // Send the search results as JSON response
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

