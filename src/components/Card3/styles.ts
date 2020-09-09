import styled from 'styled-components'

export const CardOption = styled.div`
  div.content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 10;

    width: 400px;
    height: 565px;
    padding: 4rem;
    transition: background-color 0.2s;

    h2 {
      margin-top: 1.5rem;

      text-transform: uppercase;
      font-weight: 900;
      font-size: 2.5rem;
      color: #fff;
    }

    p {
      color: #fff;
      font-size: 2rem;
      font-weight: 500;
      margin-top: 0.5rem;
    }

    div.imageUploadedWrapper {
      background: #e7982c;
      border: 0.1rem solid #b35700;
      padding: 0.4rem;
      border-radius: 50%;
    }

    div.imageUploaded {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      background-image: url('/img/profile_example.png');
      background-size: contain;
      background-position: center;

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
        margin-left: 11.1rem;

        background: url('/img/stars_right.svg') no-repeat center;
      }
    }

    img.qrCode {
      width: 20rem;
      height: 20rem;

      margin-top: 2rem;
      z-index: 1;
    }

    img.logoCard {
      width: 15rem;
      height: 15rem;
      margin-top: 2.6rem;
      z-index: 1;
    }
  }

  &:after {
    content: '';
    background: url('/img/mask01.svg') no-repeat center;
    background-size: cover;
    position: absolute;
    width: 400px;
    height: 248px;
    margin-top: -248px;
    z-index: 0;
  }
`
