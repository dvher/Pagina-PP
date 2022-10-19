import { createGlobalStyle } from 'styled-components';

 
const GlobalStyle = createGlobalStyle`
  body {
    font-family: Rubik, Lato;
    overflow-x: hidden;
  }

  h1 {
    font-family:Rubik;
    font-weight: 600;
    font-size:3rem;
  }

  h2 {
    font-family:Rubik;
    font-weight: 600;
    font-size:2.25rem;
  }

  h3 {
    font-family:Rubik;
    font-weight: 600;
    font-size:1.5rem;
  }

  h4 {
    font-family:Rubik;
    font-weight: 600;
    font-size:1.25rem;
    margin:0;
  }

  p{
    font-family:Lato;
  }
`;
 
export default GlobalStyle;