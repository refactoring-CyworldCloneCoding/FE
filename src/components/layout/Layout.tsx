import styled from "styled-components";
import pattern from "../../shared/images/pattern.png";

type childrenProps = {
  children: JSX.Element;
};

function Layout({ children }: childrenProps) {
  return <StBase>{children}</StBase>;
}
export default Layout;

//배경
const StBase = styled.div`
  background-color: #a3a3a3;
  background-image: url ${pattern};
  background-size: 100px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;
