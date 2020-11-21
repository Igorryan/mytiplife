import styled from 'styled-components'

export const CardOption = styled.div`
  width: 400px;
  height: 520px;

  position: relative;

  background-size: cover;
  background-position: center;

  &.active {
    height: 565px;
  }

  div.content {
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  div.qrWrapper {
    width: 50%;
    height: 20rem;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 0 5px;

    border-top-right-radius: 3.5rem;

    .qrCode {
      width: 12.5rem !important;
      height: 12.5rem !important;
    }
  }

  div.infosWrapper {
    width: 50%;
    height: 20rem;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 2.1rem;

    text-align: right;

    h2 {
      text-transform: uppercase;
      font-weight: 900;
      font-size: 2.5rem;
      color: #fff;
      margin-top: 5rem;
      height: 21px;

      width: 160px;
      overflow: hidden;
    }

    p {
      color: #fff;
      font-size: 2rem;
      height: 23px;
      font-weight: 500;
      margin-top: 0.5rem;

      width: 160px;
      overflow: hidden;
    }

    img {
      margin-top: 2rem;
    }
  }
`
