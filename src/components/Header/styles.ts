import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'

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

    img {
      width: 180px;
      margin-right: 40px;
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

      a {
        font-size: 20px;
      }
    }
  }
`

export const Icon = styled(GiHamburgerMenu)`
  float: right;
  margin-right: 40px;
  cursor: pointer;
  display: none;

  @media (max-width: 1100px) {
    display: block;
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
