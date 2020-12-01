import styled, { css } from 'styled-components'

interface FilterProps {
  selected?: boolean
}

export const Wrapper = styled.main`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100vh;

  background: #f5f5f5;
`

export const Section = styled.section`
  width: 1000px;
  margin: 0 auto;
  margin-top: 160px;
`

export const SectionHeader = styled.header`
  display: flex;
  justify-content: space-between;

  margin-bottom: 60px;

  h1 {
    color: #003d59;
    font-size: 24px;
  }
`

export const FiltersWrapper = styled.ul`
  list-style: none;
  display: flex;
`

export const Filter = styled.li<FilterProps>`
  font-size: 12px;
  margin-right: 30px;
  padding-bottom: 5px;

  cursor: pointer;

  ${(props) => css`
    color: ${props.color};
  `}

  ${(props) =>
    props.selected &&
    css`
      border-bottom: 1px solid ${props.color};
    `}
`

export const Order = styled.div`
  background: #fff;
  padding: 30px 40px;
  border-radius: 15px;
  margin-bottom: 60px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 4px 12px;
`

export const OrderHeader = styled.header`
  margin-top: -50px;

  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 100px;

  color: #fff;
  background: linear-gradient(90deg, #ffb347 0.54%, #ffcc33 100%);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:nth-of-type(1) {
      width: 49.5%;
      margin-left: 14px;
    }
    &:nth-of-type(2) {
      width: 38%;
    }

    h2 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }

    .addressTag {
      background: #fff;
      color: #003d59;
      text-transform: uppercase;
      width: 90px;
      font-weight: 700;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      border-radius: 20px;
      padding: 2px;
    }
  }
`

export const OrderBodyWrapper = styled.div`
  display: flex;
`

export const PriceWrapper = styled.div`
  width: 60%;
  margin-right: 20px;

  ul {
    list-style: none;
    margin: 20px 0;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;
      height: 42px;
      padding: 0 20px;
      border-radius: 5px;

      font-family: 'Rubik', sans-serif;
      color: #1b1b1b;
      font-weight: 300;
      font-size: 14px;

      a {
        text-decoration: none;
        color: #1b1b1b;
        font-weight: 300;
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #003d59;
    padding: 0 20px;

    span {
      color: #ffb347;
      position: relative;
      padding-left: 20px;

      :before {
        content: '';
        position: absolute;
        width: 7px;
        height: 7px;
        top: 8px;
        left: 0;
        border-radius: 50%;
        background: #ffb347;
      }
    }

    p {
      font-size: 16px;
    }
  }
`

export const AddressWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
  margin-top: 20px;
  position: relative;
  border-left: 0.5px solid rgba(0, 0, 0, 0.14);
  padding-left: 50px;

  div {
    p {
      font-family: 'Rubik', sans-serif;
      color: #1b1b1b;
      font-weight: 300;
      font-size: 16px;
      line-height: 30px;
    }
  }

  a {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0;

    font-family: 'Rubik', sans-serif;
    text-decoration: none;
    font-size: 14px;
    color: #9b9b9b;
    font-weight: 300;
    border-bottom: 1px solid transparent;
    transition: all 0.4s;

    :hover {
      border-bottom: 1px solid #b9b9b9;
    }

    p {
      margin-right: 6px;
      margin-top: 2px;
    }
  }
`
