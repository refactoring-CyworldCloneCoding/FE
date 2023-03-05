import styled from "styled-components";

const DiaryCommentInput = () => {
  return (
    <form>
      <StInput placeholder="댓글을 입력해주세요." />
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
