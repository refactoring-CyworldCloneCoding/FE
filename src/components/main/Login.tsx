import styled from "styled-components";

const Login = () => {
  return (
    <>
      <StText>사이 좋은 사람들, 싸이월드 </StText>
      <StForm>
        <div>
          <StInput type="email" placeholder="example@cyworld.com" />
          <StInput type="password" placeholder="비밀번호" />
        </div>
        <StLoginBtn type="submit">로그인</StLoginBtn>
      </StForm>
    </>
  );
};

export default Login;

const StForm = styled.form`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
`;

const StInput = styled.input`
  width: 16rem;
  height: 2rem;
  margin-bottom: 0.5rem;
`;

const StText = styled.p`
  font-size: 1.2rem;
  color: #fe6f03;
  font-weight: 700;
`;

const StLoginBtn = styled.button`
  font-size: 1rem;
  width: 8.5rem;
  height: 4.5rem;
  background-color: #fe6f03;
  color: white;
  border: 0;
  border-radius: 0.5rem;
`;
