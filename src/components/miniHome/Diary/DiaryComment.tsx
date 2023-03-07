import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { DeleteComment, EditComment } from "../../../apis/diaryApi";
import { IComment } from "../../../types/diary";
import { IsMy, IsOur } from "../../../utils/isToken";

const DiaryComment = ({ commentData }: IComment) => {
  const queryClient = useQueryClient();
  const [isEdit, setIsEdit] = useState(false);
  const { register, handleSubmit } = useForm();

  const editComment = useMutation(EditComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("getDiary");
      alert("댓글이 수정되었습니다.");
    },
    onError: (err: any) => {
      alert(err.response?.data.msg);
    },
  });

  /**댓글 수정 */
  const onEditComment = (data: FieldValues) => {
    if (data.comment.trim() === "") {
      alert("내용을 작성해주세요.");
    } else {
      editComment.mutate({ id: commentData?.commentId, data });
      setIsEdit(false);
    }
  };

  /**댓글 삭제 */
  const deleteComment = useMutation(DeleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries("getDiary");
      alert("댓글이 삭제되었습니다.");
    },
    onError: (err: any) => {
      alert(err.response?.data.msg);
    },
  });

  return (
    <StBox>
      {isEdit ? (
        <form onSubmit={handleSubmit(onEditComment)} id="commentForm">
          <StEditInput
            maxLength={80}
            defaultValue={commentData.comment}
            {...register("comment")}
          />
        </form>
      ) : (
        <span>
          <StName>{commentData.name} : </StName>
          {commentData.comment}
          <StDate>({commentData.updatedAt})</StDate>
        </span>
      )}
      <>
        {IsOur({
          homeId: commentData?.myhomeId,
          anyId: commentData?.userId,
        }) && (
          <span>
            {isEdit ? (
              <span>
                <button type="submit" form="commentForm">
                  완료
                </button>
                <StBtn onClick={() => setIsEdit(false)}>취소</StBtn>
              </span>
            ) : (
              <span>
                {IsMy({ homeId: commentData?.userId }) && (
                  <StBtn onClick={() => setIsEdit(true)}>수정</StBtn>
                )}
                <StBtn
                  onClick={() =>
                    deleteComment.mutate({ id: commentData?.commentId })
                  }
                >
                  삭제
                </StBtn>
              </span>
            )}
          </span>
        )}
      </>
    </StBox>
  );
};

export default DiaryComment;

const StBox = styled.div`
  width: 100%;
  font-size: 0.9rem;
  margin: 0.4rem 0;
  p {
    word-break: break-all;
    line-height: 115%;
  }
  button {
    margin-left: 0.5rem;
    font-size: 0.5rem;
    color: #575757;
    border: none;
    background: none;
  }
`;

const StName = styled.span`
  color: #5b79c4;
`;

const StDate = styled.span`
  margin: 0 0.5rem;
  font-size: 0.5rem;
  color: #575757;
`;

const StBtn = styled.span`
  margin-left: 0.5rem;
  font-size: 0.5rem;
  color: #575757;
  cursor: pointer;
`;

const StEditInput = styled.input`
  width: 100%;
  font-size: 0.9rem;
`;
