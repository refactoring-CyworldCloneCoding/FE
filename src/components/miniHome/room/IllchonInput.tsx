import styled from "styled-components";
import { FlexCenter } from "../../../styles/css";

const IllchonInput = () => {
  return (
    <StIllchon as="form">
      <p>일촌평</p>
      <input className="nick" type="text" placeholder="일촌명" />
      <input
        type="text"
        placeholder="일촌과 나누고 싶은 이야기를 나눠보세요~!"
        className="comment"
      />
      <button type="submit">등록</button>
    </StIllchon>
  );
};

export default IllchonInput;

const StIllchon = styled.form`
  width: 100%;
  height: 2rem;
  margin: 0.5rem 0;
  ${FlexCenter}
  background-color: #f4f4f4;

  input {
    margin-left: 0.5rem;
    border: 1px solid #dedddd;
    &:focus {
      outline: none;
    }
  }
  p {
    font-weight: 700;
    color: #1ea7cc;
  }
  button {
    margin-left: 0.5rem;
    background-color: #ffffff;
    border: 1px solid #dedddd;
    :hover {
      background-color: #e0e0e0;
      cursor: pointer;
    }
  }
  & .nick {
    width: 4rem;
  }
  & .comment {
    width: 22rem;
  }
`;
