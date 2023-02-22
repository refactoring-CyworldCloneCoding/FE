import styled from "styled-components";

const IllChonComent = () => {
  return (
    <StIllChonBox>
      <StFlex>
        <p>
          · 일촌평 남겨요 (친구 <span>이름</span>)
        </p>
        <StBtn>x</StBtn>
      </StFlex>
    </StIllChonBox>
  );
};

export default IllChonComent;

const StIllChonBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #6c6c6c;
  overflow: auto;
  width: 100%;
  height: 6rem;

  span {
    font-weight: 600;
    color: #1ea7cc;
  }
`;

const StBtn = styled.button`
  border: none;
  font-size: 0.8rem;
  background-color: white;
`;

const StFlex = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    word-break: break-all;
  }
`;
