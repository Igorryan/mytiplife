import { useCallback, useRef, useState } from 'react'
import * as S from './styles'

import SimpleHeader from 'components/SimpleHeader'
import DeliveryAddress from 'components/FinishCartStages/DeliveryAddress'
import PaymentDetails from 'components/FinishCartStages/PaymentDetails'
import Finished from 'components/FinishCartStages/Finished'
import Footer from 'components/Footer'

const FinishCart = () => {
  const [stage, setStage] = useState(1)
  const [animation, setAnimation] = useState('fadeInRight')
  const animationWrapperRef = useRef<HTMLDivElement>(null)

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

  const handleSetStage = useCallback(
    (toStage: number) => {
      if (toStage !== 3) {
        if (toStage >= stage) {
          animated('fadeOutLeft', 'fadeInRight', toStage, 1000)
        } else if (toStage < stage) {
          animated('fadeOutRight', 'fadeInLeft', toStage, 1000)
        }
      } else {
        animated('fadeOutLeft', '', toStage, 1000)
      }
    },
    [stage]
  )

  return (
    <S.Wrapper>
      <SimpleHeader></SimpleHeader>
      <S.ProgressBar progress={stage}>
        <ul>
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
            <DeliveryAddress handleSetStage={handleSetStage} />
          ) : stage === 2 ? (
            <PaymentDetails handleSetStage={handleSetStage} />
          ) : stage === 3 ? (
            <Finished />
          ) : (
            ''
          )}
        </S.WrapperForAnimation>
      </S.StagesFinishCartWrapper>

      <Footer></Footer>
    </S.Wrapper>
  )
}

export default FinishCart
