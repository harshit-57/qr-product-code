import dotenv from "dotenv";
import QrService from "../services/qrService.js";
import { httpStatus } from "../utils/httpService.js";
dotenv.config({
  path: `.env`,
});

class qrController {
  async createQr(req, res) {
    try {
      console.log(`createQrCodes: ${JSON.stringify(req.body)}`);
      const qr = await new QrService().generateQRCode(req.body);
      if (qr.status != httpStatus.SUCCESS) throw new Error(qr.message);

      return res.status(qr.status).json({
        status: qr.status == httpStatus.SUCCESS ? 1 : 0,
        message: qr.message,
        data: qr.data,
      });
    } catch (error) {
      console.error(`createQr Error ${error}`);
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ status: 0, message: error.message });
    }
  }

  async checkQr(req, res) {
    try {
      console.log(`checkQrCodes: ${JSON.stringify(req.query)}`);

      const { token } = req.query;

      if (!token)
        res.status(httpStatus.BAD_REQUEST).json({
          status: 0,
          message: "QR Token is required",
        });

      const qr = await new QrService().checkQrCode(token);
      // if (qr.status != httpStatus.SUCCESS) throw new Error(qr.message);

      return res.status(qr.status).json({
        status: qr.status == httpStatus.SUCCESS ? 1 : 0,
        message: qr.message,
        data: qr.data,
      });
    } catch (error) {
      console.error(`checkQr Error ${error}`);
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ status: 0, message: error.message });
    }
  }
}

export default new qrController();
