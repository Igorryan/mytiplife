import styled from 'styled-components'

export const CardOption = styled.div`
  width: 400px;
  height: 520px;
  float: left;
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fafafa;

  div.content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    width: 100%;

    h2 {
      text-transform: uppercase;
      font-weight: 900;
      font-size: 2.5rem;
      color: #fff;
      z-index: 1;
      margin-top: 4rem;
      height: 21px;

      width: 90%;
      overflow: hidden;
    }

    p {
      color: #fff;
      font-size: 18px;
      height: 21px;
      font-weight: 600;
      margin-top: 0.3rem;
      width: 90%;
      overflow: hidden;
    }

    img.illustration {
      position: absolute;
      margin-left: -4rem;
    }

    img.qrCode {
      margin-top: 2rem;
      margin-bottom: 3rem;
      width: 21rem;
      height: 21rem;
      z-index: 1;
    }
  }

  div.footer {
    display: flex;
    background: url('/img/logo_with_illustration.svg') no-repeat;
    height: 30%;
    background-position: center;
    background-size: 80%;
    border-radius: 0 0 5px 5px;
    justify-content: center;
  }
`
