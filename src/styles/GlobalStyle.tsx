import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}


  * {
    font-size: 1rem;
    box-sizing: border-box;
    resize: none;
    /* 인풋 포커스 해제 */
    &:focus {
    outline: none;
    }
  }

  button {
    cursor: pointer;
    font-size: 1rem;
  }
  
  `;

export default GlobalStyle;
