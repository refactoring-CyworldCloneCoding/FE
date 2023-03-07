import { useQuery } from "react-query";
import { instance } from "./axios";

/** 방명록 조회 */
export const GetBook = (homeId: THome) => {
  return useQuery(
    ["getGestBook"],
    async () => {
      const { data } = await instance.get(`/guestbooks/${homeId}`);
      return data;
    },
    {
      refetchOnWindowFocus: false,
    }
  );
};

/** 방명록 작성 */
export const PostBook = async (payload: IPayload) => {
  await instance.post(`/guestbooks/${payload.homeId}`, payload.data);
};

interface IBookEdit {
  text: string;
  guestbookId: number;
}
/** 방명록 수정 */
export const EditBook = async (payload: IBookEdit) => {
  await instance.put(`/guestbooks/${payload.guestbookId}`, {
    guestbook: payload.text,
  });
};

/** 방명록 삭제 */
export const DeleteBook = async (payload: number) => {
  await instance.delete(`/guestbooks/${payload}`);
};
