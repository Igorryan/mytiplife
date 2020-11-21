import styled from 'styled-components'

export const CardOption = styled.div`
  display: flex;
  position: relative;

  width: 500px;
  height: 500px;

  div.img {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
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
    width: 16rem !important;
    height: 16rem !important;
  }

  .logoCard {
    width: 14rem;

    margin-top: 3rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    width: 160px;
    height: 25px;
    text-align: center;
    overflow: hidden;
  }

  h2 {
    font-size: 2.5rem;
    line-height: 2.5rem;
    font-weight: 900;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    word-wrap: break-word;
    max-height: 48px;
    overflow: hidden;

    width: 160px;

    margin-bottom: 3rem;
  }
`
