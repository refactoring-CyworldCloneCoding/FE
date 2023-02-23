import { useState } from "react";
import styled from "styled-components";
import Modal from "../../../elements/Modal";
import DiaryContent from "./DiaryContent";

const Diary = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <Modal setOpen={setOpen} />}
      <StFlex>
        <StBtnBox>
          <StBtn onClick={() => setOpen((x) => !x)}>다이어리 작성하기</StBtn>
        </StBtnBox>
        <StDiaryBox>
          <DiaryContent />
          <DiaryContent />
          <DiaryContent />
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
