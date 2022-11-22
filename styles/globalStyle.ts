import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    background-color: transparent;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    text-decoration: none;
    line-height: 130%;
    list-style: none;
    box-sizing: border-box;
  }

  button { cursor: pointer; }

  html { font-size: 10px; }
`;

export default GlobalStyle;
