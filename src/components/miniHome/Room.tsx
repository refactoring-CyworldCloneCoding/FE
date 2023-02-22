import styled from "styled-components";
import { FlexCenter } from "../../styles/css";
import { getAvt, getMiniroom } from "../../utils/getItem";

const Room = () => {
  return (
    <StRoomBox>
      <StTitle>
        <p>미니룸</p>
      </StTitle>
      <StRoom src={getMiniroom("여자")} alt="미니룸" />
      <StAvt src={getAvt("여자")} alt="미니미" />
      <StIllchon as="form">
        <p>일촌평</p>
        <input className="nick" type="text" placeholder="일촌명" required />
        <input
          type="text"
          placeholder="일촌과 나누고 싶은 이야기를 나눠보세요~!"
          className="comment"
          required
        />
        <button type="submit">등록</button>
      </StIllchon>
      <StIllChonBox>
        <StFlex>
          <p>
            · 일촌평 남겨요 (친구 <span>이름</span>)
          </p>
          <StBtn>x</StBtn>
        </StFlex>
      </StIllChonBox>
    </StRoomBox>
  );
};

export default Room;

const StRoomBox = styled.div`
  padding: 1rem;
  ${FlexCenter}
  flex-direction: column;
`;

const StTitle = styled.div`
  width: 100%;
  font-weight: 700;
  color: #1ea7cc;
  margin: 0.5rem 0;
`;

const StRoom = styled.img`
  width: 100%;
`;

const StAvt = styled.img`
  width: 2.5rem;
  position: absolute;
  top: 22rem;
`;

const StIllchon = styled.form`
  width: 100%;
  height: 2rem;
  margin: 0.5rem 0;
  ${FlexCenter}
  background-color: #f4f4f4;

  input {
    margin-left: 0.5rem;
    border: 1px solid #dedddd;
    &:focus {
      outline: none;
    }
  }
  p {
    font-weight: 700;
    color: #1ea7cc;
  }
  button {
    margin-left: 0.5rem;
    background-color: #ffffff;
    border: 1px solid #dedddd;
    :hover {
      background-color: #e0e0e0;
      cursor: pointer;
    }
  }
  & .nick {
    width: 4rem;
  }
  & .comment {
    width: 22rem;
  }
`;

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
