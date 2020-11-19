import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin: 10rem 0;
  height: 800px;

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

    left: 31.5%;
    bottom: 40%;
  }

  .coin2 {
    position: absolute;

    z-index: 10;

    right: 10.5%;
    bottom: 24%;
  }
  .coin3 {
    position: absolute;

    z-index: 10;
    transform: rotate(40deg);

    right: 40.5%;
    top: 18%;
  }

  @media (max-width: 940px) {
    .coin1 {
      width: 40px;
      left: 14.5%;
      bottom: 40%;
    }

    .coin2 {
      width: 60px;
      right: 32px;
      bottom: 24%;
    }
    .coin3 {
      width: 70px;
      right: 40.5%;
      top: 18%;
    }
  }

  @media (max-width: 510px) {
    .coin1 {
      width: 40px;
      left: -15px;
      bottom: 60%;
    }

    .coin2 {
      width: 60px;
      right: 60px;
      bottom: 10%;
    }
    .coin3 {
      width: 70px;
      right: 40px;
      top: 18%;
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
