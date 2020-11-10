import styled, { css, keyframes } from 'styled-components'

interface ICardWrapper {
  sending: boolean
  exit: boolean
}

const exitCenterToRight = keyframes`
  0% {
    transform: scale(1);
  }

  20% {
    transform: scale(1);
  }

  80% {
    opacity: 1;
    transform: scale(0.8);
    margin-right: 0px;
  }

  100% {
    opacity: 0;
    transform: scale(0.8);
    margin-right: -2000px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-top: 20px;
  }
`
export const WrapperCard = styled.div<ICardWrapper>`
  display: none;

  ${(props) =>
    props.sending &&
    css`
      display: flex;
    `}

  ${(props) =>
    props.exit &&
    css`
      animation: ${exitCenterToRight} 2s forwards;
    `}
`
