import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background: #0E0B16;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;
  }
button:hover {opacity: 0.7}
button:active {
  box-shadow: 0 5px #666;
  transform: translateY(4px);}
  
`