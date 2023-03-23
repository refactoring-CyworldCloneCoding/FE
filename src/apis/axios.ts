import axios, { AxiosResponse } from "axios";
import { getAccessToken, removeCookieToken, setAccessToken } from "./cookies";

const accessToken = getAccessToken();

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  headers: {
    authorization: accessToken,
  },
});

/* interceptor: response */
instance.interceptors.response.use((response: AxiosResponse) => {
  const originalRequest = response?.config;
  if (response.data.msg === "토큰 재발급" && response.status === 201) {
    /* accessToken 변경 후 재요청 */
    removeCookieToken();
    setAccessToken(response.data.authorization);
    originalRequest.headers.authorization = response?.data?.authorization;
    return axios(originalRequest);
  } else {
  }
  return response;
});
