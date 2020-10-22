import { useCallback, useRef } from 'react'
import * as S from './styles'
import * as Yup from 'yup'
import { useAuth } from 'hooks/auth'

const FormSignIn = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const { signIn, name } = useAuth()

  console.log(name)

  const displayErrors = useCallback((err: Yup.ValidationError) => {
    console.log(err.errors)
  }, [])

  const handleSignIn = useCallback(
    async (e) => {
      e.preventDefault()

      const data = {
        email: emailRef.current?.value,
        password: passwordRef.current?.value
      }

      try {
        const schema = Yup.object().shape({
          email: Yup.string().email().required(),
          password: Yup.string().required()
        })

        await schema.validate(data, {
          abortEarly: false
        })

        //SignIn
        if (data.password && data.email) {
          signIn({
            email: data.email,
            password: data.password
          })
        }
        // const response = await api.post('/login', data)
        // console.log(response)
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          displayErrors(err)
        }
      }
    },
    [displayErrors, signIn]
  )

  return (
    <S.Wrapper onSubmit={(e) => handleSignIn(e)}>
      <h1>Sign-in</h1>

      <label htmlFor="email">Email (phone for mobile accounts)</label>
      <input ref={emailRef} type="email" id="email" />

      <label htmlFor="password">Password</label>
      <input ref={passwordRef} type="password" id="password" />

      <a className="terms" href="#">
        By continuing, you agree to
        <span> My Tip Life Conditions of Use </span>
        and <span>Privacy Notice</span>
      </a>

      <button>Continue</button>
      <a className="forgotPassword" href="#">
        Forgot your password?
      </a>
    </S.Wrapper>
  )
}

export default FormSignIn
