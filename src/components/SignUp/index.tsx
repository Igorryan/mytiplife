import { useCallback, useRef, useState } from 'react'
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

interface IDataProps {
  username: string
  email: string
  password: string
  confirmPassword: string
}

const FormSignUp = () => {
  const formRef = useRef<FormHandles>(null)
  const [loading, setLoading] = useState(false)

  const { addToast } = useToast()

  const handleSignUp = useCallback(
    async (data: IDataProps) => {
      formRef.current?.setErrors({})
      setLoading(true)

      try {
        const schema = Yup.object().shape({
          username: Yup.string().required('Username required'),
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
          username: data.username,
          email: data.email,
          password: data.password,
          confirm_password: data.confirmPassword
        })

        if (!response.data.status) {
          throw new Error(response.data.message)
        }

        addToast({
          type: 'success',
          title: `Welcome ${data.username}`,
          description: response.data.message
        })

        const button = document.querySelector<HTMLButtonElement>(
          '#signInButton'
        )
        const usernameInput = document.querySelector<HTMLInputElement>(
          '#username'
        )
        const passwordInput = document.querySelector<HTMLInputElement>(
          '#password'
        )

        if (usernameInput) usernameInput.value = data.username
        if (passwordInput) passwordInput.value = data.password
        if (button) button.click()
      } catch (err) {
        const errors = getValidationErrors(err)

        if (err instanceof Yup.ValidationError) {
          formRef.current?.setErrors(errors)
        } else {
          const errorMessage = err.response.data.message
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
        }
      }

      setLoading(false)
    },
    [addToast]
  )

  return (
    <S.Wrapper ref={formRef} onSubmit={(e) => handleSignUp(e)}>
      <h1>New to My tip life?</h1>

      <Input
        icon={FiUser}
        style={{ textTransform: 'lowercase' }}
        placeholder="Create your user name"
        name="username"
        type="text"
      />

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

      <Button disabled={loading} loading={loading} style={{ marginTop: 20 }}>
        Create your Tip My Life account
      </Button>
    </S.Wrapper>
  )
}

export default FormSignUp
