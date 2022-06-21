import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 500;
  }
  
  a, button {
    font-family: 'Roboto', sans-serif;
  }
  p,h1,h2,h3,h4,h5,h6,ul,li,span,button {
    
    margin: 0;padding: 0;
    }
`;
