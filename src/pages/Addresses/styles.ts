import styled, { css } from 'styled-components'

interface AddressProps {
  addressExists: boolean
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

export const Addresses = styled.ul`
  display: flex;
`

export const Address = styled.li<AddressProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin: 10px;

  width: 320px;
  height: 220px;
  padding: 30px 34px;
  border-radius: 15px;

  font-family: 'Rubik', sans-serif;
  color: #1b1b1b;
  font-weight: 300;
  font-size: 14px;

  border: 2px dashed #c7c7c7;

  ${(props) =>
    props.addressExists &&
    css`
      border: none;
      background: #fff;
    `}

  &:first-of-type {
    margin-left: 0;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100px;
    height: 28px;
    position: absolute;
    margin-top: -44px;
    border-radius: 140px;

    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    background: #f5f5f5;
    color: #c7c7c7;
    border: 2px dashed #c7c7c7;
    display: none;

    ${(props) =>
      props.addressExists &&
      css`
        color: #003d59;
        background: #fff;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
        display: flex;
      `}
  }

  .addressDescription {
    width: 100%;
    margin-top: 10px;
    font-size: 14px;
  }

  .buttonsWrapper {
    width: 100%;
    bottom: 20px;
    margin: 0 auto;

    button {
      width: 50%;
      height: 40px;
      font-size: 16px;

      :nth-of-type(1) {
        background: #11cea2;
        color: #fff;
        opacity: 0.8;

        border-radius: 5px;
        letter-spacing: 3px;
        font-weight: 900;
        transition: opacity 0.4s;

        :hover {
          opacity: 1;
        }
      }

      :nth-of-type(2) {
        background: transparent;
        color: #8a8a8a;
      }
    }
  }

  .notFoundAddressWrapper {
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    cursor: pointer;

    img {
      opacity: 0.5;
    }

    span {
      margin-top: 20px;
      font-size: 16px;
      text-align: center;
      color: #c7c7c7;
      font-weight: 400;

      strong {
        font-weight: 700;
      }
    }
  }
`
