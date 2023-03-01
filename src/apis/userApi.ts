import { useQuery } from "react-query";
import { instance } from "./axios";

/** 본인 미니홈피 정보 */
export const GetHomeInfo = (myhomeId: string | null) => {
  return useQuery(
    ["homeInfo"],
    async () => {
      const { data } = await instance.get(`/users/${myhomeId}`);
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};
