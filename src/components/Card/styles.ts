import styled from 'styled-components'

export const Container = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: row;
  box-shadow: 8px 8px 5px rgba(0, 0, 0, 0.2);

  img {
    max-width: 300px;
    min-height: 400px;
    object-fit: cover;
    border-radius: 4px 0 0 4px;
  }

  @media (max-width: 620px) {
    flex-direction: column;

    img {
      max-width: 550px;
      height: 150px;
      object-position: center 25%;
      border-radius: 4px 4px 0 0;
    }
  }
`

export const Content = styled.div`
  max-width: 550px;
  min-height: 400px;
  padding: 45px 25px;

  background: #f6ffff;
  border-radius: 0 4px 4px 0;
  position: relative;

  color: #222;

  h1 {
    font-size: 28px;
    line-height: 28px;
  }

  h2 {
    margin-top: 5px;
    font-size: 20px;
    font-weight: 500;
  }

  p {
    margin-top: 10px;
  }

  @media (max-width: 620px) {
    border-radius: 0 0 4px 4px;
  }
`

export const Line = styled.div`
  width: 90%;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);

  margin: 10px 0;
`
