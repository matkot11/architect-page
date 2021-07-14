import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    /* padding: 6rem 6rem 6rem 6rem; */
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
  }

  h2, h1, h3 {
    margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
