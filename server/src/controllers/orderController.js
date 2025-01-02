import dotenv from "dotenv";
import OrderService from "../services/orderService.js";
import { httpStatus } from "../utils/httpService.js";
dotenv.config({
  path: `.env`,
});

class orderController {
  async saveDetails(req, res) {
    try {
      console.log(`saveDetails: ${JSON.stringify(req.body)}`);
      const order = await new OrderService().saveDetails(req.body);
      if (order.status != httpStatus.SUCCESS) throw new Error(order.message);

      return res.status(order.status).json({
        status: order.status == httpStatus.SUCCESS ? 1 : 0,
        message: order.message,
        data: order.data,
      });
    } catch (error) {
      console.error(`saveDetails Error ${error}`);
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ status: 0, message: error.message });
    }
  }
}

export default new orderController();
