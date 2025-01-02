import mongoose, { Schema } from "mongoose";

const QROrderSchema = new Schema({
  productId: { type: String, required: true },
  qrId: { type: mongoose.Schema.Types.ObjectId, ref: "QR" },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  regAddress: {
    type: {
      city: { type: String },
      state: { type: String },
      address: { type: String },
      pincode: { type: Number },
      country: { type: String },
    },
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("QROrder", QROrderSchema);
