import styled from 'styled-components'

export const CardOption = styled.div`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  width: 400px;
  height: 520px;
  float: left;
  position: relative;
  transition: all 1s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 5px 5px;
  background: #fafafa;

  &.active {
    height: 565px;
  }

  div.content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: right;
    border-radius: 5px 5px 0 0;

    padding: 4rem;
    width: 100%;
    height: 100%;

    h2 {
      text-transform: uppercase;
      font-weight: 900;
      font-size: 2.5rem;
      color: #fff;
      z-index: 1;
      margin-top: 1.5rem;
    }

    p {
      color: #fff;
      font-size: 2rem;
      font-weight: 500;
      z-index: 1;
      margin-top: 0.5rem;
    }

    img.illustration {
      position: absolute;
      margin-left: -4rem;
    }

    img.qrCode {
      margin-top: 3rem;
      margin-bottom: 2rem;
      margin-left: 10.1rem;
      width: 22rem;
      height: 22rem;
      z-index: 1;
    }
  }

  div.footer {
    display: flex;
    background: url('/img/mask03.svg');
    height: 40%;
    background-size: cover;
    border-radius: 0 0 5px 5px;
    justify-content: center;
  }
`
