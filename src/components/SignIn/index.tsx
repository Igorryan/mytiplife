import { useCallback, useState } from 'react'
import * as S from './styles'
import * as Yup from 'yup'
import { useAuth } from 'hooks/auth'
import { useToast } from 'hooks/toast'
import { useCart } from 'hooks/cart'
import Redirect from 'utils/Redirect'

const FormSignIn = () => {
  const { signIn } = useAuth()
  const { products } = useCart()
  const { addToast } = useToast()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const displayErrors = useCallback((err: Yup.ValidationError) => {
    console.log(err.errors)
  }, [])

  const handleSignIn = useCallback(
    async (e) => {
      e.preventDefault()

      const credentials = {
        email,
        password
      }

      try {
        const schema = Yup.object().shape({
          email: Yup.string().email().required(),
          password: Yup.string().required()
        })

        await schema.validate(credentials, {
          abortEarly: false
        })

        //SignIn
        if (credentials.password && credentials.email) {
          await signIn(credentials)
        }

        if (products.length > 0) {
          Redirect('FinishCart')
        } else {
          Redirect('')
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          displayErrors(err)
        } else {
          addToast({
            type: 'error',
            title: `Invalid credentials`,
            description: 'You can create an account'
          })
        }
      }
    },
    [displayErrors, email, password, signIn, addToast, products]
  )

  return (
    <S.Wrapper onSubmit={(e) => handleSignIn(e)}>
      <h1>Sign-in</h1>

      <label htmlFor="email">Email (phone for mobile accounts)</label>
      <input type="email" onChange={(e) => setEmail(e.currentTarget.value)} />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.currentTarget.value)}
      />

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
