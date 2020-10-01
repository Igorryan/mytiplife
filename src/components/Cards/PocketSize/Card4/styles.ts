import styled from 'styled-components'

export const CardOption = styled.div`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  width: 400px;
  height: 520px;
  border-radius: 5px;

  position: relative;
  transition: all 1s;
  cursor: pointer;

  background-size: cover;
  background-position: center;

  &.active {
    height: 565px;
  }

  div.content {
    display: flex;
    position: absolute;
    bottom: 0;
    border-radius: 5px;
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
