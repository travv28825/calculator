import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-weight: 400;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-size: 16px;
    line-height: 1.4;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    list-style: none;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    resize: none;
    -webkit-scrollbar: none;
    text-decoration: none;
  }
  *:hover{
    text-decoration:none;
  }
  body {
    position: relative;
  }
  #root{
    width:100% ;
    height:100vh ;
    background:#383838 ;
  }
`;

export default GlobalStyle;
