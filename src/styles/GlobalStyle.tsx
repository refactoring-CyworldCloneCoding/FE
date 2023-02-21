import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
 }   


  body {
  font-family: 'Pretendard-Regular'
  }

  * {
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
    resize: none;
    /* 인풋 포커스 해제 */
    &:focus {
    outline: none;
    }
  }

  button {
    cursor: pointer;
  }
  
  `;

export default GlobalStyle;
