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
  width: 100%;
  height: 100%;
  margin-bottom: 40px;
  width: 100vw;
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
  overflow: hidden;
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

export const InfoWrapper = styled.div`
  margin: 50px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 16px;
    margin: 0;
    margin-top: 18px;
    font-weight: 400;
    opacity: 0.8;
    text-align: center;
  }

  span {
    background: #ffce00;
    font-size: 14px;
    padding: 4px 20px;
    border-radius: 30px;
    font-weight: 500;
    margin-right: 5px;
    text-align: center;
    width: 80px;
    transition: background-color color 0.6s;
  }
`

export const AnimationWrapperValidated = styled.div`
  width: 500px;
  margin-top: -80px;
`
