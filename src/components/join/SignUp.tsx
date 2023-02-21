import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SignUp = () => {
  const nav = useNavigate();
  return (
    <>
      <form>
        <StLabel>이메일</StLabel>
        <div>
          <StInput type="text" width="6rem" />
          <span>@cyworld.com</span>
          <StCheck>중복검사</StCheck>
        </div>
        <StText>4~10자, 영문을 포함해야하고 숫자 사용 가능</StText>
        <StLabel>비밀번호</StLabel>
        <StInput type="password" />
        <StText>
          8~20자, 영문을 포함하고, 숫자, 특수문자(!@#$%^&*)사용 가능
        </StText>
        <StLabel>비밀번호 재확인</StLabel>
        <StInput type="password" />
        <StText>비밀번호 재입력</StText>
        <StLabel>성별 / 이름 / 생년월일</StLabel>
        <div>
          <StSelect>
            <option value="">성별</option>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
          </StSelect>
          <StInput width="6rem" style={{ margin: "0 0.5rem" }} />
          <StInput
            defaultValue="1900-01-01"
            type="date"
            min="1900-01-01"
            max="2004-12-31"
          />
        </div>
        <StText>이름은 한글 또는 영문 1-5자</StText>
        <StButton>가입하기</StButton>
      </form>
      <StBackButton onClick={() => nav("/")}>돌아가기</StBackButton>
    </>
  );
};

export default SignUp;

const StInput = styled.input`
  margin: 0.5rem 0;
  width: ${(props) => props.width};
  height: 2rem;
`;

const StLabel = styled.p`
  font-weight: 700;
`;

const StText = styled.p`
  font-size: 0.8rem;
  color: gray;
  margin-bottom: 1rem;
`;

const StSelect = styled.select`
  width: 3rem;
  height: 2rem;
  margin: 0.5rem 0;
`;

const StCheck = styled.button`
  margin-left: 2.5rem;
`;

const StButton = styled.button`
  width: 100%;
  height: 2.5rem;
  border: 0;
  border-radius: 0.5rem;
  background-color: #fe6f03;
  margin-top: 0.5rem;
  color: white;
`;

const StBackButton = styled.button`
  width: 100%;
  height: 2.5rem;
  border: 0.1rem solid #fe6f03;
  background-color: #ffffff;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
`;
