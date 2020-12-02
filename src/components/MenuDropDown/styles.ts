import styled, { css } from 'styled-components'
import {
  swingInTopFwdAnimation,
  swingOutTopBckAnimation
} from 'styles/keyframes'

interface MenuProps {
  open: boolean | 'init'
}

export const Wrapper = styled.div<MenuProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 70px;
  padding-bottom: 10px;
  background: #003d59;
  width: 150px;
  border-radius: 12px;
  left: -10px;
  z-index: 15;

  ${(props) =>
    props.open === 'init' &&
    css`
      opacity: 0;
    `}

  ${(props) => props.open === true && swingInTopFwdAnimation}

  ${(props) =>
    props.open === false &&
    swingOutTopBckAnimation}



  @media (max-width: 1100px) {
    left: auto;
  }

  :before {
    content: '';
    width: 0;
    height: 0;
    margin: 0 auto;
    position: absolute;
    top: -10px;

    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid #003d59;
  }

  a {
    margin: 0px;
    padding: 0;
    color: #fff !important;
    text-transform: initial !important;
    font-weight: 500;
    line-height: 34px;

    :first-of-type {
      margin-top: 11px;
    }
  }
`
