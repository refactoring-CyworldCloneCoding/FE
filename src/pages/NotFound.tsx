import styled from "styled-components";
import { FlexCenter } from "../styles/css";

const NotFound = () => {
  return (
    <Stdiv>
      <StNot>4😥4</StNot>
      <p>이 페이지는 없는 페이지 입니다.</p>
    </Stdiv>
  );
};

export default NotFound;

const Stdiv = styled.div`
  width: 100%;
  height: 100vh;
  ${FlexCenter};
  font-weight: 700;
  flex-direction: column;
`;

const StNot = styled.div`
  font-size: 6rem;
  font-weight: 700;
`;
