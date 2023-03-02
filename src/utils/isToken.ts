import { getAccessToken, removeCookieToken } from "../apis/cookies";

/**로그인 여부 판단 */
export const isToken = () => {
  const myToken = getAccessToken();
  return myToken;
};

/**로그아웃 하기 */
export const deleteToken = () => {
  removeCookieToken();
  sessionStorage.clear();
};

/**본인 미니홈피 여부 판단 */
const myHomeId = sessionStorage.getItem("userHome");

export const IsMyHome = (params: string | undefined) => {
  return myHomeId === params;
};