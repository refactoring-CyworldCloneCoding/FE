import { useQuery } from "react-query";
import { instance } from "./axios";

/** 본인 미니홈피 정보 */
export const GetHomeInfo = (myHomeId: THome) => {
  return useQuery(
    ["homeInfo"],
    async () => {
      const { data } = await instance.get(`/users/${myHomeId}`);
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

/*프로필 소개 수정 */
export const EditIntro = async (payload: IPayload) => {
  await instance.put(`/users/${payload.homeId}`, payload.data);
};

/** 일촌 조회하기 */
/** 일촌 맺기*/
/** 일촌명 변경하기 */
/** 일촌 끊기 */
