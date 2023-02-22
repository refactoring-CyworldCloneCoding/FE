import styled from "styled-components";
import { getBookMinimi } from "../../../utils/getItem";

const GuestInput = () => {
  return (
    <StBookDiv>
      <StFlex>
        <StMinimi src={getBookMinimi()} alt="미니미" />
        <StText />
      </StFlex>
      <button>등록</button>
    </StBookDiv>
  );
};

export default GuestInput;

const StBookDiv = styled.div`
  width: 100%;
  font-size: 0.9rem;
  width: 100%;
  padding: 0.5rem;
  background-color: #f1f1f1;
  margin-bottom: 1rem;
  button {
    font-size: 0.9rem;
    margin-top: 0.5rem;
    float: right;
  }
`;

const StMinimi = styled.img`
  width: 25%;
  border: 0.1rem solid gray;
  background-color: white;
`;

const StText = styled.textarea`
  width: 75%;
  margin-left: 1rem;
`;

const StFlex = styled.div`
  display: flex;
`;
