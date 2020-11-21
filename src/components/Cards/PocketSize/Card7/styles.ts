import styled from 'styled-components'

export const CardOption = styled.div`
  width: 400px;
  height: 520px;
  float: left;
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fafafa;

  &.active {
    height: 565px;
  }

  div.content {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    flex-direction: column;
    text-align: right;
    padding-right: 34px;
    width: 100%;
    height: 72%;

    h2 {
      text-transform: uppercase;
      font-weight: 900;
      font-size: 2.5rem;
      color: #fff;
      z-index: 1;
      margin-top: 4.7rem;
      height: 21px;

      width: 90%;
      overflow: hidden;
    }

    p {
      color: #fff;
      font-size: 2rem;
      font-weight: 500;
      z-index: 1;
      margin-top: 0.3rem;
      height: 23px;

      width: 90%;
      overflow: hidden;
    }

    img.illustration {
      position: absolute;
      left: 0;
      top: 20px;
      z-index: 0;
    }

    .qrCode {
      position: absolute;
      top: 118px;
      right: 34px;
      width: 21rem !important;
      height: 21rem !important;
      z-index: 0;
    }
  }

  div.footer {
    display: flex;
    background: url('/img/mask03.svg');
    background-size: cover;
    border-radius: 0 0 5px 5px;
    justify-content: center;
    align-items: center;
    height: 150px;

    img {
      height: 84px;
    }
  }
`
