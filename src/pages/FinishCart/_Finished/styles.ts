import styled from 'styled-components'
import { keyframes } from 'styled-components'

const fadeInTop = keyframes`
  0% {
    opacity: 0;
    margin-top: -160px;
  }

  100% {
    opacity: 1;
    margin-top: 0;
  }
`

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px 0;

  @media (max-width: 1160px) {
    > div {
      margin-right: 0px;
    }

    > img {
      display: none;
    }
  }

  > div {
    animation: ${fadeInTop} 0.9s;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      border: 2px solid #11cea2;
      color: #11cea2;
      background: transparent;
      height: 45px;
      font-size: 16px;
      font-weight: 400;
      margin-top: 25px;
      width: 100%;
      text-decoration: none;
    }
  }

  > img {
    height: 600px;
  }

  h1 {
    font-size: 40px;
    color: #003d59;
    width: 300px;
    line-height: 50px;
    margin-bottom: 30px;
  }
`
export const OrderDetail = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  background: #fff;
  padding: 10px 20px;
  border-radius: 10px;

  img {
    width: 24px;
    margin-right: 20px;
  }

  span {
    color: #a9a9a9;
    font-size: 12px;
  }

  p {
    color: #153d57;
    font-weight: 700;
  }

  margin-bottom: 12px;
`
