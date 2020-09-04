import styled, { css } from 'styled-components'
import { IoIosHelpCircleOutline } from 'react-icons/io'

interface ButtonProps {
  disabled: boolean
}

interface ColorOptionProps {
  selected?: boolean
}

export const Wrapper = styled.main``

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 60px;
`

export const Carousel = styled.div`
  width: 500px;
  height: 30px;
`

export const Details = styled.div`
  width: 400px;
  margin-left: 30px;

  h1 {
    text-transform: uppercase;
    font-size: 26px;
    font-weight: 700;
    color: #153d57;
    margin-bottom: 30px;
  }

  p {
    font-size: 14px;
  }
`

export const UnitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  border: 1px solid #e8e8e8;
  border-radius: 12px;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    border-bottom: 1px solid #e8e8e8;
    padding: 20px 40px;

    li {
      list-style: none;
    }

    input {
      cursor: pointer;
      display: none;
    }

    input[type='radio']:checked + label {
      font-weight: 500;
      color: #153d57;
    }

    input[type='radio']:checked + label:before {
      border: 1px solid #153d57;
      background: #153d57;
    }

    label {
      font-size: 20px;
      font-family: 'Rubik', sans-serif;
      margin-left: 8px;
      font-weight: 400;
      color: #bfbfbf;
      cursor: pointer;

      ::after {
        content: 'UN';
        font-size: 14px;
        margin-left: 2px;
      }

      ::before {
        content: ' ';
        position: absolute;
        border-radius: 50%;
        border: 1px solid #bfbfbf;
        width: 8px;
        height: 8px;
        font-size: 14px;
        margin-left: -16px;
        margin-top: 6.1px;
      }
    }
  }

  div {
    display: flex;
    padding: 20px 0;
    width: 80%;
    align-items: center;
    justify-content: space-between;

    h2 {
      text-align: center;
      font-size: 36px;
      font-family: 'roboto', sans-serif;
      font-weight: 700;
      color: #153d57;

      span {
        font-size: 25px;

        :first-child {
          margin-right: 5px;
          font-weight: 400;
        }
      }
    }
  }
`

export const AddToCartButton = styled.button<ButtonProps>`
  width: 150px;
  height: 50px;

  background: ${(props) => (props.disabled ? '#989898' : '#11cea2')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  border-radius: 9px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5px;
`

export const CustomizationsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`

export const BackgoundColorsWrapper = styled.div`
  padding: 24px;
  border-radius: 12px;
  background: #f6f6f6;
  width: 48%;
  height: 200px;

  h3 {
    font-size: 18px;
    color: #153d57;
  }
`

export const ColorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`

export const ColorOption = styled.div<ColorOptionProps>`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: box-shadow 0.5s;
  opacity: 0.6;

  ${(props) =>
    props.selected &&
    css`
      opacity: 1;
      box-shadow: 1px 2px 1px #153d57;
    `};
`

export const Interrogation = styled(IoIosHelpCircleOutline)``

export const UploadInfosWrapper = styled.div`
  padding: 24px;
  border-radius: 12px;
  background: #f6f6f6;
  width: 48%;
  height: 200px;

  h3 {
    font-size: 18px;
    color: #153d57;
  }

  div {
    margin-bottom: 10px;

    h3 {
      margin-bottom: 15px;
    }

    input {
      margin-bottom: 8px;
      border: 1px solid #d9d9d9;
      padding: 10px;
      width: 100%;
      color: #153d57;
      border-radius: 4px;

      outline-color: #153d57;
    }
  }
`
