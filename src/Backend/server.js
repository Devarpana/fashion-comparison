const express = require("express");
const {getJson} = require("serpapi");
require("dotenv").config();

const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json()); // Parse JSON request bodies

// Define a route to handle search requests
app.post("/search", (req, res) => {
    const query = req.body.query;

    if (!query) {
        return res.status(400).json({error: "Search query is required"});
    }

    getJson(
        {
            engine: "google",
            api_key: process.env.SERPAPI_API_KEY,
            q: query,
            location: "Assam, India",
        },
        (error, json) => {
            if (error) {
                console.error("Error fetching from SerpApi:", error);
                return res
                    .status(500)
                    .json({error: "Failed to fetch data from SerpApi"});
            }
            res.json(json);
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
