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

const exitCenterToRightMobile = keyframes`
  0% {
    transform: scale(0.7);
  }

  20% {
    transform: scale(0.7);
  }

  80% {
    opacity: 1;
    transform: scale(0.5);
    margin-right: 0px;
  }

  100% {
    opacity: 0;
    transform: scale(0.5);
    margin-right: -2000px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-top: 50px;
    margin-bottom: 40px;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 18px;
      margin-top: 50px;
      margin-bottom: -40px;
    }
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

    @media (max-width: 600px) {
    transform: scale(0.7);

    ${(props) =>
      props.exit &&
      css`
        animation: ${exitCenterToRightMobile} 2s forwards;
      `}
  }
`
