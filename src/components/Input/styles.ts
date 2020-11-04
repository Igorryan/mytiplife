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

  background: #fff;
  font-family: 'Rubik', sans-serif;
  border-radius: 10px;

  border: 1px solid #e8e8e8;
  color: #e8e8e8;

  padding: 16px;
  width: 100%;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #11cea2;
      color: #11cea2;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #11cea2;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #153d57;

    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
    }

    &:focus {
      border: none;
      outline: none;
      border: none;
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
  margin-left: 16px;

  svg {
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
