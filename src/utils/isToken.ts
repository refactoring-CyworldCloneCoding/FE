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

/**작성자 여부 판단 */
//나의 홈키와 비교
// param 값과 내 키값이 같거나
// id 값과 내 키 값이 같거나
const userId = sessionStorage.getItem("userId");

export type TId = {
  homeId: number | string | undefined;
  anyId?: number | undefined;
};

export const IsMyHome = (id: TId) => {
  return userId === `${id.homeId}` || userId === `${id.anyId}`;
};
