import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const point = {
  color: "#5871ff",
  smooth: "#5871ff40",
  verySmooth: "#5871ff10",
};

export const GlobalStyled = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    color: #ffffff;
    font-family: "Noto Sans KR", sans-serif;
    background-color: #c6dff120;
    letter-spacing: -1px;
    
    /* word-break: keep-all; */
  }

  a {
    text-decoration: none;
    color: #121216;
  }

  li {
    list-style: none;
  }

  img {
    width: 100%;
    display: block;
  }
`;
