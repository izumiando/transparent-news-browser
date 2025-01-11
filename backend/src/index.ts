import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000; // because all the ones i try to use are used

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// need to fix this something is not running
app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Hello from the backend!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running at http://localhost:${PORT}`);
});
