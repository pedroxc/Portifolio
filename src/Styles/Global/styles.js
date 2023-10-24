import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin:0px;
    max-width:100vw;
    background: #0E0B16;
    font-family: Ubuntu;
    font-size: 36px;
    line-height: 1.125;
  }
button:hover {opacity: 0.6}
button:active {
  box-shadow: 0 5px #666;
  transform: translateY(4px);}
  
`;
