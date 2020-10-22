import styled from 'styled-components'

export const Wrapper = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 4rem 3rem;
  background: #fcfcfc;
  border-top: 1px solid #eeeeee;
  width: 100%;

  img {
    width: 10rem;
    margin-right: 1rem;
  }

  nav {
    display: flex;
    width: 870px;

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
    padding: 1rem 0 3rem;

    background: #56ccf2;
    padding: 1rem 2rem 0.9rem 4rem;
    border-top-left-radius: 6rem;

    font-size: 1.2rem;
    color: #fff;
  }

  @media (max-width: 830px) {
    margin-left: 0rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 4rem 5rem;

    nav {
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 20px 0;

      li a {
        font-size: 14px;
      }
    }

    img {
      margin: 10px 0;
      width: 150px;
    }
  }

  @media (max-width: 500px) {
    flex-direction: row; //
    padding: 1rem 0rem 5rem;

    nav {
      align-items: flex-end;
      flex-direction: column; //
      text-align: end;
    }

    img {
      width: 150px;
      margin-left: 20px;

      :nth-of-type(2) {
        display: none;
      }
    }
  }
`
