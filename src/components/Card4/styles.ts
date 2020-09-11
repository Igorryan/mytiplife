import styled from 'styled-components'

export const CardOption = styled.div`
  display: flex;
  position: relative;

  padding: 0rem;
  width: 400px;
  height: 565px;
  background: url('/img/profile_example.png');

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

    border-top-right-radius: 3.5rem;

    img {
      width: 12.5rem;
      height: 12.5rem;
    }
  }

  div.infosWrapper {
    width: 50%;
    height: 20rem;
    padding-right: 2.1rem;

    text-align: right;

    h2 {
      text-transform: uppercase;
      font-weight: 900;
      font-size: 2.5rem;
      color: #fff;
      margin-top: 5rem;
    }

    p {
      color: #fff;
      font-size: 2rem;
      font-weight: 500;
      margin-top: 0.5rem;
    }

    img {
      margin-top: 2rem;
    }
  }
`
