import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); // Carregar variáveis de ambiente

const db_string = process.env.ATLAS_URI;
const client = new MongoClient(db_string);

let shoe;
let liked_shoe;

export const connectDB = async () => {
  if (!shoe) {
    try {
      await client.connect();
      const database = client.db("eCommerce_shoes");
      shoe = database.collection("shoe");
      liked_shoe = database.collection("liked_shoe");
      console.log("Connected to database");
    } catch (error) {
      console.error("Failed to connect to database", error);
    }
  }
};

export { shoe, liked_shoe };
