import styled from 'styled-components'
import { swingInTopFwdAnimation } from 'styles/keyframes'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${swingInTopFwdAnimation}
  animation-duration: 0.8s;
`

export const Section = styled.div`
  width: 300px;
  text-align: center;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  border-radius: 20px;

  h1 {
    margin-bottom: 22px;
  }

  > p {
    font-size: 14px;
    color: #a9a9a9;
    margin-bottom: 6px;
  }

  span {
    color: #ff7300;
  }

  a {
    color: #a9a9a9;
    font-weight: 400;
  }

  button {
    margin: 20px 0;
  }
`

export const MotionMailPulseContainer = styled.div`
  width: 350px;
  margin-top: -120px;
  margin-left: -40px;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    display: none;
  }
`
export const MotionVerifiedContainer = styled.div`
  margin: 20px;
  margin-bottom: 40px;
`
