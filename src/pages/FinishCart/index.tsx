import { useCallback, useEffect, useRef, useState } from 'react'

import * as S from 'styles/FinishCart/styles'

import SimpleHeader from 'components/SimpleHeader'
import DeliveryAddress, { ILocationData } from 'components/DeliveryAddress'
import PaymentDetails from 'components/PaymentDetails'
import Finished from 'components/Finished'
import Footer from 'components/Footer'
import { useToast } from 'hooks/toast'
import { useAuth } from 'hooks/auth'
import { useCart } from 'hooks/cart'
import ProcessOrders from 'components/ProcessOrders'

export interface IOrderData {
  deliveryAddress: ILocationData
  username: string
  deliveryData: string
  requestNumber: string
  cartTotal: number
}

const FinishCart: React.FC = () => {
  const { addToast } = useToast()
  const { isAuthenticated, username } = useAuth()
  const { totalCartValue, products } = useCart()

  const [deliveryAddress, setDeliveryAddress] = useState<ILocationData>(
    {} as ILocationData
  )
  const [paymentAccept, setPaymentAccept] = useState(false)
  const [orderData, setOrderData] = useState<IOrderData>({} as IOrderData)

  const [stage, setStage] = useState(1)
  const [animation, setAnimation] = useState('fadeInRight')
  const animationWrapperRef = useRef<HTMLDivElement>(null)

  const handleSetStage = useCallback(
    (toStage: number) => {
      if (toStage === 3) {
        animated('', '', toStage, 700)
        return
      }

      if (toStage > 3) {
        animated('swingOutTopBck', 'flipInHorBottomPrimary', toStage, 700)
        return
      }

      const outEffect = toStage >= stage ? 'fadeOutLeft' : 'fadeOutRight'
      const inEffect = toStage < stage ? 'fadeInLeft' : 'fadeInRight'

      animated(outEffect, inEffect, toStage, 700)
    },
    [stage]
  )

  useEffect(() => {
    if (paymentAccept) {
      //Send Order to backend
      //received order and send to finish part

      console.log('Pagamento aceito, enviando PDF...')

      const response = {
        deliveryAddress,
        username,
        deliveryData: 'Your order will arrive by day X',
        requestNumber: 'MKJ2345HQ',
        cartTotal: totalCartValue
      }

      setOrderData(response)
      handleSetStage(3)
      //limpar carrinho
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deliveryAddress, username, paymentAccept, totalCartValue])

  useEffect(() => {
    if (!isAuthenticated()) {
      addToast({
        type: 'error',
        title: 'You need to log in again',
        description: 'We will redirect you',
        timer: true
      })

      setTimeout(() => {
        window.location.href = '/Sign'
      }, 3500)
    }
  }, [addToast, isAuthenticated, products.length])

  function animated(
    animationOut: string,
    animationIn: string,
    toStage: number,
    ms: number
  ) {
    setAnimation(animationOut)
    setTimeout(() => {
      setAnimation(animationIn)
      setStage(toStage)
    }, ms)
  }

  return (
    <S.Wrapper>
      <SimpleHeader></SimpleHeader>
      <S.ProgressBar progress={stage}>
        <ul className="divToPdf">
          <li>Address</li>
          <li>Payment</li>
          <li>Finished</li>
          <div className="bar">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="progressCompleted"></div>
          </div>
        </ul>
      </S.ProgressBar>

      <S.StagesFinishCartWrapper>
        <S.WrapperForAnimation animation={animation} ref={animationWrapperRef}>
          {stage === 1 ? (
            <DeliveryAddress
              handleSetStage={handleSetStage}
              setDeliveryAddress={setDeliveryAddress}
            />
          ) : stage === 2 ? (
            <PaymentDetails
              handleSetStage={handleSetStage}
              setPaymentAccept={setPaymentAccept}
            />
          ) : stage === 3 ? (
            <ProcessOrders handleSetStage={handleSetStage}></ProcessOrders>
          ) : (
            <Finished orderData={orderData} />
          )}
        </S.WrapperForAnimation>
      </S.StagesFinishCartWrapper>

      <Footer></Footer>
    </S.Wrapper>
  )
}

export default FinishCart
