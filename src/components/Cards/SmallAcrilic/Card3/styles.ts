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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    right: 0;
    width: 210px;
    height: 87%;
    border-radius: 3rem;
    margin-right: 5%;
  }

  h2 {
    text-transform: uppercase;
    font-weight: 900;
    color: #fff;
    font-size: 16px;
    margin-top: 24px;
    height: 21px;

    width: 160px;
    overflow: hidden;
    text-align: center;
  }

  p {
    color: #fff;
    font-weight: 600;
    margin-top: -4px;
    height: 21px;

    width: 160px;
    overflow: hidden;
    text-align: center;
  }

  .qrCode {
    width: 16rem !important;
    height: 16rem !important;
    margin-top: 18px;
    margin-bottom: 18px;
  }

  .logoCard {
    width: 100px;
    margin-bottom: 18px;
  }
`
