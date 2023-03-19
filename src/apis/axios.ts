import axios from "axios";
import { getAccessToken } from "./cookies";

const accessToken = getAccessToken();

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  headers: {
    authorization: accessToken,
  },
});
