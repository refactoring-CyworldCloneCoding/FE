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
export const EditIntro = async (payload: IIntro) => {
  await instance.put(`/users/${payload.myHomeId}`, { intro: payload.intro });
};
