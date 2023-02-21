import styled from "styled-components";
import SignUp from "../components/join/SignUp";
import { MainBg } from "../styles/css";

const Join = () => {
  return (
    <StJoin>
      <StBox>
        <StText>회원가입</StText>
        <SignUp />
      </StBox>
    </StJoin>
  );
};

export default Join;

const StJoin = styled.div`
  ${MainBg}
`;

const StBox = styled.div`
  width: 24rem;
  height: 35rem;
  border: 0.1rem solid #6d6d6d;
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: white;
`;

const StText = styled.p`
  font-size: 2.5rem;
  color: #fe6f03;
  font-weight: 700;
  margin-bottom: 1rem;
`;
