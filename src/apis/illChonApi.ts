import { useQuery } from "react-query";
import { instance } from "./axios";

/** 일촌평 조회 */
export const GetBests = (homeId: THome) => {
  return useQuery(
    ["getBests"],
    async () => {
      const { data } = await instance.get(`/bests/${homeId}`);
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

/** 일촌평 작성 */
export const PostBests = async (payload: IPayload) => {
  await instance.post(`/bests/${payload.homeId}`, payload.data);
};

/** 일촌평 삭제 */
export const DeleteBests = async (payload: IPayload) => {
  await instance.delete(`/bests/${payload.id}/${payload.homeId}`);
};

/** 일촌평 수정 */
export const EditBests = async (payload: any) => {
  console.log(payload);
  // await instance.put(`/bests/${}/${}`);
};
