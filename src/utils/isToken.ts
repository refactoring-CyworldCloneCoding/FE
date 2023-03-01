import { getAccessToken, removeCookieToken } from "../apis/cookies";

/**로그인 여부 판단 */
export const isToken = () => {
  const myToken = getAccessToken();
  return myToken ? true : false;
};

/**로그아웃 하기 */
export const deleteToken = () => {
  removeCookieToken();
  sessionStorage.clear();
};
