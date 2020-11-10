import { useCallback, useRef } from 'react'
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

const FormSignIn = () => {
  const formRef = useRef<FormHandles>(null)

  const { signIn } = useAuth()
  const { products } = useCart()
  const { addToast } = useToast()

  const handleSubmit = useCallback(
    async (data: SignInCredentials) => {
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
        if (data.password && data.username) {
          await signIn(data)
        }

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
          addToast({
            type: 'error',
            title: `Invalid credentials`,
            description: 'You can create an account'
          })
        }
      }
    },
    [addToast, products.length, signIn]
  )

  return (
    <S.Wrapper ref={formRef} onSubmit={(e) => handleSubmit(e)}>
      <h1>Sign-in</h1>

      <Input icon={FiUser} placeholder="Username" name="username" type="text" />

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

      <Button>Continue</Button>
      <a className="forgotPassword" href="#">
        Forgot your password?
      </a>
    </S.Wrapper>
  )
}

export default FormSignIn
