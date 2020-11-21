import styled from 'styled-components'

export const CardOption = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  width: 500px;
  height: 500px;

  div.img {
    background-size: cover;
    height: 60%;
  }

  div.color {
    display: flex;
    position: relative;

    height: 40%;
    transition: 1s;
  }

  .qrCode {
    position: absolute;

    width: 24rem !important;
    height: 24rem !important;
    bottom: 20px;
    margin-top: -4rem;
    margin-left: 2rem;
  }

  .logoCard {
    position: absolute;
    right: 0;

    margin: 2rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    color: #fff;

    position: absolute;
    bottom: 14.5rem;
    left: 30rem;

    width: 18rem;
    height: 3.2rem;

    padding-top: 0.5rem;

    overflow: hidden;
  }

  h2 {
    font-size: 3.5rem;
    line-height: 3.5rem;
    font-weight: 900;
    text-transform: uppercase;
    word-wrap: break-word;
    color: #fff;

    position: absolute;
    left: 30rem;
    bottom: 4rem;

    width: 18rem;
    height: 105px;
    overflow: hidden;
  }
`
