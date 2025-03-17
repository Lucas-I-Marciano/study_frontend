import express from "express";
import cors from "cors";
import { connectDB, shoe, liked_shoe } from "../server/connect.js";
import { ObjectId } from "mongodb";

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
    res.status(500).json({ erro: `Failed to fetch data` });
  }
});

app.post("/api/shoes", async (req, res) => {
  try {
    await connectDB();
    const { created_at, name, brand, price, currency, image } = req.body;
    const data = await shoe.insertOne({
      created_at,
      name,
      brand,
      price: parseFloat(price),
      currency,
      image,
    });
    res.status(200).json(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    res.status(500).json({ erro: `Failed to fetch data` });
  }
});

app.delete("/api/shoes/:id", async (req, res) => {
  try {
    await connectDB();
    const { id } = req.params;
    console.log(id);
    const data = await shoe.deleteOne({ id });
    res.status(200).json(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    res.status(500).json({ erro: `Failed to delete data` });
  }
});

app.get("/api/liked", async (req, res) => {
  try {
    await connectDB();
    const data = await liked_shoe.find({}).toArray();
    res.json(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    res.status(500).json({ erro: `Failed to fetch data` });
  }
});

app.post("/api/liked", async (req, res) => {
  try {
    await connectDB();
    const { created_at, shoe_id, username, is_liked = false } = req.body;
    const isAlreadyCreated = await liked_shoe.findOne({
      shoe_id: new ObjectId(shoe_id),
    });

    if (isAlreadyCreated) {
      if (username === isAlreadyCreated["username"]) {
        return res
          .status(400)
          .json({ message: "Shoe already mapped for this username" });
      }
    }

    const data = await liked_shoe.insertOne({
      created_at,
      shoe_id: new ObjectId(shoe_id),
      username,
      is_liked: Boolean(is_liked),
    });
    res.status(200).json(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    res.status(500).json({ erro: `Failed to fetch data` });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
