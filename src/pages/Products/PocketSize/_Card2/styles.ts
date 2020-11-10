import styled from 'styled-components'

export const CardOption = styled.div`
  width: 400px;
  height: 520px;
  float: left;
  position: relative;

  &.active {
    height: 565px;
  }

  div.content {
    z-index: 10;

    width: 100%;
    height: 100%;
    transition: background-color 0.2s;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      width: 100%;
      height: 100%;
      background: url('/img/mask02.svg') no-repeat center;
      background-position: bottom;

      h2 {
        text-transform: uppercase;
        font-weight: 900;
        font-size: 2.5rem;
        color: #fff;
        height: 21px;

        width: 90%;
        text-align: center;
        overflow: hidden;
      }

      p {
        color: #fff;
        font-size: 2rem;
        font-weight: 500;
        margin-top: 0.5rem;
        height: 23px;

        width: 90%;
        text-align: center;
        overflow: hidden;
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

        margin-top: 3.3rem;
        margin-bottom: 3.4rem;
      }

      img.logoCard {
        width: 16rem;
      }
    }
  }
`
