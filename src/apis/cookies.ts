import { Cookies } from "react-cookie";

const cookies = new Cookies();

/** 로그인 시 사용자 정보를 담은 쿠키를 생성한다 */
export const setAccessToken = (accessToken: string) => {
  return cookies.set("accessToken", accessToken);
};

export const setRefreshToken = (refreshToken: string) => {
  return cookies.set("refreshToken", refreshToken);
};

/** 사용자 인증이 필요한 데이터를 요청할 때 쿠키를 가져온다 */
export const getAccessToken = () => {
  return cookies.get("accessToken");
};

export const getRefreshToken = () => {
  return cookies.get("refreshToken");
};

/** 쿠키를 지운다 */
export const removeCookieToken = () => {
  cookies.remove("accessToken");
  cookies.remove("refreshToken");
};
