import styled from "styled-components";
import { FlexCenter } from "../../styles/css";
import { getMinimi } from "../../utils/getItem";
import getMinihome from "../../utils/getMinihome";

const LoginUser = () => {
  return (
    <StUserBox>
      <p>000님 반갑습니다.</p>
      <StFlexdiv>
        <img src={getMinimi("여자")} alt="성별미니미" />
        <StBtnBox>
          <StButton onClick={() => getMinihome(1)}>마이 미니홈피 가기</StButton>
          <StLogOut>로그아웃 하기 </StLogOut>
        </StBtnBox>
      </StFlexdiv>
    </StUserBox>
  );
};

export default LoginUser;

const StUserBox = styled.div`
  p {
    font-size: 1.5rem;
    font-weight: 600;
    margin-left: 1rem;
  }
`;

const StFlexdiv = styled.div`
  display: flex;
  padding: 1rem;
`;

const StBtnBox = styled.div`
  width: 100%;
  ${FlexCenter}
  flex-direction: column;
  margin-left: 1rem;
`;

const StButton = styled.button`
  width: 100%;
  height: 2rem;
  border: 0;
  border-radius: 0.5rem;
  background-color: #fe6f03;
  margin-bottom: 0.5rem;
  color: white;
`;

const StLogOut = styled.button`
  width: 100%;
  height: 2rem;
  border: 0.1rem solid #fe6f03;
  border-radius: 0.5rem;
  background-color: #ffffff;
`;
