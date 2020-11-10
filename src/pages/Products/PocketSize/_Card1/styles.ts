import styled from 'styled-components'

export const CardOption = styled.div`
  width: 400px;
  height: 520px;

  float: left;
  position: relative;

  div.content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 100%;
    transition: background-color 0.2s;

    div.imageUploadedWrapper {
      background: #e7982c;
      border: 0.1rem solid #b35700;
      margin-top: 20px;
      padding: 0.4rem;
      border-radius: 50%;

      div.imageUploaded {
        width: 9rem;
        height: 9rem;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        position: relative;

        div {
          position: absolute;
          background-position: center;
          border-radius: 50%;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-repeat: no-repeat;
        }

        &:after {
          content: '';
          position: absolute;
          height: 10rem;
          width: 3rem;
          background: red;
          margin-left: -4rem;
          background: url('/img/stars_left.svg') no-repeat center;
        }

        &:before {
          content: '';
          position: absolute;
          height: 10rem;
          width: 3rem;
          background: red;
          margin-left: 10rem;

          background: url('/img/stars_right.svg') no-repeat center;
        }
      }
    }

    div.infos {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
      background: url('/img/mask01.svg') no-repeat center;
      background-position: bottom;

      h2 {
        margin-top: 2.5rem;
        text-transform: uppercase;
        font-weight: 900;
        font-size: 2.5rem;
        color: #fff;
        height: 21px;
        width: 90%;
        text-align: center;
        overflow: hidden;
      }

      p {
        color: #fff;
        height: 23px;
        font-size: 2rem;
        font-weight: 500;
        width: 90%;
        text-align: center;
        overflow: hidden;
        margin-top: 0.5rem;
      }

      img.qrCode {
        width: 20rem;
        height: 20rem;
        margin-top: 2rem;
      }

      img.logoCard {
        width: 12rem;
        margin-top: 1.9rem;
      }
    }
  }
`
