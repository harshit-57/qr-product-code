import QR from "../models/QR.js";
import QRCode from "qrcode";
import { httpStatus } from "../utils/httpService.js";
import { Messages } from "../utils/messages.js";
import { decodeToken, generateToken, verifyToken } from "../utils/helpers.js";
import { Types } from "mongoose";
import QROrder from "../models/QROrder.js";

class QrService {
  constructor() {}

  async generateQRCode({ productId }) {
    try {
      if (!productId) productId = 1;

      const qrCode = await QR.create({ productId });
      const token = generateToken({
        productId,
        qrId: qrCode?._id,
        time: new Date().toDateString(),
      });

      const url = `${process.env.FRONTEND_URL}/save-details/${productId}/${token}`;
      const qrImage = await QRCode.toDataURL(url);
      await qrCode.updateOne({ qrImage });

      return {
        status: httpStatus.SUCCESS,
        message: "QR Product Code " + Messages.SUCCESS_CREATED,
        data: { qrImage, qrId: qrCode._id.toString() },
      };
    } catch (err) {
      return {
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message,
      };
    }
  }

  async checkQrCode(token) {
    try {
      if (!verifyToken(token))
        return {
          status: httpStatus.UNAUTHORISED,
          message: "Token is invalid or expired.",
        };
      const data = decodeToken(token);

      const qr = await QR.findById(new Types.ObjectId(data?.qrId)).lean();

      if (!qr)
        return {
          status: httpStatus.BAD_REQUEST,
          message: "QR code not found or invalid.",
        };

      const orderExist = await QROrder.findOne({
        qrId: new Types.ObjectId(data?.qrId),
      }).lean();

      if (orderExist)
        return {
          status: httpStatus.BAD_REQUEST,
          message: "QR code have been used already.",
          data: { qrId: data?.qrId },
        };

      return {
        status: httpStatus.SUCCESS,
        message: "QR Check " + Messages.SUCCESS_FETCHED,
        data,
      };
    } catch (err) {
      return {
        status: httpStatus.INTERNAL_SERVER_ERROR,
        message: err.message,
      };
    }
  }
}

export default QrService;
