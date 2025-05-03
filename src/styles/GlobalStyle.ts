import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    scroll-behavior: smooth;
  }
  body {
    background: #fcffe6;
    color: #222;
    font-family: 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export default GlobalStyle;
