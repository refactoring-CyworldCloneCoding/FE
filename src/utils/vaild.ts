/** 이메일 검증 */
export const emailValid = () => ({
  required: "이메일 아이디를 입력해주세요.",
  maxLength: {
    value: 10,
    message: "10글자 이하로 작성해주세요",
  },
  minLength: {
    value: 4,
    message: "4글자 이상으로 작성해주세요",
  },
  pattern: {
    value: /^(?=.*[a-zA-Z])[a-zA-Z0-9]{4,10}$/,
    message: "영문을 포함해야 하며 숫자 사용이 가능합니다.",
  },
});

/** 비밀번호 검증 */
export const passwordValid = () => ({
  required: "비밀번호를 입력해주세요.",
  maxLength: {
    value: 20,
    message: "20자리 이하로 작성해주세요",
  },
  minLength: {
    value: 8,
    message: "8자리 이상으로 작성해주세요",
  },
  pattern: {
    value: /^(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,20}$/,
    message: "영문을 포함하고, 숫자, 특수문자(!@#$%^&*)사용 가능합니다.",
  },
});

/** 비밀번호 재확인 */
export const rePasswordValid = (password: string) => ({
  required: "비밀번호를 재입력해주세요.",
  validate: {
    confirmPw: (rePassword: string) =>
      rePassword === password || "비밀번호가 일치하지 않습니다.",
  },
});

/** 이름 확인 */
export const nameVaild = () => ({
  required: "이름을 입력해주세요.",
  maxLength: {
    value: 5,
    message: "5자리 이하로 작성해주세요",
  },
  pattern: {
    value: /^[가-힣a-zA-Z]+$/,
    message: "형식에 맞지 않는 이름 입니다.",
  },
});

/** 성별 확인 */
export const genderVaild = () => ({
  required: "성별을 선택해주세요.",
});

/** 생년월일 확인 */
export const birthVaild = () => ({
  required: "생년월일을 선택해주세요.",
  min: {
    value: "1800-01-01",
    message: "1800년대 이상으로 작성해주세요.",
  },
  max: {
    value: "2004-12-31",
    message: "2004년 이전 출생자만 가능합니다.",
  },
});
