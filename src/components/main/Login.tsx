import { FieldValues, useForm } from "react-hook-form";
import styled from "styled-components";
import { setAccessToken } from "../../apis/cookies";
import axios from "axios";

const Login = ({ setIsLogin }: ILogin) => {
  const { register, handleSubmit } = useForm();

  const onLogin = async (data: FieldValues) => {
    await axios
      .post("/users/login", data)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          setAccessToken(res.data.authorization);
          sessionStorage.setItem("userId", res.data.myhomeId);
          setIsLogin(true);
          alert("로그인 하였습니다.");
        }
      })
      .catch((res) => {
        console.log(res);
        if (res.response.data.status === "error")
          alert("아이디 또는 비밀번호를 다시 확인해주세요.");
        if (res.response.data.status === "fail")
          alert("가입하신 회원이 아닙니다.");
      });
  };
  return (
    <>
      <StText>사이 좋은 사람들, 싸이월드 </StText>
      <StForm onSubmit={handleSubmit(onLogin)}>
        <div>
          <StInput
            type="email"
            placeholder="example@cyworld.com"
            {...register("email")}
          />
          <StInput
            type="password"
            placeholder="비밀번호"
            {...register("password")}
          />
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
  width: 8.5rem;
  height: 4.5rem;
  background-color: #fe6f03;
  color: white;
  border: 0;
  border-radius: 0.5rem;
`;
