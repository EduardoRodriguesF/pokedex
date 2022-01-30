import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: #eaeced;
    background: #252C4C;
    font-family: 'Open-Sans', Helvetica, Sans-Serif;
  }

  * {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;