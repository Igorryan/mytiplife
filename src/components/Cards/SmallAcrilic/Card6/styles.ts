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
  transition: all 1s;

  cursor: pointer;

  div:nth-child(1) {
    width: 50%;
    display: flex;
    align-items: flex-end;
    padding-left: 2rem;
    padding-bottom: 3rem;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    right: 0;
    width: 50%;
    height: 100%;
    padding-bottom: 3rem;
    margin-right: 3rem;

    div {
      width: 100%;
      height: 45%;
      position: absolute;
      z-index: 0;
      border-top-left-radius: 3rem;
      border-top-right-radius: 3rem;
      bottom: 0;
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
    padding-left: 1rem;
  }

  p {
    color: #fff;
    font-weight: 600;
  }

  .qrCode {
    width: 18rem;
    margin: 2rem 0;
    z-index: 1;
  }

  .logoCard {
    margin-top: 1rem;
    z-index: 1;
  }
`
