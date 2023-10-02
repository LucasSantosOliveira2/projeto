import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  margin: 0;
  padding:0;
  height: 100%;
  width: 100%;
  font-family: 'DM Sans', sans-serif;
}

body{
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  text-decoration: none;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}`;

export default GlobalStyle;