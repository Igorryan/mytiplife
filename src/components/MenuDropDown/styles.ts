import styled from 'styled-components'
import {
  swingInTopFwdAnimation,
  swingOutTopBckAnimation
} from 'styles/keyframes'

interface MenuProps {
  open: boolean
}

export const Wrapper = styled.div<MenuProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 70px;

  background: #003d59;

  ${(props) => (props.open ? swingInTopFwdAnimation : swingOutTopBckAnimation)}

  width: 150px;
  height: 129px;
  border-radius: 12px;
  left: -10px;

  :before {
    content: '';
    width: 0;
    height: 0;
    margin: 0 auto;
    margin-top: -20px;

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
