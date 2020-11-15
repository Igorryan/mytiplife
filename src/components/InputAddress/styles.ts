import styled, { css } from 'styled-components'
import Tooltip from 'components/Tooltip'

interface IWrapperProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

export const Wrapper = styled.div<IWrapperProps>`
  display: flex;
  align-items: center;

  font-family: 'Rubik', sans-serif;
  color: #e8e8e8;
  width: 100%;
  position: relative;
  & + div {
    margin-top: 8px;
  }

  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #c6c6c6;
    margin-bottom: 15px;
    font-size: 14px;
    color: #153d57;
    padding: 6px 10px 6px 30px;
    background: transparent;

    ${(props) =>
      props.isErrored &&
      css`
        border-color: #c53030;
      `}

    ${(props) =>
      props.isFocused &&
      css`
        color: #153d57;
        border-color: #11cea2;
        font-weight: 700;
      `}

  ${(props) =>
      props.isFilled &&
      css`
        color: #153d57;
      `}

    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
    }

    &:focus {
      outline: none;
      font-weight: 600;
    }

    & + input {
      margin-top: 8px;
    }
  }

  svg {
    margin-right: 16px;
  }
`
export const Error = styled(Tooltip)`
  height: 20px;
  left: 6px;
  bottom: 20px;
  width: 20px !important;
  position: absolute;
  svg {
    width: 18px;
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`
