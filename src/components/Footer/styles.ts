import styled from 'styled-components'

export const Wrapper = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  margin-left: -21rem;

  img {
    width: 10rem;
    margin-right: 1rem;
  }

  nav {
    display: flex;

    li {
      list-style: none;

      :first-of-type {
        margin-left: 2rem;
      }

      a {
        text-decoration: none;
        color: #000;
        font-size: 1.2rem;
        font-weight: 400;
        margin: 0 1.5rem;
      }
    }
  }

  div {
    position: absolute;
    right: 0;
    bottom: 0;

    background: #56ccf2;
    padding: 1rem 2rem 0.9rem 4rem;
    border-top-left-radius: 6rem;

    font-size: 1.2rem;
    color: #fff;
  }
`
