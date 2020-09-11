import styled from 'styled-components'

export const CardOption = styled.div`
  width: 400px;
  height: 565px;
  display: flex;
  flex-direction: column;
  background: #fafafa;

  div.content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: right;

    padding: 4rem;
    width: 100%;

    h2 {
      text-transform: uppercase;
      font-weight: 900;
      font-size: 2.5rem;
      color: #fff;
      z-index: 1;
      margin-top: 1.5rem;
    }

    p {
      color: #fff;
      font-size: 2rem;
      font-weight: 500;
      z-index: 1;
      margin-top: 0.5rem;
    }

    img.illustration {
      position: absolute;
      margin-left: -4rem;
    }

    img.qrCode {
      margin-top: 3rem;
      margin-bottom: 2rem;
      margin-left: 10.1rem;
      width: 22rem;
      height: 22rem;
      z-index: 1;
    }
  }

  div.footer {
    display: flex;
    background: url('/img/mask03.svg');
    height: 100%;
    background-size: cover;
    justify-content: center;
  }
`
