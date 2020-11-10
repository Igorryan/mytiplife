import styled from 'styled-components'

export const CardOption = styled.div`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: url('/img/mask05.svg') no-repeat;
    background-size: contain;
    background-position: top;

    width: 500px;
    height: 500px;

    position: relative;

    h2 {
      color: #0b0b0b;
      font-size: 4rem;
      word-wrap: break-word;
      line-height: 3.5rem;
      text-align: center;
      width: 30rem;
      font-weight: 900;
      text-transform: uppercase;
      z-index: 1;

      height: 72px;
      width: 60%;
      overflow: hidden;
    }

    p {
      text-transform: uppercase;
      font-weight: 900;
      letter-spacing: 0.5rem;
      margin-top: 0.2rem;
      font-size: 1.4rem;
      margin-bottom: 3rem;
      z-index: 1;
      width: 50%;
      overflow: hidden;
      text-align: center;

      height: 20px;
    }

    .qrCode {
      margin-bottom: 4rem;
      width: 23rem;
      z-index: 1;
    }
  }
`
