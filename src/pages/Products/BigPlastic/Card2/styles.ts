import styled from 'styled-components'

export const CardOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 500px;
  height: 500px;

  position: relative;

  background-position: center;
  background-size: cover;

  div {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: 40%;
    height: 290px;
    border-radius: 25px;
    margin-right: 30px;
    margin-top: 90px;
    z-index: 1;

    h2 {
      text-transform: uppercase;
      font-size: 1.6rem;
      font-weight: 900;
      color: #fff;
      z-index: 3;
      margin-top: 1.1rem;

      width: 110px;
      height: 34px;
      overflow: hidden;
      word-wrap: break-word;
      text-align: center;
      line-height: 17px;
    }

    p {
      color: #151515;
      font-weight: 600;
      z-index: 4;
      text-align: center;
      width: 15.5rem;
      border-radius: 3rem;
      margin-top: -20px;
      max-height: 32px;

      background-color: #ffe066;
      line-height: 30px;

      overflow: hidden;
    }

    .qrCode {
      width: 13.5rem;
      margin: 1.4rem 0;
      z-index: 3;
    }

    .logoCard {
      z-index: 3;
      width: 9rem;
    }
  }

  :after {
    content: '';
    position: absolute;
    width: 140px;
    background-color: #ffe066;
    height: 40px;
    border-radius: 300px;
    bottom: 45px;
    right: 60px;
    z-index: 0;
  }
`
