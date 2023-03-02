import axios from "axios";
import { getAccessToken, getRefreshToken } from "./cookies";

const accessToken = getAccessToken();
const refreshToken = getRefreshToken();

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  headers: {
    accessToken,
    refreshToken,
  },
});
