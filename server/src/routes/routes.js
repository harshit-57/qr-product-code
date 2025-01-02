import dotenv from "dotenv";
import QrRouter from "./qr.js";
import orderRouter from "./order.js";

dotenv.config({
  path: `${process.env.NODE_ENV ? ".env." + process.env.NODE_ENV : ".env"}`,
});

export default class Routes {
  static init(server) {
    server.app.get("/", (req, res) => {
      res.send("QR Products Server is working fine.");
    });

    server.app.use("/api/v1/qr", new QrRouter().router);
    server.app.use("/api/v1/order", new orderRouter().router);
  }
}
