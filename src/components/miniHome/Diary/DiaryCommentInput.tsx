import { FieldValues, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { PostComment } from "../../../apis/diaryApi";
import { IDiaryData } from "../../../types/diary";

const DiaryCommentInput = ({ diaryData }: IDiaryData) => {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm();

  const postComment = useMutation(PostComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("getDiary");
    },
    onError: (err: any) => {
      alert(err.response?.data.msg);
    },
  });

  const onPostComment = (data: FieldValues) => {
    if (data.comment.trim() === "") {
      alert("내용을 작성해주세요.");
    } else {
      postComment.mutate({
        id: diaryData?.diaryId,
        homeId: diaryData.myhomeId,
        data,
      });
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onPostComment)}>
      <StInput {...register("comment")} placeholder="댓글을 입력해주세요." />
      <StBtn>작성</StBtn>
    </form>
  );
};

export default DiaryCommentInput;

const StInput = styled.input`
  width: 90%;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const StBtn = styled.button`
  width: 10%;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;
