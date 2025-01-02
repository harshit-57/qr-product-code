import { Router } from "express";
import orderController from "../controllers/orderController.js";

class orderRouter {
  constructor() {
    this.router = Router();
    this.routes();
  }
  routes = () => {
    this.router.post("/save-details", orderController.saveDetails);
  };
}

export default orderRouter;
