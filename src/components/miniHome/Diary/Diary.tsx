import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GetDiary } from "../../../apis/diaryApi";
import DiaryModal from "./DiaryModal";
import DiaryContent from "./DiaryContent";
import { TDiaryData } from "../../../types/diary";

const Diary = () => {
  const [open, setOpen] = useState(false);
  const { homeId } = useParams();
  const { data } = GetDiary(homeId);

  const diaryDatas = data?.data;

  return (
    <>
      {open && <DiaryModal homeId={homeId} setOpen={setOpen} />}
      <StFlex>
        <StBtnBox>
          <StBtn onClick={() => setOpen(true)}>다이어리 작성하기</StBtn>
        </StBtnBox>
        <StDiaryBox>
          {diaryDatas?.map((diaryData: TDiaryData) => (
            <DiaryContent key={diaryData?.diaryId} diaryData={diaryData} />
          ))}
        </StDiaryBox>
      </StFlex>
    </>
  );
};

export default Diary;

const StDiaryBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 26rem;
  overflow: auto;
`;

const StBtnBox = styled.div`
  margin-bottom: 1rem;
`;

const StBtn = styled.button`
  float: right;
`;

const StFlex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
