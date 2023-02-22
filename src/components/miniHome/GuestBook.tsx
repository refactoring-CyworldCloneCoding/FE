import styled from "styled-components";
import { FlexCenter } from "../../styles/css";

const GuestBook = () => {
  return <StGuestBox></StGuestBox>;
};

export default GuestBook;

const StGuestBox = styled.div`
  padding: 1rem;
  ${FlexCenter}
  flex-direction: column;
`;
