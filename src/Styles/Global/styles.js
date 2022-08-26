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
  h1{
    color: #C9C2F2;
    font-size: 36px;
  }
  h2{font-family: Inter;
font-size: 36px;
font-weight: 400;
line-height: 44px;
letter-spacing: 0em;
text-align: left;
}
button:hover {opacity: 0.7}
button:active {
  box-shadow: 0 5px #666;
  transform: translateY(4px);}
  
`