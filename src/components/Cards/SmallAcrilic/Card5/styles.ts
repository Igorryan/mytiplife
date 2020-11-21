import styled from 'styled-components'

export const CardOption = styled.div`
  display: flex;
  flex-direction: row;

  width: 500px;
  height: 380px;

  position: relative;

  background-position: center;
  background-size: cover;

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
    position: absolute;

    width: 46%;
    height: 180px;

    margin-right: 3rem;
    padding-bottom: 20px;

    border-top-left-radius: 24px;
    border-top-right-radius: 24px;

    right: 0;
    bottom: 0;
  }

  h2 {
    text-transform: uppercase;
    font-weight: 900;
    color: #fff;
    z-index: 1;
    font-size: 7rem;
    line-height: 6.5rem;
    position: absolute;
    width: 300px;
    height: 130px;
    word-wrap: break-word;
    transform: rotate(-90deg);
    bottom: 100px;
    left: -60px;

    overflow: hidden;
  }

  p {
    color: #fff;
    font-weight: 600;
    width: 160px;
    text-align: center;
    position: absolute;
    bottom: 290px;
    overflow: hidden;
    height: 20px;
  }

  .qrCode {
    width: 16rem !important;
    height: 16rem !important;
    margin: 16px 0;
    z-index: 1;
  }

  .logoCard {
    margin-top: 8px;
    z-index: 1;
  }
`
