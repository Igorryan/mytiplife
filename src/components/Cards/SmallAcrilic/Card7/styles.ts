import styled from 'styled-components'

export const CardOption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 500px;
  height: 380px;
  margin: 10px;

  position: relative;

  box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.1);
  transition: all 1s;
  background-size: cover;
  background-position: center;
  overflow: hidden;

  cursor: pointer;

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
    height: 100%;
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
    height: 18%;
    word-wrap: break-word;
  }

  p {
    color: #fff;
    font-weight: 600;
  }

  .qrCode {
    width: 15rem;
    margin: 2rem 0;
    z-index: 1;
  }

  .logoCard {
    margin-top: 1rem;
    z-index: 1;
  }
`
