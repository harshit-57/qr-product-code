import { Router } from "express";
import qrController from "../controllers/qrController.js";

class QrRouter {
  constructor() {
    this.router = Router();
    this.routes();
  }
  routes = () => {
    this.router.post("/generate", qrController.createQr);
    this.router.get("/check", qrController.checkQr);
  };
}

export default QrRouter;
