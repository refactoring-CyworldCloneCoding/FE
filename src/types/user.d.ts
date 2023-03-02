/**미니홈피 조회 */
type THome = string | null | undefined;

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

/**유저 정보 받기 */
interface IUSerData {
  userData: TUser;
  myHomeId?: string;
}

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

/**인트로 수정 */
interface IIntro {
  intro: string;
  param: string | undefined;
}

/**미니홈피 정보 */
interface IHome {
  myHomeId: string | undefined;
}
