import styled from "styled-components";
import Login from "../components/main/Login";
import MainBtn from "../components/main/MainBtn";
import mainLogo from "../shared/images/mainLogo.png";
import { FlexCenter } from "../styles/css";

const Main = () => {
  return (
    <StMain>
      <StLogo src={mainLogo} alt="싸이월드메인로고" />
      <StBox>
        <Login />
        <MainBtn />
      </StBox>
    </StMain>
  );
};

export default Main;

const StMain = styled.div`
  width: 100%;
  height: 100vh;
  ${FlexCenter}
  flex-direction: column;
  background-color: #eee;
`;

const StLogo = styled.img`
  width: 18rem;
`;

const StBox = styled.div`
  width: 24rem;
  height: 12rem;
  border: 0.1rem solid #6d6d6d;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: white;
`;
