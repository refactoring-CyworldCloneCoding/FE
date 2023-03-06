import { useQuery } from "react-query";
import { IDiaryId } from "../types/diary";
import { instance } from "./axios";

/** 다이어리 조회 */
export const GetDiary = (homeId: THome) => {
  return useQuery(
    ["getDiary"],
    async () => {
      const { data } = await instance.get(`/diaries/${homeId}`);
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

/** 다이어리 작성 */
export const PostDiary = async (payload: IPayload) => {
  console.log(payload);
  await instance.post(`/diaries/${payload.homeId}`, payload.data);
};

/** 다이어리 수정 */
export const EditDiary = async (payload: IPayload) => {
  await instance.put(`/diaries/${payload.id}`, payload.data);
};

/** 다이어리 삭제 */
export const DeleteDiary = async (payload: IPayload) => {
  await instance.delete(`/diaries/${payload.id}`);
};

/** 댓글 조회 */
export const GetComment = (id: IDiaryId) => {
  return useQuery(
    ["getComment"],
    async () => {
      const { data } = await instance.get(
        `/comments/${id.homeId}/${id.diaryId}`
      );
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

/** 댓글 작성 */
export const PostComment = async (payload: IPayload) => {
  await instance.post(
    `/comments/${payload.homeId}/${payload.id}`,
    payload.data
  );
};

/** 댓글 수정 */
export const EditComment = async (payload: IPayload) => {
  await instance.put(`/comments/${payload.id}`, payload.data);
};

/** 댓글 삭제 */
export const DeleteComment = async (payload: IPayload) => {
  await instance.delete(`/comments/${payload.id}`);
};
