import styled from 'styled-components'

export const CardOption = styled.div`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  width: 400px;
  height: 520px;
  border-radius: 5px;
  float: left;
  position: relative;
  transition: all 1s;
  cursor: pointer;

  &.active {
    height: 565px;
  }

  div.content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 10;
    border-radius: 5px;
    width: 100%;
    height: 100%;

    padding: 4rem;
    transition: background-color 0.2s;

    h2 {
      margin-top: 4rem;

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

    img.qrCode {
      width: 24rem;
      height: 24rem;

      margin-top: 2rem;
      z-index: 1;
    }

    img.logoCard {
      width: 34rem;
      margin-top: 5rem;
      z-index: 1;
    }
  }

  &:after {
    content: '';
    background: #fafafa;
    background-size: cover;
    position: absolute;
    width: 400px;
    height: 168px;
    border-radius: 0 0 5px 5px;
    margin-top: -168px;
    z-index: 0;
  }
`
