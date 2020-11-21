import styled from 'styled-components'

export const CardOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  width: 500px;
  height: 380px;

  position: relative;

  background-size: cover;
  background-position: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    right: 0;
    width: 50%;
    height: 100%;
  }

  h2 {
    text-transform: uppercase;
    font-weight: 900;
    color: #fff;

    width: 180px;
    overflow: hidden;
    text-align: center;
    height: 21px;
  }

  p {
    color: #fff;
    font-weight: 600;
    height: 20px;

    width: 180px;
    overflow: hidden;
    text-align: center;
  }

  .qrCode {
    width: 18rem !important;
    height: 18rem !important;
    margin: 2rem 0;
  }

  .logoCard {
    margin-top: 1rem;
  }
`
