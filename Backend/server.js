import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
// import {getJson} from "serpapi";
// import dotenv from "dotenv";
// import path from "path";
// import {fileURLToPath} from "url";

// dotenv.config(); // Load environment variables

// const app = express();
// const PORT = process.env.PORT || 5173;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(express.json()); // Middleware to parse JSON requests

// // Serve the HTML file on the root route

// // Define a route to handle search requests
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../index.html"));
// });
// app.post("/search", (req, res) => {
//     const query = req.body; // Get query from request body

//     if (!query) {
//         return res.status(400).json({error: "Query is required."});
//     }

//     getJson(
//         {
//             engine: "google_shopping",
//             api_key: process.env.SERPAPI_API_KEY, // Use your SerpApi key from .env file
//             q: "saree",
//             location: "Austin, Texas", // Modify as needed
//         },
//         (json) => {
//             res.json(json); // Send the search results as a JSON response
//         }
//     );
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

const app = express();
const PORT = 5173; // Ensure this matches the port your server should run on

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle search requests
app.post("/search", (req, res) => {
    const searchQuery = req.body.query;
    console.log("Search query received:", searchQuery);
    res.status(200).send({message: "Search query logged successfully"});
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
