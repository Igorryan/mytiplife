import * as S from './styles'
import SimpleHeader from 'components/SimpleHeader'
import Footer from 'components/Footer'
import Input from 'components/Input'
import Button from 'components/Button'

import { FormHandles } from '@unform/core'
import { useCallback, useRef } from 'react'

interface ForgotPasswordCredentials {
  forgotPassword: string
}

const ForgotPassword = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback((data: ForgotPasswordCredentials) => {
    console.log(data)
  }, [])

  return (
    <S.Wrapper>
      <SimpleHeader></SimpleHeader>
      <section>
        <img src="/img/panda_illustration.svg" alt="" />
        <S.FormWrapper ref={formRef} onSubmit={(e) => handleSubmit(e)}>
          <h1>Forgot your password?</h1>

          <p>Email or username</p>

          <Input
            type="email"
            style={{ textAlign: 'center' }}
            placeholder="nome@mytiplife.com"
            name="forgotPassword"
          ></Input>

          <div className="recapt">
            <S.ReCAPTCHAGoogle sitekey="Your client site key" />
          </div>

          <div className="terms">
            By continuing, you agree to
            <span> My Tip Life Conditions of Use </span>
            and <span>Privacy Notice</span>.
          </div>
          <Button>Send</Button>
        </S.FormWrapper>
      </section>
      <Footer></Footer>
    </S.Wrapper>
  )
}

export default ForgotPassword
