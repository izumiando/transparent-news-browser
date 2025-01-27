import express from "express";
const app = express();
import cors from "cors";
const corsOptions = {
    origin: ["http://localhost:5173"]
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json({"fruits": ["apple", "banana", "orange"]});    
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});