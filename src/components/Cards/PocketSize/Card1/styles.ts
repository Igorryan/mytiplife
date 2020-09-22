import styled from 'styled-components'

export const CardOption = styled.div`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  width: 400px;
  height: 520px;

  border-radius: 3px;
  float: left;
  position: relative;
  transition: all 1s;
  border-radius: 5px;

  cursor: pointer;

  div.content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
    z-index: 10;

    width: 100%;
    height: 100%;
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
    border-radius: 5px;
  }
`
