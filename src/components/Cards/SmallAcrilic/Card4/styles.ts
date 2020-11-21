import styled from 'styled-components'

export const CardOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  width: 500px;
  height: 380px;

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
    margin-top: 10px;
    z-index: 1;

    h2 {
      text-transform: uppercase;
      font-size: 1.6rem;
      font-weight: 900;
      color: #fff;
      z-index: 3;
      margin-top: 1.4rem;
      width: 130px;
      height: 20px;

      overflow: hidden;
      text-align: center;
    }

    p {
      color: #151515;
      font-weight: 600;
      z-index: 4;
      text-align: center;
      width: 15.5rem;
      border-radius: 3rem;
      margin-top: -20px;
      background-color: #ffe066;
      padding: 8px;
      padding-top: 4px;
      height: 38px;
      overflow: hidden;
      line-height: 30px;
    }

    .qrCode {
      width: 13.5rem !important;
      height: 13.5rem !important;
      margin: 1.9rem 0;
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
    bottom: 25px;
    right: 60px;
    z-index: 0;
  }
`
