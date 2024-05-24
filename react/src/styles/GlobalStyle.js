import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
    body{
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        color: #333;
    }

    ::-webkit-scrollbar {
        width: 16px;
    }

    ::-webkit-scrollbar-track {
        background: #0def7d87;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #0def7d;
        border-radius: 4px;
        height: auto;
  }
`;
export default GlobalStyles;