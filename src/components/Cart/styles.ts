import styled, { css, keyframes } from 'styled-components'
import {
  scaleInAnimation,
  slideInBlurredRightAnimation
} from 'styles/keyframes'

const mobile = 620

interface ICartProps {
  isOpen: number
}

const slideInRight = keyframes`
  from {
    right: -1200px
  }

  to {
    right: 0px;
  }
`

const slideOutRight = keyframes`
  from {
    right: 0px;
  }

  to {
    right: -1200px
  }
`

export const Wrapper = styled.div<ICartProps>`
  position: fixed;
  display: block;
  z-index: 13;

  width: 520px;
  height: 100vh;
  right: -1200px;

  background: #fff;
  filter: drop-shadow(-3px 38px 59px rgba(0, 0, 0, 0.1));

  ${(props) =>
    props.isOpen === 1
      ? css`
          animation: ${slideInRight} 0.6s ease-in-out;
        `
      : props.isOpen === 0 &&
        css`
          animation: ${slideOutRight} 0.4s ease-out;
        `}

  animation-fill-mode: forwards;

  @media (max-width: ${mobile}px) {
    height: 100%;
    width: 100%;
    bottom: 0;

    border-radius: 75px 75px 0 0;
  }
`

export const Header = styled.div<ICartProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px;
  height: 70px;

  background: #ffa340;

  img {
    ${(props) =>
      props.isOpen === 1 &&
      css`
        ${slideInBlurredRightAnimation}
        animation-delay: 0.6s;
        animation-duration: 1s;
      `}

    margin-top: -1px;
  }

  div {
    display: flex;
    align-items: center;

    button {
      width: 40px;
      display: flex;
      align-items: center;
      z-index: 12;
      background: none;
    }

    h1 {
      color: #fff;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      margin-left: 20px;
      margin-bottom: -3px;
    }
  }

  ::before {
    content: '';
    position: absolute;
    width: 125px;
    height: 150px;
    background: url(/img/boy_holding_coin.svg) no-repeat;
    background-size: contain;
    top: 24px;
    left: -74px;

    ${(props) =>
      props.isOpen === 1 &&
      css`
        ${scaleInAnimation}
        animation-delay: 0.6s;
        animation-duration: 0.5s;
      `}

    @media (max-width: ${mobile}px) {
      display: none;
    }
  }
`

export const ProductList = styled.ul`
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100vh - 220px);

  /* margin-right: -50px;
    padding-right: 50px; */
`

export const Product = styled.li`
  display: flex;
  width: 102%;
  padding: 20px 25px;
  border-bottom: 2px solid #f5f5f5;

  img {
    height: 160px;
  }

  .description {
    margin-left: 25px;
    margin-top: 10px;

    header {
      display: flex;
      justify-content: space-between;

      h1 {
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 700;
        color: #153d57;
      }

      strong {
        font-size: 16px;
        font-weight: 700;
        color: #153d57;
        position: relative;

        span {
          font-size: 10px;
        }

        ::before {
          content: ' ';
          position: absolute;
          border-radius: 50%;
          background: #153d57;
          width: 9px;
          height: 9px;
          font-size: 14px;
          margin-left: -16px;
          margin-top: 5.5px;
        }
      }
    }

    p {
      margin-top: 12px;

      font-size: 12px;
      line-height: 16px;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-top: 30px;

      strong {
        font-family: 'Roboto', sans-serif;
        font-size: 36px;
        font-weight: 700;
        color: #153d57;

        span {
          font-size: 24px;

          :first-of-type {
            font-weight: 400;
            margin-right: 5px;
          }
        }
      }

      button {
        display: flex;
        align-items: center;

        font-size: 14px;
        font-weight: 700;

        color: #d2d2d2;
        background: none;
      }
    }
  }

  @media (max-width: ${mobile}px) {
    li {
      width: 100%;

      img {
        height: 80px;
      }

      .description {
        margin-top: 0;

        div {
          margin-top: 20px;

          strong {
            font-size: 22px;
            span {
              font-size: 16px;
            }
          }

          button {
            font-size: 12px;
          }
        }
      }
    }
  }
`

export const OrderDetails = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 150px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  background: #fff;
  padding-bottom: 50px;

  div {
    width: 90%;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #153d57;

    strong {
      font-family: 'Roboto', sans-serif;
      font-size: 36px;
      font-weight: 700;
      color: #153d57;

      span {
        font-size: 24px;

        :first-of-type {
          font-weight: 400;
          margin-right: 5px;
        }
      }
    }
  }

  @media (max-width: ${mobile}px) {
    div {
      strong {
        font-size: 28px;

        span {
          font-size: 18px;
        }
      }
    }
  }
`

export const BtnFinishCart = styled.button`
  border-radius: 6px;
  background: #11cea2;
  text-transform: uppercase;
  color: #fff;
  width: 90%;
  height: 57px;
  font-size: 16px;
  font-weight: 900;

  ${(props) =>
    props.disabled &&
    css`
      background: rgba(0, 0, 0, 0.3);
      cursor: auto;
    `}
`

//Animations

export const AnimationWrapper = styled.div`
  width: 260px;
  margin-top: 40px;

  @media (max-width: ${mobile}px) {
    display: none;
  }
`

export const EmptyCart = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-top: 30px;
    opacity: 0.5;
  }

  p {
    width: 70%;
    text-align: center;
    margin-top: 20px;
    opacity: 0.4;
  }

  @media (max-width: ${mobile}px) {
    margin-top: 20px;

    h1 {
      font-size: 22px;
    }

    p {
      font-size: 12px;
      line-height: 20px;
    }
  }
`
