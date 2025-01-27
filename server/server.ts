import express from "express";
const app = express();

app.get("/api", (req, res) => {
    res.json({"fruits": ["apple", "banana", "orange"]});    
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});