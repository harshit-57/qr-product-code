import mongoose, { Schema } from "mongoose";

const QRCodeSchema = new Schema({
  productId: { type: String, required: true },
  qrImage: { type: String, default: "" },
  status: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("QR", QRCodeSchema);
