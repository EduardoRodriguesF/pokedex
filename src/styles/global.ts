import { createGlobalStyle } from "styled-components";
import * as colors from './colors';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${colors.theme.font};
    background: ${colors.theme.absoluteBackground};
    font-family: 'Poppins', 'Open-Sans', Helvetica, Sans-Serif;
  }

  * {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;