import { Types } from "mongoose";
import QROrder from "../models/QROrder.js";
import { httpStatus } from "../utils/httpService.js";
import { Messages } from "../utils/messages.js";

class OrderService {
  constructor() {}

  async saveDetails({
    qrId,
    productId,
    name,
    email,
    phone,
    city,
    state,
    country,
    address,
    pincode,
  }) {
    try {
      const orderExist = await QROrder.findOne({
        qrId: new Types.ObjectId(qrId),
      })
        .populate({ path: "QR" })
        .lean();

      if (orderExist)
        return {
          status: httpStatus.BAD_REQUEST,
          message: "QR code have been used already.",
        };

      const order = await QROrder.create({
        qrId,
        productId,
        name,
        email,
        phone,
        regAddress: { city, state, country, address, pincode },
      });

      return {
        status: httpStatus.SUCCESS,
        message: "Order Details " + Messages.SUCCESS_CREATED,
        data: order,
      };
    } catch (err) {
      return {
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message,
      };
    }
  }
}

export default OrderService;
