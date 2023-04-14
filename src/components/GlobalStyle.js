import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ffffff;
    font-family: 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
  img {
    display: block;
    max-width: 100%;
  }
  ul {
    margin: 0;
    padding-left: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
  button {
    display: inline-block;
    cursor: pointer;
    border-radius: 4px;
    border-style: outset;
    color: inherit;
  }
`;

export default GlobalStyle;
