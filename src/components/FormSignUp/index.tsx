import { useCallback, useRef } from 'react'
import * as Yup from 'yup'
import * as S from './styles'
import api from 'services/api'

const FormSignUp = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const password_confirmationRef = useRef<HTMLInputElement>(null)

  const displayErrors = useCallback((err: Yup.ValidationError) => {
    console.log(err.errors)
  }, [])

  const handleSignUp = useCallback(
    async (e) => {
      e.preventDefault()

      const data = {
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
        password_confirmation: password_confirmationRef.current?.value
      }

      try {
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          email: Yup.string().email().required(),
          password: Yup.string().required(),
          password_confirmation: Yup.string()
            .required()
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

        console.log(response)
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          displayErrors(err)
        }
      }
    },
    [displayErrors]
  )

  return (
    <S.Wrapper onSubmit={(e) => handleSignUp(e)}>
      <h1>New to My tip life?</h1>

      <label htmlFor="name">Your name</label>
      <input ref={nameRef} type="text" id="name" />

      <label htmlFor="email">Email</label>
      <input ref={emailRef} type="text" id="email" />

      <label htmlFor="password">Password</label>
      <input ref={passwordRef} type="password" id="password" />

      <label htmlFor="password_confirmation">Re-enter password</label>
      <input
        ref={password_confirmationRef}
        type="password"
        id="password_confirmation"
      />

      <button>Create your Tip My Life account</button>
    </S.Wrapper>
  )
}

export default FormSignUp
