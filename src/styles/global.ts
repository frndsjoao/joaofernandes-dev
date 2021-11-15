import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    //criação de cores:
    // --background: #101011; (var(--background))
  }

  * {
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    height: 100vh;
    background-color: #101011;
    background-size: cover;

    color: #DFEDF2;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Poppins', 'Open Sans', sans-serif;
  }

  button {
    cursor: pointer;
    color: #DFEDF2;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
