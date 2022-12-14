import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.textColor};
    font-family: 'Montserrat', sans-serif;
    font-size: ${({ theme }) => theme.fonts.normal};
    font-weight: 400;
    text-decoration: none;
    line-height: 150%;
    list-style: none;
    box-sizing: border-box;
    transition-duration: 0.3s;
    transition-property: background-color, color;
  }

  button { cursor: pointer; }

  html {
    background-color: ${({ theme }) => theme.background};
    font-size: 10px;
  }

  body {
    max-width: 1000px;
    padding: 0 24px;
    margin: 0 auto;
  }

  h1, strong, b {
    color: ${({ theme }) => theme.titleColor};
    font-weight: 600;
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.title};
  }

  h2, h3, h4 {
    color: ${({ theme }) => theme.titleColor};
    font-weight: 500;
  }
  
  h2, h3 {
    font-size: ${({ theme }) => theme.fonts.subtitle};
  }
  
  h4 {
    font-size: ${({ theme }) => theme.fonts.bigText};
  }
`;

export default GlobalStyle;
