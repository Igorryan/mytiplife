import styled from 'styled-components'

interface productsDivProps {
  selected?: number
}

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #fcca4c;

  h1 {
    font-weight: 700;
    margin-top: 5rem;
  }

  p {
    font-family: 'Roboto', sans-serif;
    margin-top: 1.5rem;
  }

  .products {
    display: flex;
    margin-top: 3.2rem;
    position: relative;

    div.productSelected {
      position: absolute;
      background: #f4f4f4;
      width: 30rem;
      height: 100%;
      margin: 0 2rem;
      border-radius: 4rem 4rem 0 0;
      transition: 0.2s;
    }
  }
`

export const Product = styled.div<productsDivProps>`
  width: 30rem;
  padding: 2.4rem;
  margin: 0 2rem;
  transition: background-color 0.2s;

  text-align: center;
  z-index: 1;

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
`
