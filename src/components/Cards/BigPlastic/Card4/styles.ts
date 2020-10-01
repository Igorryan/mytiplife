import styled from 'styled-components'

export const CardOption = styled.div`
  display: flex;
  position: relative;

  width: 500px;
  height: 500px;
  margin: 10px;

  box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.1);
  transition: all 1s;

  cursor: pointer;

  div.img {
    background-size: cover;
    width: 60%;
  }

  div.color {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 40%;

    transition: 1s;
  }

  .qrCode {
    width: 16rem;
    height: 16rem;
  }

  .logoCard {
    width: 14rem;

    margin-top: 3rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
  }

  h2 {
    font-size: 2.5rem;
    line-height: 2.5rem;
    font-weight: 900;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    word-wrap: break-word;

    width: 20rem;

    margin-bottom: 3rem;
  }
`
