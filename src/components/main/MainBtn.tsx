import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainBtn = () => {
  const nav = useNavigate();

  const onRandom = () => {
    axios.get(`/users/surfing`).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <StBtn onClick={() => nav("/join")}>회원가입</StBtn>
      <StBtn onClick={onRandom}>랜덤 미니홈피 구경하기</StBtn>
    </>
  );
};

export default MainBtn;

const StBtn = styled.button`
  font-size: 1rem;
  margin-right: 0.5rem;
`;
