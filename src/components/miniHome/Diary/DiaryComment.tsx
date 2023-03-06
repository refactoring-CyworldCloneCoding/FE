import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { DeleteComment } from "../../../apis/diaryApi";
import { IComment } from "../../../types/diary";

const DiaryComment = ({ commentData }: IComment) => {
  const queryClient = useQueryClient();
  const [isEdit, setIsEdit] = useState(false);

  /**댓글 수정 */
  const onEditComment = () => {
    setIsEdit(false);
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
        <StEditInput defaultValue={commentData.comment} />
      ) : (
        <span>
          <StName>{commentData.name} : </StName>
          {commentData.comment}
          <StDate>({commentData.updatedAt})</StDate>
        </span>
      )}
      <span>
        {isEdit ? (
          <span>
            <StBtn onClick={() => onEditComment()}>완료</StBtn>
            <StBtn onClick={() => setIsEdit(false)}>취소</StBtn>
          </span>
        ) : (
          <span>
            <StBtn onClick={() => setIsEdit(true)}>수정</StBtn>
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
