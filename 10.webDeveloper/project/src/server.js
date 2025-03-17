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
    const data = await shoe.deleteOne({ id: new ObjectId(id) });
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

app.get("/api/liked/:id", async (req, res) => {
  try {
    await connectDB();
    const { id } = req.params;
    const o_id = new ObjectId(id);
    const data = await liked_shoe.findOne({ shoe_id: o_id });
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

app.delete("/api/liked/:id", async (req, res) => {
  try {
    await connectDB();
    const { id } = req.params;
    const data = await liked_shoe.deleteOne({ id: new ObjectId(id) });
    res.status(200).json(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    res.status(500).json({ erro: `Failed to delete data` });
  }
});

app.patch("/api/liked/:id", async (req, res) => {
  try {
    await connectDB();
    const { id } = req.params;
    const o_id = new ObjectId(id);
    const data = await liked_shoe.findOne({ shoe_id: o_id, username: "lucas" });

    console.log("data: ", data);

    const isLiked = data["is_liked"];

    const filter = { shoe_id: o_id, username: "lucas" };
    /* Set the upsert option to insert a document if no documents match
    the filter */
    const options = { upsert: true };
    const updateDoc = {
      $set: {
        is_liked: !isLiked,
      },
    };
    // Update the first document that matches the filter
    const result = await liked_shoe.updateOne(filter, updateDoc, options);

    res.status(200).json(result);
  } catch (error) {
    console.error("Failed to fetch data:", error);
    res.status(500).json({ erro: `Failed to delete data` });
  }
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
