import styled from 'styled-components'
import { Form } from '@unform/web'

export const Wrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;

  h1 {
    font-size: 24px;
    margin-bottom: 40px;
    margin-left: 30px;
  }

  a.terms {
    text-decoration: none;
    color: #5e5e5e;
    font-size: 12px;
    font-weight: 400;
    text-align: center;

    width: 80%;
    margin: 30px auto 0px;

    span {
      font-weight: 600;
      color: #ff7300;
    }
  }

  a.forgotPassword {
    font-size: 12px;
    text-align: right;
    margin-right: 30px;
    color: #153d57;
  }
`
