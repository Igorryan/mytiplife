import styled, { css } from 'styled-components'
import { swingInTopFwdAnimation } from 'styles/keyframes'

interface FilterProps {
  selected?: boolean
}

interface OrderStatus {
  status: 'Fulfilled' | 'In progress'
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

  @media (max-width: 1100px) {
    width: 90%;
  }
`

export const SectionHeader = styled.header`
  display: flex;
  justify-content: space-between;

  margin-bottom: 60px;

  h1 {
    color: #003d59;
    font-size: 24px;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;

    h1 {
      margin-bottom: 20px;
      font-size: 22px;
    }
  }
`

export const FiltersWrapper = styled.ul`
  list-style: none;
  display: flex;
`

export const Filter = styled.li<FilterProps>`
  font-size: 14px;
  margin: 0 15px;
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

  @media (max-width: 1100px) {
    margin: 0 15px 30px;
  }
`

export const Order = styled.div`
  background: #fff;
  padding: 30px 40px;
  border-radius: 15px;
  margin-bottom: 60px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 4px 12px;
  height: auto;
  ${swingInTopFwdAnimation}
  animation-duration: 1.2s;

  @media (max-width: 1100px) {
    padding: 20px 30px 0;
    margin-bottom: 90px;
  }
`

export const OrderHeader = styled.header<OrderStatus>`
  margin-top: -50px;

  display: flex;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: 100px;

  color: #fff;

  background: linear-gradient(90deg, #ffb347 0.54%, #ffcc33 100%);

  ${(props) =>
    props.status === 'Fulfilled' &&
    css`
      background: linear-gradient(90deg, #56ab2f 0%, #a8e063 100%);
    `}

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
      cursor: pointer;
    }
  }

  @media (max-width: 1100px) {
    margin-top: -60px;

    border-radius: 5px;
    justify-content: center;
    flex-direction: column;

    div {
      flex-direction: column;
      text-align: center;

      &:nth-of-type(1) {
        width: 100%;
        margin-left: 0px;
      }
      &:nth-of-type(2) {
        width: 100%;
        display: none;
      }

      p {
        font-size: 12px;
        margin-top: 2px;
      }
    }
  }
`

export const OrderBodyWrapper = styled.div`
  display: flex;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`

export const PriceWrapper = styled.div<OrderStatus>`
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

      ${(props) =>
        props.status === 'Fulfilled' &&
        css`
          color: #56ab2f;
        `}

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

        ${(props) =>
          props.status === 'Fulfilled' &&
          css`
            background: #56ab2f;
          `}
      }
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 1100px) {
    width: 100%;

    div {
      flex-direction: column;
      align-items: flex-end;

      span {
        order: 2;
        width: 100%;
        text-align: right;
        margin-bottom: 20px;
        margin-top: 4px;

        :before {
          display: none;
        }
      }
      p {
        order: 1;
      }
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
      font-size: 14px;
      line-height: 30px;
    }
  }

  @media (max-width: 1100px) {
    width: 100%;
    border: 0;
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
    text-align: right;
    position: relative;
    padding-top: 20px;

    div {
      width: 100%;
      padding-right: 20px;
    }

    :before {
      content: '';
      position: absolute;
      top: 0;
      width: 100%;
      height: 0.5px;
      background: rgba(0, 0, 0, 0.14);
    }
  }
`
