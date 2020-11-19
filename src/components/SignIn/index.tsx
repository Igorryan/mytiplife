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
import ConfirmAccount from 'components/ConfirmAccount'

const FormSignIn = () => {
  const formRef = useRef<FormHandles>(null)

  const [loading, setLoading] = useState(false)
  const [confirmAccount, setConfirmAccount] = useState(false)
  const [dataToConfirmAccount, setDataToConfirmAccount] = useState(
    {} as SignInCredentials
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
          username: Yup.string().required('Username required'),
          password: Yup.string().min(6, 'At least 6 digits')
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
        setLoading(false)
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
            setDataToConfirmAccount(data)
            setConfirmAccount(true)
          }
        }
      }
    },
    [addToast, products.length, signIn]
  )

  if (confirmAccount)
    return (
      <ConfirmAccount
        username={dataToConfirmAccount.username}
        password={dataToConfirmAccount.password}
      />
    )
  else
    return (
      <S.Wrapper ref={formRef} onSubmit={(e) => handleSubmit(e)}>
        <h1>Sign-in</h1>

        <Input
          style={{ textTransform: 'lowercase' }}
          icon={FiUser}
          placeholder="Username"
          name="username"
          type="text"
        />

        <Input
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

        <Button loading={loading}>Continue</Button>
        <a className="forgotPassword" href="ForgotPassword">
          Forgot your password?
        </a>
      </S.Wrapper>
    )
}

export default FormSignIn
