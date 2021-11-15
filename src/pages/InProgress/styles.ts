import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 1.5rem;
    margin: 0 auto;
  }

  div {
    position: fixed;
    bottom: 3rem;

    svg {
      color: #dfedf2;
      font-size: 1.5rem;
      margin: 0 0.5rem;

      transition: all 0.2s ease-in-out;

      &:hover {
        color: ${darken(0.2, '#dfedf2')};
      }
    }
  }
`
