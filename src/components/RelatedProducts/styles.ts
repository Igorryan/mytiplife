import styled from 'styled-components'

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fcca4c;
  overflow: hidden;

  h1 {
    font-weight: 700;
    margin-top: 5rem;
  }

  > p {
    font-family: 'Roboto', sans-serif;
    margin-top: 1.5rem;
    width: 70vw;
    text-align: center;
  }

  .products {
    display: flex;
    margin-top: 5rem;
    position: relative;
  }

  @media (max-width: 940px) {
    .products {
      flex-direction: column;
    }
  }

  @media (max-width: 530px) {
    .products {
      margin-top: 3rem;
    }
  }
`

export const Product = styled.div`
  width: 30rem;
  padding: 2.4rem;
  margin: 1rem 2rem 0;
  border-radius: 4rem 4rem 0 0;
  text-align: center;
  z-index: 1;
  transition: all 0.2s;

  :hover.selected {
    background: #f4f4f4;
    transition: 0.2s;
    transform: scale(1.05);
  }

  img {
    width: 100%;
  }

  h3 {
    font-weight: 700;
    font-size: 1.8rem;
    width: 70%;
    margin: 0.5rem auto;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    line-height: 2rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 3rem;
    margin-bottom: 8rem;

    text-decoration: none;
    text-transform: uppercase;
    color: #000;

    span {
      font-size: 1.2rem;
      margin-right: 0.6rem;
    }
  }

  @media (max-width: 940px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90vw;
    padding: 1rem 3rem 0.5rem 1.5rem;
    text-align: start;
    position: relative;
    height: 260px;
    border-radius: 4rem;
    margin: 2rem;

    :last-of-type {
      margin-bottom: 6rem;
    }

    :hover.selected {
      height: 260px;
      margin-top: 1rem;
      transform: scale(1.01);

      :last-of-type {
        margin-bottom: 6rem;
      }
    }

    > div {
      width: 100%;
      height: 100%;
      margin-left: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    h3 {
      width: 100%;
      margin-top: 30px;
    }

    img {
      width: 23rem;
      height: 23rem;
    }

    a {
      margin-bottom: 2.5rem;
      justify-content: flex-end;
    }
  }

  @media (max-width: 530px) {
    flex-direction: column;
    height: 470px;
    width: 30rem;
    padding: 2rem 2rem 1rem;
    text-align: center;
    margin: 2rem 0;

    :hover.selected {
      height: 470px;
      transform: scale(1.03);
      margin: 2rem 0;
    }

    h3 {
      width: 100%;
      margin-top: 20px;
    }

    > div {
      align-items: center;
      margin: 0;
    }

    img {
      width: 26rem;
      height: 26rem;
    }
  }
`
