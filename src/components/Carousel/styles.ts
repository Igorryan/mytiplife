import styled, { css } from 'styled-components'

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

export const ArrowsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;

  width: 116%;
  padding: 0 50px;

  .icon {
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: #f9f9f9;
  }
`
