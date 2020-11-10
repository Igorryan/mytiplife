import styled, { css } from 'styled-components'
import { IoIosHelpCircleOutline } from 'react-icons/io'

interface ButtonProps {
  disabled: boolean
}

interface ColorOptionProps {
  selected?: boolean
}

export const Wrapper = styled.main`
  overflow-x: hidden;
  transition: opacity 0.4s;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 170px;
  }
  @media (max-width: 1092px) {
    section {
      flex-direction: column;
    }
  }
`
export const Details = styled.div`
  width: 400px;
  margin-left: 40px;

  h1 {
    text-transform: uppercase;
    font-size: 26px;
    font-weight: 700;
    color: #153d57;
    margin-bottom: 14px;
  }

  p {
    font-size: 14px;
  }

  @media (max-width: 1092px) {
    margin-left: 0px;
    width: 88%;
  }
`

export const UnitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  border: 1px solid #e8e8e8;
  border-radius: 12px;

  ul {
    display: flex;
    border-bottom: 1px solid #e8e8e8;
    padding: 20px 0;
    overflow-x: scroll;

    li {
      list-style: none;
      margin: 0 10px;

      :first-of-type {
        margin-left: 40px;
      }
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
      position: relative;

      ::after {
        content: 'UN';
        font-size: 14px;
        margin-left: 2px;
        margin-right: 20px;
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
    padding: 20px 15px;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    label {
      width: 60%;
    }

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
  position: absolute;
  right: 0;

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
  min-width: 183px;

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
      border: 2px solid rgba(21, 61, 87, 0.7);
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
export const UploadPhoto = styled.div`
  padding: 18px 24px;
  border-radius: 12px;
  background: #f6f6f6;

  margin-top: 15px;
  width: 100%;

  input {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    cursor: pointer;

    .imageMiniature {
      border-radius: 50%;
      height: 30px;
      transition: 0.3s;
      width: 30px;
      object-fit: cover;
      animation: flip 2s;
    }

    @keyframes flip {
      0% {
        transform: rotateY(0deg);
      }

      45% {
        opacity: 0;
      }

      50% {
        transform: rotateY(180deg);
      }

      100% {
        transform: rotateY(0deg);
        opacity: 1;
      }
    }

    img {
      transition: 0.3s;
      margin-right: 20px;
    }

    h3 {
      font-size: 18px;
      color: #153d57;
    }
  }
`
