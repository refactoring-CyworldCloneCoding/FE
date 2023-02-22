import styled from "styled-components";
import { FlexCenter } from "../../../styles/css";
import { getAvt, getMiniroom } from "../../../utils/getItem";
import IllChonComent from "./IllChonComent";
import IllchonInput from "./IllchonInput";

const Room = () => {
  return (
    <StRoomBox>
      <StTitle>
        <p>미니룸</p>
      </StTitle>
      <StRoom src={getMiniroom("여자")} alt="미니룸" />
      <StAvt src={getAvt("여자")} alt="미니미" />
      <IllchonInput />
      <IllChonComent />
    </StRoomBox>
  );
};

export default Room;

const StRoomBox = styled.div`
  padding: 1rem;
  ${FlexCenter}
  flex-direction: column;
`;

const StTitle = styled.div`
  width: 100%;
  font-weight: 700;
  color: #1ea7cc;
  margin: 0.5rem 0;
`;

const StRoom = styled.img`
  width: 100%;
`;

const StAvt = styled.img`
  width: 2.5rem;
  position: absolute;
  top: 22rem;
`;
