import styled, { css, keyframes } from 'styled-components'
import { animated } from 'react-spring'

interface IToastProps {
  type?: 'success' | 'error' | 'info'
  hasdescription?: number
  timer?: number
}

const progress = keyframes`
  from {
    width: 0%;
    border-bottom-right-radius: 0px;
  }

  to {
    width: 100%;
    border-bottom-right-radius: 10px;
  }
`

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `
}

const toastTimerVariations = {
  info: css`
    background: #3172b7;
  `,
  success: css`
    background: #2e656a;
  `,
  error: css`
    background: #c53030;
  `
}

export const Wrapper = styled(animated.div)<IToastProps>`
  width: 300px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${(props) => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${(props) =>
    !props.hasdescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}

  ${(props) =>
    props.timer &&
    css`
      &::after {
        content: '';
        position: absolute;
        ${toastTimerVariations[props.type || 'info']};
        width: 100%;
        height: 4px;
        bottom: 0;
        left: 0;
        border-bottom-left-radius: 10px;
        animation: ${progress} 3s;
      }
    `}
`
