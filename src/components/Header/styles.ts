import styled from 'styled-components'

interface IProps {
  toLeft: boolean
}

export const Wrapper = styled.header`
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  z-index: 12;
  color: #003d59;
  background: #fff;
  border: 1px solid #eeeeee;
  transition: top 0.3s;

  nav {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    .cardIconNav {
      right: 80px;
      top: 30px;
      position: absolute;

      @media (min-width: 1100px) {
        display: none;
      }
    }

    img {
      width: 180px;
      margin-right: 40px;
      cursor: pointer;
    }

    @media (max-width: 1100px) {
      justify-content: space-between;
      img {
        padding-left: 50px;
      }

      ul li a {
        font-size: 16px;
      }
    }
  }
`

export const MenuList = styled.ul<IProps>`
  float: right;
  margin-right: 20px;

  li {
    display: inline-block;
    line-height: 90px;
    position: relative;

    a {
      color: #003d59;
      font-size: 20px;
      text-transform: uppercase;
      text-decoration: none;

      font-size: 14px;
      font-weight: 500;
      margin: 0 2rem;
      border-bottom: 1px solid transparent;
      transition: border 0.4s;

      :hover {
        border-bottom: 1px solid #003d59;
      }
    }
  }
  @media (max-width: 1100px) {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 100px;
    background: #fff;
    left: ${(props) => (props.toLeft ? 0 : '-100%')};
    text-align: center;
    transition: all 0.5s;
    li {
      display: block;
      z-index: 11;
      line-height: 70px;

      &:last-of-type {
        display: none;
      }

      a {
        font-size: 20px;
      }
    }
  }
`

export const IconCart = styled.div`
  position: relative;
  width: 80px;
  height: 60px;

  > div {
    background: url(/img/cartIcon.svg) center;
    background-size: cover;
    width: 50px;
    height: 50px;
    margin-top: 26px;
    position: absolute;
    margin-left: 27px;
    cursor: pointer;

    div {
      display: flex;
      flex-direction: center;
      align-items: center;

      position: absolute;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #ff7300;
      bottom: -2px;
      right: -2px;

      strong {
        margin-left: 7.2px;
        margin-top: 2.2px;
        color: #fff;
        font-weight: 700;
      }
    }
  }
`

export const MenuBtn = styled.div`
  display: none;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  float: right;

  transition: all 0.5s ease-in-out;
  cursor: pointer;
  margin-right: 20px;
  border-radius: 50%;

  .menu-btn_burger {
    width: 30px;
    height: 5px;
    background: #003d59;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;

    ::before,
    ::after {
      content: '';
      position: absolute;
      width: 30px;
      height: 5px;
      background: #003d59;
      border-radius: 5px;
      transition: all 0.5s ease-in-out;
    }

    ::before {
      transform: translateY(-11px);
    }

    ::after {
      transform: translateY(11px);
    }
  }

  &.open .menu-btn_burger {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
  }

  &.open .menu-btn_burger::before {
    transform: rotate(45deg) translate(35px, -35px);
  }

  &.open .menu-btn_burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
  }

  @media (max-width: 1100px) {
    display: flex;
  }
`

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-left: 34px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #bdbdbd;
  padding: 0 10px;
  transition: border 0.2s;

  input {
    width: 120px;
    padding: 0 10px;
    font-size: 12px;

    border: none;
    color: #003d59;
    outline: none;
    ::placeholder {
      color: #bdbdbd;
    }
  }

  @media (max-width: 1100px) {
    display: none;
  }
`
