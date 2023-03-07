import { useEffect, useState } from "react";
import styled from "styled-components";
import { isToken } from "../utils/isToken";
import SignUp from "../components/join/SignUp";
import { MainBg } from "../styles/css";
import { useNavigate } from "react-router-dom";

const Join = () => {
  const [isLogin, setIsLogin] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    setIsLogin(isToken());
    nav("/");
  }, [isLogin, nav]);

  return (
    <StJoin>
      {isLogin ? (
        <div>로그인 유저는 접근할 수 없는 페이지 입니다.</div>
      ) : (
        <StBox>
          <StText>회원가입</StText>
          <SignUp />
        </StBox>
      )}
    </StJoin>
  );
};

export default Join;

const StJoin = styled.div`
  ${MainBg}
`;

const StBox = styled.div`
  width: 26rem;
  height: 38rem;
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
