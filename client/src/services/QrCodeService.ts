import axios from "axios";

const API_URL =
  (process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001") + "/api/v1";

export const generateQRCode = async (productId: number | string) => {
  const response = await axios.post(`${API_URL}/qr/generate`, { productId });
  return response.data;
};

export const checkQRCode = async (token: any) => {
  const response = await axios.get(`${API_URL}/qr/check?token=${token}`);
  return response.data;
};
