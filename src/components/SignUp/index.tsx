import { useCallback, useRef } from 'react'
import * as Yup from 'yup'
import * as S from './styles'
import { useToast } from 'hooks/toast'
import api from 'services/api'

import { FormHandles } from '@unform/core'
import getValidationErrors from 'utils/getValidationErrors'

import { FiMail, FiUser } from 'react-icons/fi'
import { RiLockPasswordLine, RiLockPasswordFill } from 'react-icons/ri'

import Input from 'components/Input'
import Button from 'components/Button'
import { useCart } from 'hooks/cart'
import { useAuth } from 'hooks/auth'
import Redirect from 'utils/Redirect'

interface IDataProps {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const FormSignUp = () => {
  const formRef = useRef<FormHandles>(null)

  const { signIn } = useAuth()
  const { addToast } = useToast()
  const { products } = useCart()

  const handleSignUp = useCallback(
    async (data: IDataProps) => {
      formRef.current?.setErrors({})

      try {
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          email: Yup.string()
            .email('Enter a valid email address')
            .required('E-mail required'),
          password: Yup.string().min(6, 'At least 6 digits'),
          confirmPassword: Yup.string()
            .required('Password confirmation required')
            .oneOf([Yup.ref('password')], 'Passwords do not match')
        })

        await schema.validate(data, {
          abortEarly: false
        })

        //SignIn
        const response = await api.post('/register', {
          name: data.name,
          email: data.email,
          password: data.password
        })

        if (!response.data.status) {
          throw new Error(response.data.message)
        }

        console.log(response.data)

        addToast({
          type: 'success',
          title: `Welcome ${data.name.toUpperCase()}`,
          description: 'Signing in with your account',
          timer: true
        })

        await signIn({
          email: data.email,
          password: data.password
        })

        setTimeout(() => {
          if (products.length > 0) {
            Redirect('FinishCart')
          } else {
            Redirect('')
          }
        }, 3200)
      } catch (err) {
        const errors = getValidationErrors(err)
        if (err instanceof Yup.ValidationError) {
          formRef.current?.setErrors(errors)
        } else {
          addToast({
            type: 'error',
            title: err.message
          })
        }
      }
    },
    [addToast, products.length, signIn]
  )

  return (
    <S.Wrapper ref={formRef} onSubmit={(e) => handleSignUp(e)}>
      <h1>New to My tip life?</h1>

      <Input icon={FiUser} placeholder="Your name" name="name" type="text" />

      <Input
        icon={FiMail}
        placeholder="Your best e-mail"
        name="email"
        type="text"
      />

      <Input
        icon={RiLockPasswordLine}
        placeholder="Password"
        name="password"
        type="password"
      />

      <Input
        icon={RiLockPasswordFill}
        placeholder="Confirm your password"
        name="confirmPassword"
        type="password"
      />

      <Button>Create your Tip My Life account</Button>
    </S.Wrapper>
  )
}

export default FormSignUp
