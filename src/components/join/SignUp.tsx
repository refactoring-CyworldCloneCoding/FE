import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { instance } from "../../apis/axios";
import {
  birthVaild,
  emailValid,
  genderVaild,
  nameVaild,
  passwordValid,
  rePasswordValid,
} from "../../utils/vaild";

const SignUp = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  /**비밀번호 입력값 추적 */
  const password = watch("password");

  /**이메일 중복 검사 여부 판단 */
  const [emailCheck, setEmailCheck] = useState(false);

  const emailDup = async () => {
    const email = watch("email");
    if (!email) {
      alert("이메일 아이디를 입력해주세요.");
    } else {
      await instance
        .post("/users/emailcheck", { email: email })
        .then((res) => {
          alert(res.data.msg);
          setEmailCheck(true);
        })
        .catch((res) => {
          alert(res.response.data.message);
        });
    }
  };

  const onSignUp = async (data: FieldValues) => {
    if (!emailCheck) {
      alert("이메일 아이디 중복검사를 진행해주세요.");
    } else {
      await instance
        .post("/users/signup", data)
        .then((res) => {
          alert(res.data.msg);
          nav("/");
        })
        .catch(() => {
          alert("잘못된 접근입니다.");
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSignUp)}>
        <StLabel>이메일</StLabel>
        <div>
          <StInput
            type="text"
            placeholder="아이디"
            width="7.5rem"
            disabled={emailCheck}
            {...register("email", emailValid())}
          />
          <span>@cyworld.com</span>
          <StCheck onClick={emailDup} disabled={emailCheck} type="button">
            중복검사
          </StCheck>
        </div>
        {errors?.email ? (
          <StErr>{`${errors?.email.message}`}</StErr>
        ) : (
          <StText>4~10자, 영문을 포함해야하고 숫자 사용 가능</StText>
        )}
        <StLabel>비밀번호</StLabel>
        <StInput
          type="password"
          placeholder="비밀번호"
          {...register("password", passwordValid())}
        />
        {errors?.password ? (
          <StErr>{`${errors?.password.message}`}</StErr>
        ) : (
          <StText>
            8~20자, 영문을 포함하고, 숫자, 특수문자(!@#$%^&*)사용 가능
          </StText>
        )}
        <StLabel>비밀번호 재확인</StLabel>
        <StInput
          type="password"
          placeholder="비밀번호 재입력"
          {...register("confirm", rePasswordValid(password))}
        />
        {errors?.confirm ? (
          <StErr>{`${errors?.confirm.message}`}</StErr>
        ) : (
          <StText>비밀번호 재입력</StText>
        )}
        <StLabel>성별 / 이름 / 생년월일</StLabel>
        <div>
          <StSelect {...register("gender", genderVaild())}>
            <option value="">성별</option>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
          </StSelect>
          <StInput
            type="text"
            placeholder="이름"
            width="6rem"
            style={{ margin: "0 0.5rem" }}
            {...register("name", nameVaild())}
          />
          <StInput
            type="date"
            min="0000-01-01"
            max="2023-12-31"
            {...register("birth", birthVaild())}
          />
        </div>
        {errors?.name ? (
          <StErr>{`${errors?.name.message}`}</StErr>
        ) : (
          <StText>이름은 한글 또는 영문 1-5자</StText>
        )}
        {errors?.gender ? (
          <StErr>{`${errors?.gender.message}`}</StErr>
        ) : (
          <StText>성별 선택 필수</StText>
        )}
        {errors?.birth ? (
          <StErr>{`${errors?.birth.message}`}</StErr>
        ) : (
          <StText>1900-2004년생까지만 가능</StText>
        )}
        <StButton type="submit">가입하기</StButton>
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

const StErr = styled.p`
  font-size: 0.8rem;
  color: red;
  margin-bottom: 1rem;
`;

const StSelect = styled.select`
  width: 4rem;
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
