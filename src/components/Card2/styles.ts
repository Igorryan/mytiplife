import styled from 'styled-components'

export const CardOption = styled.div`
  div.content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 10;

    width: 400px;
    height: 565px;
    padding: 4rem;
    transition: background-color 0.2s;

    h2 {
      margin-top: 1.5rem;

      text-transform: uppercase;
      font-weight: 900;
      font-size: 2.5rem;
      color: #fff;
    }

    p {
      color: #fff;
      font-size: 2rem;
      font-weight: 500;
      margin-top: 0.5rem;
    }

    &:before {
      content: '';
      position: absolute;
      height: 10rem;
      width: 3rem;
      background: red;
      margin-left: 11.1rem;

      background: url('/img/stars_right.svg') no-repeat center;
    }

    img.qrCode {
      width: 24rem;
      height: 24rem;

      margin-top: 4.5rem;
      z-index: 1;
    }

    img.logoCard {
      width: 17rem;
      height: 17rem;
      margin-top: 4rem;
      z-index: 1;
    }
  }

  &:after {
    content: '';
    background: url('/img/mask02.svg') no-repeat center;
    background-size: cover;
    position: absolute;
    width: 400px;
    height: 248px;
    margin-top: -248px;
    z-index: 0;
  }
`
