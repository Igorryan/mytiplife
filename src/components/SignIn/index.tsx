import { useCallback, useRef, useState } from 'react'
import * as S from './styles'
import * as Yup from 'yup'
import { SignInCredentials, useAuth } from 'hooks/auth'
import { useToast } from 'hooks/toast'
import { useCart } from 'hooks/cart'
import Redirect from 'utils/Redirect'
import { FormHandles } from '@unform/core'
import getValidationErrors from 'utils/getValidationErrors'

import { FiUser, FiLock } from 'react-icons/fi'

import Input from 'components/Input'
import Button from 'components/Button'
import ConfirmAccount, {
  ConfirmationAccountData
} from 'components/ConfirmAccount'

const FormSignIn = () => {
  const formRef = useRef<FormHandles>(null)

  const [loading, setLoading] = useState(false)
  const [confirmAccount, setConfirmAccount] = useState(false)
  const [dataToConfirmAccount, setDataToConfirmAccount] = useState(
    {} as ConfirmationAccountData
  )

  const { signIn } = useAuth()
  const { products } = useCart()
  const { addToast } = useToast()

  const handleSubmit = useCallback(
    async (data: SignInCredentials) => {
      setLoading(true)
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          username: Yup.string().required('Username required')
        })

        await schema.validate(data, {
          abortEarly: false
        })

        //SignIn
        await signIn(data)

        if (products.length > 0) {
          Redirect('FinishCart')
        } else {
          Redirect('')
        }
      } catch (err) {
        const errors = getValidationErrors(err)

        if (err instanceof Yup.ValidationError) {
          formRef.current?.setErrors(errors)
        } else {
          const errorMessage = err.response.data.message
          const errorStatus = err.response.status

          errorMessage
            ? addToast({
                type: 'error',
                title: `${errorMessage}`
              })
            : addToast({
                type: 'error',
                title: `Sorry for the inconvenience`,
                description:
                  'There was an error when trying to process your request :('
              })

          //Identificando necessidade de confirmar conta e redirecionando
          if (errorStatus === 403) {
            const { email, resend_url } = err.response.data

            setDataToConfirmAccount({
              ...data,
              email,
              resend_url
            })

            setConfirmAccount(true)
          }
        }
      }
      setLoading(false)
    },
    [addToast, products.length, signIn]
  )

  if (confirmAccount)
    return (
      <ConfirmAccount
        username={dataToConfirmAccount.username}
        password={dataToConfirmAccount.password}
        resend_url={dataToConfirmAccount.resend_url}
        email={dataToConfirmAccount.email}
      />
    )
  else
    return (
      <S.Wrapper
        id="signInForm"
        ref={formRef}
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1>Sign-in</h1>

        <Input
          id="username"
          style={{ textTransform: 'lowercase' }}
          icon={FiUser}
          placeholder="Username"
          name="username"
          type="text"
        />

        <Input
          id="password"
          icon={FiLock}
          placeholder="Password"
          name="password"
          type="password"
        />

        <a className="terms" href="#">
          By continuing, you agree to
          <span> My Tip Life Conditions of Use </span>
          and <span>Privacy Notice</span>
        </a>

        <Button id="signInButton" disabled={loading} loading={loading}>
          Continue
        </Button>
        <a
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
          className="forgotPassword"
          href="https://www.mytiplife.com/forgot_password"
        >
          Forgot your password?
        </a>
      </S.Wrapper>
    )
}

export default FormSignIn
