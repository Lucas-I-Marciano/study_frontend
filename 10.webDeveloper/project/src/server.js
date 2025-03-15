import express from "express";
import cors from "cors";
import { connectDB, shoe } from "../server/connect.js";

const app = express();
const PORT = 5000;

app.use(cors()); // Para permitir requisições do frontend
app.use(express.json());

app.get("/api/shoes", async (req, res) => {
  try {
    await connectDB();
    const data = await shoe.find({}).toArray();
    res.json(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
