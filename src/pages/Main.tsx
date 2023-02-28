import styled from "styled-components";
import Login from "../components/main/Login";
import LoginUser from "../components/main/LoginUser";
import MainBtn from "../components/main/MainBtn";
import mainLogo from "../shared/images/mainLogo.png";
import { MainBg } from "../styles/css";

const Main = () => {
  return (
    <StMain>
      <StLogo src={mainLogo} alt="싸이월드메인로고" />
      <StBox>
        {false ? (
          <LoginUser />
        ) : (
          <>
            <Login />
            <MainBtn />
          </>
        )}
      </StBox>
    </StMain>
  );
};

export default Main;

const StMain = styled.div`
  ${MainBg}
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
