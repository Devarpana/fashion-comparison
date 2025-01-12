import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {getJson} from "serpapi";
import dotenv from "dotenv";
import path from "path";
import {fileURLToPath} from "url";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5173;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define a route to handle search requests
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
});

app.post("/search", (req, res) => {
    const query = req.body.query;

    console.log("Search query received:", query);
    // if (!query) {
    //     return res.status(400).json({error: "Query is required."});
    // }

    // getJson(
    //     {
    //         engine: "google_shopping",
    //         api_key: process.env.SERPAPI_API_KEY,
    //         q: "saree",
    //         location: "Austin, Texas",
    //     },
    //     (json) => {
    //         res.json(json);
    //     }
    // );
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
