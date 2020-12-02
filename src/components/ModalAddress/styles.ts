import styled from 'styled-components'
import { Form } from '@unform/web'
import {
  slideInBlurredTopAnimation,
  slideOutBlurredRightAnimation
} from 'styles/keyframes'
import { ILocationData } from 'components/DeliveryAddress'

interface IFormProps {
  show: ILocationData | undefined
}

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  z-index: 14;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(255, 255, 255, 0.88);
`

export const FormAddress = styled(Form)<IFormProps>`
  width: 320px;
  background: #fff;
  padding: 40px 35px 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  border-radius: 15px;
  position: relative;

  ${(props) =>
    props.show ? slideInBlurredTopAnimation : slideOutBlurredRightAnimation}
  animation-duration: 0.4s;

  header {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100px;
    height: 28px;
    position: absolute;
    margin-top: -54px;
    border-radius: 140px;

    text-transform: uppercase;
    text-align: center;
    font-weight: 600;
    font-size: 14px;

    color: #003d59;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  }

  h1 {
    font-size: 40px;
    margin-bottom: 45px;
  }

  div {
    width: 100%;

    p {
      font-size: 12px;
      color: #a9a9a9;
      margin-left: 30px;
    }
  }

  .buttonsWrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      margin-top: 20px;
      border-radius: 5px;

      width: 100%;
    }
  }
`

export const ButtonCancel = styled.button`
  background: transparent;
  font-size: 14px;
  font-weight: 500;
  color: #a9a9a9;
  height: 40px;
`
