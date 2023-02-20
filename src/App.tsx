import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { FlexCenter } from "./shared/css";
import Router from "./shared/Router";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
