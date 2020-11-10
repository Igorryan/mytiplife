import styled from 'styled-components'

export const CardOption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 500px;
  height: 380px;

  position: relative;

  background-size: cover;
  background-position: center;
  overflow: hidden;

  div:nth-child(1) {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 2rem;
    padding-bottom: 3rem;
  }

  div:nth-child(2) {
    position: relative;
    width: 50%;
    height: 420px;
    display: flex;
    justify-content: flex-end;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      background: red;
      height: 70%;
      margin-top: -2rem;
      width: 70%;
      padding: 0;
      border-bottom-left-radius: 4rem;
    }
  }

  h2 {
    text-transform: uppercase;
    font-weight: 900;
    color: #fff;
    z-index: 1;
    font-size: 4rem;
    line-height: 3.8rem;
    width: 85%;
    height: 72px;
    word-wrap: break-word;

    overflow: hidden;
  }

  p {
    color: #fff;
    font-weight: 600;
    overflow: hidden;
    width: 85%;
    height: 21px;
  }

  .qrCode {
    width: 14rem;
    z-index: 1;
    margin-top: 20px;
  }

  .logoCard {
    margin-top: 20px;
    width: 100px;
    z-index: 1;
  }
`
