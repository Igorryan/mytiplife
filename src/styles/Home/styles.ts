import styled from 'styled-components'
import {
  slideInBlurredRightAnimation,
  slideInBlurredLeftAnimation,
  scaleInAnimation,
  flipInHorBottomAnimation,
  slideOutBlurredLeftAnimation,
  slideOutBlurredRightAnimation
} from 'styles/keyframes'

export const Wrapper = styled.main`
  width: 100vw;
  overflow: hidden;

  section {
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;

      top: 200px;
      width: 100vw;

      h1 {
        width: 600px;
        text-align: center;

        color: #eb5757;
        font-size: 48px;
        font-weight: 600;
        line-height: 50px;
      }

      p {
        width: 350px;
        margin: 30px 0 10px;

        font-size: 20px;
        text-align: center;
      }

      button {
        width: 180px;
        height: 50px;
        margin-top: 20px;
      }
    }

    > img {
      width: 100%;
      min-height: 620px;

      margin-top: -56vw;

      object-fit: cover;
      object-position: right bottom;
    }
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;

    img {
      width: 300px;
      margin-top: 10px;
    }

    h1 {
      margin-top: 30px;
      padding: 0 40px;

      font-size: 36px;
      line-height: 34px;
      text-align: center;
    }
  }

  @media (max-width: 1200px) {
    section {
      .header {
        top: 150px;
        transform: scale(0.9);
      }

      > img {
        margin-top: -28vw;
      }
    }
  }

  @media (max-width: 640px) {
    section {
      .header {
        align-items: flex-start;
        top: 120px;

        h1 {
          width: 370px;

          font-size: 40px;
          line-height: 44px;
          text-align: start;
        }

        p {
          width: 240px;

          text-align: start;
          font-size: 14px;
        }

        button {
          font-size: 16px;
        }
      }
      > img {
        margin-top: -10vw;
      }
    }

    .title {
      img {
        width: 180px;
      }

      h1 {
        margin-top: 20px;
        font-size: 28px;
      }
    }
  }

  div.divisor {
    height: 20vw;
    width: 100%;
    background: url(/img/mask-divisor.svg) no-repeat center;
    background-size: contain;
    margin-bottom: 60px;
  }

  div.cards {
    display: flex;
    justify-content: space-between;

    margin: 0 auto;
    flex-wrap: wrap;
    width: 1300px;
    margin-bottom: 120px;

    @media (max-width: 1315px) {
      width: 630px;

      > div {
        margin-bottom: 30px;
      }
    }

    @media (max-width: 720px) {
      width: 300px;
      margin-bottom: 60px;

      > div {
        margin-bottom: 40px;
      }
    }
  }

  [data-anime] {
    opacity: 0;
    transition: opacity 0.4s;
  }

  [data-anime='flip'] {
    &.animate {
      ${flipInHorBottomAnimation}
    }
  }
  [data-anime='center'] {
    &.animate {
      opacity: 1;

      > div {
        ${scaleInAnimation}
        &:nth-child(1) {
        }

        &:nth-child(2) {
          animation-delay: 0.2s;
        }

        &:nth-child(3) {
          animation-delay: 0.4s;
        }

        &:nth-child(4) {
          animation-delay: 0.6s;
        }
      }
    }
  }
`

export const Products = styled.div`
  width: 700px;
  margin: 50px auto 0;

  > div {
    display: flex;
    align-items: center;
    position: relative;
    margin: 40px 0 60px;

    &::after {
      content: '';
      z-index: -1;
      position: absolute;
      right: -230px;

      width: 500px;
      height: 100%;

      background: url(/img/mask04.svg) no-repeat;
      background-position: right;
      background-size: contain;
    }

    img {
      width: 300px;
      height: 300px;
    }

    .description {
      margin-left: 50px;

      ul {
        display: flex;
        margin-bottom: 30px;
        list-style: none;

        li {
          width: 105px;
          margin-right: 12px;
          padding: 1px 0;
          border-radius: 100px;

          font-size: 12px;
          text-align: center;

          &:nth-child(1) {
            background: #f2c94c;
          }

          &:nth-child(2) {
            background: #6fcf97;
          }

          &:nth-child(3) {
            background: #56ccf2;
          }
        }
      }

      h1 {
        font-size: 20px;
        margin-bottom: 20px;
      }

      p {
        width: 230px;
        font-size: 12px;
        line-height: 18px;
      }

      div {
        display: flex;
        align-items: center;
        margin-top: 30px;

        p {
          font-size: 24px;
          width: 140px;
          margin-top: 6px;

          strong {
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            margin-left: 7px;
            font-size: 38px;
          }
        }

        button {
          width: 135px;
          height: 45px;
          font-size: 14px;
          margin-top: -60px;
        }
      }
    }
  }

  > div.right {
    &::after {
      left: -230px;
    }

    img {
      order: 2;
    }

    .description {
      margin-right: 50px;
      margin-left: 0;
      order: 1;
    }
  }

  @media (max-width: 720px) {
    width: 100vw;

    > div,
    > div.right {
      flex-direction: column;
      align-items: center;

      &::after {
        left: 0;
        right: 0;
      }

      img {
        order: 1;
        margin-bottom: 34px;
      }

      .description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 300px;

        margin: 0;
        order: 2;

        text-align: center;

        ul {
          li {
            width: 90px;
            font-size: 12px;
            margin-right: 8px;
          }
        }

        > p {
          width: auto;
        }

        div {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;

          p {
            margin-right: 16px;
          }
        }
      }
    }
  }

  //Animação

  [data-anime] {
    opacity: 0;
  }

  [data-anime='left'] {
    &.animate {
      ${slideInBlurredRightAnimation}
    }

    &.animateOut {
      ${slideOutBlurredRightAnimation}
    }
  }

  [data-anime='right'] {
    &.animate {
      ${slideInBlurredLeftAnimation}
    }
    &.animateOut {
      ${slideOutBlurredLeftAnimation}
    }
  }
`

export const Card = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    width: 300px;
    height: 388px;
    border-radius: 8px;
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.5s;
    will-change: transform;

    &:hover {
      box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
    }

    img {
      margin-top: 40px;
    }

    .descriptionCard {
      position: absolute;
      top: 230px;
      color: #fff;
      text-align: center;
      width: 65%;

      h2 {
        font-size: 18px;
        margin-bottom: 14px;
      }

      p {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
`
