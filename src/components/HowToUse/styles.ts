import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin: 6rem 0;
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
    margin-top: 32rem;
    margin-left: -42rem;
  }

  .coin2 {
    position: absolute;
    margin-left: 100rem;
    margin-top: 25rem;
    z-index: 10;
  }
  .coin3 {
    position: absolute;
    margin-left: 120rem;
    margin-top: -20rem;
    z-index: 10;
    transform: rotate(40deg);
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
`
