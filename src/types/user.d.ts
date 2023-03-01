/**미니홈피 조회 */
type THome = string | null | undefined;

/**타이틀 이름 */
interface IName {
  titleName: string;
}
/**유저 정보 */
type TUser = {
  birth: string;
  createdAt: number;
  email: string;
  gender: string;
  name: string;
  updatedAt: number;
  userId: number;
};

/**프로필 정보 */
interface IInfo {
  userInfo: {
    User: TUser;
    createdAt: number;
    intro: string;
    myhomeId: number;
    today: number;
    total: number;
    updatedAt: number;
    userId: number;
  };
}
