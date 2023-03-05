import styled from "styled-components";
import { FlexCenter } from "../../../styles/css";
import { IDiaryData } from "../../../types/diary";
import DiaryComment from "./DiaryComment";
import DiaryCommentInput from "./DiaryCommentInput";

const DiaryContent = ({ diaryData }: IDiaryData) => {
  return (
    <>
      <StDiary>
        <StTitle>
          <span>No.{diaryData?.diaryNo}</span>
          <span>{diaryData?.updatedAt}</span>
        </StTitle>
        <StBtnBox>
          <span>수정</span>
          <span>삭제</span>
        </StBtnBox>
        <StFlexBox>
          {diaryData?.dirImg && (
            <Stimg src={diaryData?.dirImg} alt="다이어리사진" />
          )}
          <p>{diaryData?.content}</p>
        </StFlexBox>
      </StDiary>
      <StCommentFlex>
        <DiaryCommentInput />
        <DiaryComment />
        <DiaryComment />
        <DiaryComment />
        <DiaryComment />
      </StCommentFlex>
    </>
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

const StBtnBox = styled.div`
  padding: 0.5rem;
  font-size: 0.8rem;
  color: #565656;
  display: flex;
  justify-content: flex-end;
  span {
    cursor: pointer;
    margin: 0 0.3rem;
  }
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

const StCommentFlex = styled.div`
  height: 100%;
  padding: 1rem;
  background-color: #f6f6f6;
  width: 100%;
`;
