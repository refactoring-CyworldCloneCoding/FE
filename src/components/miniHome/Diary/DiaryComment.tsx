import { useState } from "react";
import styled from "styled-components";

const DiaryComment = () => {
  const [isEdit, setIsEdit] = useState(false);

  /**댓글 수정 */
  const onEditComment = () => {
    setIsEdit(false);
  };

  /**댓글 삭제 */

  return (
    <StBox>
      {isEdit ? (
        <StEditInput defaultValue={"어쩔"} />
      ) : (
        <span>
          <StName>김싸이 : </StName>
          안녕하세요안녕하세요안녕하안녕세요안녕하세요안녕하세요 안녕하세요
          <StDate>(2020-2020-2020)</StDate>
        </span>
      )}
      <span>
        {isEdit ? (
          <StBtn onClick={() => onEditComment()}>완료</StBtn>
        ) : (
          <StBtn onClick={() => setIsEdit(true)}>수정</StBtn>
        )}
        <StBtn>삭제</StBtn>
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
