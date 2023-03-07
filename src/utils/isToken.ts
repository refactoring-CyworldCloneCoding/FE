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
//나의 유저키와 비교
const userId = sessionStorage.getItem("userId");

export interface IId {
  homeId: number | string | undefined;
  anyId?: number | undefined;
}

/**작성자와 홈피주인 판단 */
export const IsOur = (id: IId) => {
  return userId === `${id.homeId}` || userId === `${id.anyId}`;
};

/**홈피 주인만 판단 */
export const IsMy = (id: IId) => {
  return userId === `${id.homeId}`;
};
