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
  homeId?: string;
}

/**프로필 정보 */
interface IInfo {
  userInfo: {
    user: TUser;
    createdAt: number;
    intro: string;
    profile: string;
    myhomeId: number;
    today: number;
    total: number;
    updatedAt: number;
    userId: number;
  };
}

/**미니홈피 정보 */
interface IHome {
  homeId: string | undefined;
}

/**CRUD payload */
interface IPayload {
  data?: TBests;
  id?: number;
  homeId?: number | string | undefined;
}
