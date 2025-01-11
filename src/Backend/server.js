const express = require('express');
const { getJson } = require('serpapi');
require('dotenv').config(); // To load environment variables

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
        location: "Austin, Texas", // Modify as needed
    }, (json) => {
        res.json(json); // Send the search results as JSON response
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
