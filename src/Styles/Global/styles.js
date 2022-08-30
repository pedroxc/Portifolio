import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background: #0a0310;
    font-family: "eurostile", sans-serif;
    font-size: 36px;
    line-height: 1.125;
  }
button:hover {opacity: 0.7}
button:active {
  box-shadow: 0 5px #666;
  transform: translateY(4px);}
  
`