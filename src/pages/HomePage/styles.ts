import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  div.links {
    margin-top: 15px;

    svg {
      color: #dfedf2;
      font-size: 1.5rem;
      margin: 0 0.5rem;

      transition: all 0.2s ease-in-out;

      &:hover {
        color: #29c3ff;
      }
    }

    > div {
      width: 100%;
      margin-top: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        background: transparent;
        color: #dfedf2;

        transition: all 0.2s ease-in-out;

        &:hover {
          color: #29c3ff;
        }
      }
    }
  }
`
