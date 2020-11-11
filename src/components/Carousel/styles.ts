import styled, { css, keyframes } from 'styled-components'

const flipInDiagLTr = keyframes`
  0% {
    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform-origin: 50% 0%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
`

interface IElementWrapper {
  isFocused: boolean
}

interface IElements {
  position: number
}

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
  overflow: hidden;
  animation: ${flipInDiagLTr} 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;

  @media (max-width: 1092px) {
    transform: scale(1.1);
    margin-top: 20px;
    margin-bottom: 80px;
  }

  @media (max-width: 720px) {
    transform: scale(0.8);
    margin-top: -60px;
    margin-bottom: 0px;
  }

  @media (max-width: 500px) {
    transform: scale(0.6);
    margin-top: -150px;
    margin-bottom: -80px;
  }
`

export const Elements = styled.div<IElements>`
  display: flex;
  align-items: center;
  position: relative;
  height: 580px;
  transition: transform 1s;
  left: 0;

  ${({ position }) =>
    css`
      transform: translateX(${position}px);
    `}
`

export const ElementWrapper = styled.div<IElementWrapper>`
  float: left;
  transition: opacity 1s;
  margin: 10px;

  > div {
    transform: scale(0.9);
    opacity: 0.6;
    transition: all 1s;
  }

  ${(props) =>
    props.isFocused &&
    css`
      > div {
        transform: scale(1.1);
        opacity: 1;
      }
    `}
`
