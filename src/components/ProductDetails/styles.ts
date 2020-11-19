import styled, { css } from 'styled-components'
import { IoIosHelpCircleOutline } from 'react-icons/io'
import ScrollContainer from 'react-indiana-drag-scroll'

interface ButtonProps {
  disabled: boolean
}

interface ColorOptionProps {
  selected?: boolean
}

interface IColorsWrapper {
  colorSelected: string
}

export const Wrapper = styled.div`
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
`

export const UnitScrollWrapper = styled(ScrollContainer)`
  display: flex;
  border-bottom: 1px solid #e8e8e8;
  padding: 20px 0;
  overflow-x: scroll;

  li {
    list-style: none;
    margin: 0 16px;

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
    font-weight: 400;
    color: #bfbfbf;
    cursor: pointer;
    position: relative;
    margin-right: 10px;

    ::after {
      content: 'UN';
      font-size: 14px;
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
`

export const OrderPriceWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  label {
    width: 80%;
    margin: 0 5% 0 calc(5% - 20px);
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

  button {
    height: 57px;
    width: 100%;
    margin: 0;
  }

  @media (max-width: 530px) {
    padding: 20px 15px 20px 0;

    h2 {
      font-size: 28px;

      span {
        font-size: 20px;
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

  @media (max-width: 530px) {
    width: 120px;
    height: 45px;
    font-size: 12px;
  }
`

export const CustomizationsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`

export const ColorsWrapper = styled.ul<IColorsWrapper>`
  background: #f6f6f6;
  font-size: 18px;
  color: #153d57;

  width: 48%;
  height: 200px;
  min-width: 150px;
  border-radius: 12px;
  list-style: none;
  position: relative;
  padding: 24px;

  h3 {
    font-size: 18px;
    color: #153d57;
  }

  div {
    display: flex;
    overflow-x: scroll;
    margin-top: 35px;
    height: 72px;

    &::-webkit-scrollbar {
      height: 6px;
    }
    &::-webkit-scrollbar-track {
      background: transparent; /* color of the tracking area */
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 100px;

      ${(props) =>
        props.colorSelected &&
        css`
          background-color: ${props.colorSelected};
        `}
    }
  }
`

export const ColorOption = styled.li<ColorOptionProps>`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
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

  @media (max-width: 530px) {
    width: 30px;
    height: 30px;
  }
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
