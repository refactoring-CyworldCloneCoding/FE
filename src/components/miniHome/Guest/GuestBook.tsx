import styled from "styled-components";
import GuestComment from "./GuestComment";
import GuestInput from "./GuestInput";

const GuestBook = () => {
  return (
    <StGuestBox>
      <GuestInput />
      <GuestComment />
    </StGuestBox>
  );
};

export default GuestBook;

const StGuestBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
