/* eslint-disable react/jsx-no-target-blank */
import * as S from './styles'
import lottie from 'lottie-web'

import Button from 'components/Button'
import MotionPulse from '../../../public/animations/mail-pulse.json'
import MotionVerified from '../../../public/animations/verified.json'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useCart } from 'hooks/cart'
import { useToast } from 'hooks/toast'
import { useAuth } from 'hooks/auth'
import Redirect from 'utils/Redirect'

export interface ConfirmationAccountData {
  email: string
  resend_url: string
  password: string
  username: string
}

const ConfirmAccount: React.FC<ConfirmationAccountData> = ({
  username,
  password,
  email,
  resend_url
}) => {
  const [loading, setLoading] = useState(false)

  const [emailVerified, setEmailVerified] = useState(false)
  const refMotionMailPulseContainer = useRef<HTMLDivElement>(null)
  const refMotionVerifiedContainer = useRef<HTMLDivElement>(null)

  const { products } = useCart()
  const { signIn } = useAuth()
  const { addToast } = useToast()

  useEffect(() => {
    !emailVerified &&
      refMotionMailPulseContainer.current &&
      lottie.loadAnimation({
        container: refMotionMailPulseContainer.current,
        animationData: MotionPulse
      })

    if (emailVerified && refMotionVerifiedContainer.current) {
      const animation = lottie.loadAnimation({
        container: refMotionVerifiedContainer.current,
        animationData: MotionVerified,
        loop: false
      })

      animation.setSpeed(0.5)

      animation.addEventListener('complete', async () => {
        if (products.length > 0) {
          Redirect('FinishCart')
        } else {
          Redirect('')
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emailVerified])

  const handleIConfirmedAccount = useCallback(async () => {
    try {
      setLoading(true)
      await signIn({ username, password })
      setEmailVerified(true)
    } catch (err) {
      setLoading(false)
      const errorMessage = err.response.data.message

      console.log(err.response.data)
      console.log(errorMessage)

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
  }, [addToast, password, signIn, username])

  return (
    <S.Wrapper>
      <S.Section>
        <S.MotionMailPulseContainer
          style={{ display: emailVerified ? 'none' : 'flex' }}
          ref={refMotionMailPulseContainer}
        />

        <S.MotionVerifiedContainer
          style={{ display: emailVerified ? 'flex' : 'none' }}
          ref={refMotionVerifiedContainer}
        />
        {emailVerified && <h1 style={{ marginTop: 0 }}>Very Well!</h1>}
        <h1
          style={{
            lineHeight: emailVerified ? '30px' : '',
            color: emailVerified ? '#11cea2' : ''
          }}
        >
          {!emailVerified
            ? 'Confirm your Email:'
            : 'Your account has been confirmed!'}
        </h1>

        {!emailVerified && (
          <>
            <p>
              We sent a confirmation email to <span>{email}</span>
            </p>

            <Button
              loading={loading}
              onClick={() => {
                handleIConfirmedAccount()
              }}
            >
              I confirmed
            </Button>
            <a target="_blank" href={resend_url}>
              Resend Email
            </a>
          </>
        )}
      </S.Section>
    </S.Wrapper>
  )
}

export default ConfirmAccount
