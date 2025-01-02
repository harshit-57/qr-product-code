import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config({
  path: `.env`,
});

export default class Connection {
  static init(server) {
    mongoose
      .connect(
        process.env.MONGODB_URI || "mongodb://localhost:27017/qr_code_project"
      )
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.error("Error connecting to MongoDB:", err));
  }
}
