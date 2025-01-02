import axios from "axios";

const API_URL =
  (process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001") + "/api/v1";

export const saveUserDetails = async (userDetails: any) => {
  const response = await axios.post(
    `${API_URL}/order/save-details`,
    userDetails
  );
  return response.data;
};
