import styled from "styled-components";
import { FlexCenter } from "../../../styles/css";

const DiaryContent = () => {
  return (
    <StDiary>
      <StTitle>
        <span>No.12</span>
        <span>2020.20.20</span>
      </StTitle>
      <Stnaem>김싸이</Stnaem>
      <StFlexBox>
        <Stimg src="/cyworldmeta.jpeg" alt="다이어리사진" />
        <p>
          dfsjklsdklfdjkslfdsklfjdslfjsdklfjsdflsdfjsdlkfjklsfdjsdlfsdlkfjsdfklsdfjslkfjdslfsdjfldskfjsl
        </p>
      </StFlexBox>
    </StDiary>
  );
};

export default DiaryContent;

const StDiary = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const StTitle = styled.div`
  width: 100%;
  padding: 0.5rem;
  background-color: #f1f1f1;
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  border: 0.1rem solid gray;
`;

const Stnaem = styled.div`
  padding: 0.5rem;
  color: navy;
  display: flex;
  justify-content: flex-end;
`;

const StFlexBox = styled.div`
  ${FlexCenter}
  flex-direction: column;
  padding: 1rem;
  p {
    margin-top: 1rem;
    word-break: break-all;
  }
`;

const Stimg = styled.img`
  max-width: 20rem;
`;
