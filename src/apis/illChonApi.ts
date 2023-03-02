import { useQuery } from "react-query";
import { IBests } from "../types/illchon";
import { instance } from "./axios";

/** 일촌평 조회 */
export const GetBests = (myHomeId: THome) => {
  return useQuery(
    ["getBests"],
    async () => {
      const { data } = await instance.get(`/bests/${myHomeId}`);
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

/** 일촌평 작성 */
export const PostBests = async (payload: IBests) => {
  await instance.post(`/bests/${payload.myHomeId}`, payload.data);
};

/** 일촌평 삭제 */
export const DeleteBests = async (payload: IBests) => {
  await instance.delete(`/bests/${payload.id}/${payload.myHomeId}`);
};

/** 일촌평 수정 */
export const EditBests = async (payload: any) => {
  console.log(payload);
  // await instance.put(`/bests/${}/${}`);
};
