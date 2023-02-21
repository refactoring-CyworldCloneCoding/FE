import styled from "styled-components";
import { FlexCenter } from "../../styles/css";

const Cover = ({ children }: childrenProps) => {
  return (
    <StOutline>
      <StDot>
        <StPage>{children}</StPage>
      </StDot>
    </StOutline>
  );
};

export default Cover;

//미니홈피 다이어리 표지
const StOutline = styled.div`
  background-color: #aed2dd;
  border-radius: 0.5rem;
  border: 0.1rem solid #738186;
  width: 60rem;
  height: 40rem;
  padding: 1rem;
  ${FlexCenter}
`;

//점선테두리
const StDot = styled.div`
  border: 0.15rem dashed white;
  border-radius: 0.5rem;
  width: 58rem;
  height: 38rem;
  ${FlexCenter}
`;

//회색 박스
const StPage = styled.div`
  background-color: #f0f0f0;
  border-radius: 0.5rem;
  width: 56rem;
  height: 36rem;
`;
