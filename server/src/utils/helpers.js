import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

export const generateToken = (data, time = false) => {
  if (time) return jwt.sign(data, process.env.JWT_SECRET, time);
  else return jwt.sign(data, process.env.JWT_SECRET);
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

export const decodeToken = (token) => {
  return jwt.decode(token);
};
