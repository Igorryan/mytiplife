import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin: 10rem 0;
  height: 80vh;

  h1 {
    color: #fcca4c;
    font-weight: 700;
    font-size: 5rem;
    width: 30rem;
    line-height: 4rem;

    position: absolute;
    z-index: 4;
    margin-left: 30.5rem;
  }

  .small_stars {
    position: absolute;
    top: -2rem;
    width: 100vw;
  }

  .illustration_waiter {
    position: absolute;
    bottom: -2rem;
    z-index: 11;
    left: 4rem;
  }

  .details_of_illustration {
    position: absolute;
    left: 0;
  }

  .coin1 {
    position: absolute;
    z-index: 10;
    width: 6rem;
    margin-top: 10vh;
    margin-left: -25vw;
  }

  .coin2 {
    position: absolute;
    margin-left: 45vw;
    margin-top: 20rem;
    z-index: 10;
  }
  .coin3 {
    position: absolute;
    margin-left: 20vw;
    margin-top: -15rem;
    z-index: 10;
    transform: rotate(40deg);
  }

  @media (max-width: 1092px) {
  }

  @media (max-width: 720px) {
  }

  @media (max-width: 500px) {
    .coin1 {
      width: 4rem;
      margin-left: -17vw;
    }

    .coin2 {
    }
    .coin3 {
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      :nth-child(1) {
        z-index: 3;
      }
      :nth-child(2) {
        margin-left: -45rem;
        z-index: 2;
      }
      :nth-child(3) {
        margin-left: -38rem;
        z-index: 1;
      }
    }
  }

  @media (max-width: 940px) {
    height: 50vh;

    div {
      transform: scale(0.7);
    }

    h1 {
      margin-left: 14vw;
      bottom: 14rem;
      font-size: 4.5rem;
    }

    .illustration_waiter {
      bottom: -2rem;
      left: 4rem;
      width: 12rem;
    }
  }
`
