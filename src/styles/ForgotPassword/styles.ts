import styled from 'styled-components'
import { Form } from '@unform/web'
import ReCAPTCHA from 'react-google-recaptcha'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  section {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-right: 60px;
      width: 500px;
    }
  }

  @media (max-width: 860px) {
    section {
      img {
        display: none;
      }
    }
  }
`

export const FormWrapper = styled(Form)`
  width: 300px;
  text-align: center;

  h1 {
    margin-bottom: 22px;
  }

  > p {
    font-size: 12px;
    color: #a9a9a9;
    margin-bottom: 6px;
  }

  .terms {
    text-decoration: none;
    color: #5e5e5e;
    font-size: 12px;
    font-weight: 400;
    text-align: center;

    width: 230px;
    margin: 20px auto 0px;

    span {
      font-weight: 600;
      color: #ff7300;
    }
  }
`

export const ReCAPTCHAGoogle = styled(ReCAPTCHA)`
  margin-top: 20px;
`
