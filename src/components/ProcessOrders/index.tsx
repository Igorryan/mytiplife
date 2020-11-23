import * as S from './styles'
import lottie, { AnimationItem } from 'lottie-web'
import AnimationValidated from '../../../public/animations/sent-successfully.json'

import { useCart } from 'hooks/cart'
import { useAuth } from 'hooks/auth'
import { useCallback, useEffect, useRef, useState } from 'react'

import { Cards as BigPlastic } from 'pages/Products/BigPlastic'
import { Cards as SmallAcrilic } from 'pages/Products/SmallAcrilic'
import { Cards as PocketSize } from 'pages/Products/PocketSize'

import downloadComponentInPDF from 'utils/downloadComponentInPDF'

interface IProps {
  handleSetStage(state: number): void
}
const ProcessOrders: React.FC<IProps> = ({ handleSetStage }) => {
  const { products } = useCart()
  const { username } = useAuth()

  const [sendingElement, setSendingElement] = useState(0)
  const [exitElement, setExitElement] = useState<number>()

  //animation
  const refAnimationContainerValidated = useRef<HTMLDivElement>(null)
  const [animation, setAnimation] = useState<AnimationItem | null>(null)

  const ProcessOrder = useCallback(async (order: number, pdfName: string) => {
    const Element = document.getElementById(`Card_${order}`)
    Element && (await downloadComponentInPDF(Element, pdfName))
  }, [])

  useEffect(() => {
    if (refAnimationContainerValidated.current) {
      setAnimation(
        lottie.loadAnimation({
          container: refAnimationContainerValidated.current,
          animationData: AnimationValidated,
          loop: false,
          autoplay: false
        })
      )
    }
  }, [])

  useEffect(() => {
    if (sendingElement >= products.length) {
      animation?.play()
      animation?.setSpeed(1.5)

      if (refAnimationContainerValidated.current) {
        refAnimationContainerValidated.current.style.display = 'flex'
      }

      setTimeout(() => {
        handleSetStage(4)
      }, 3000)
      return
    }

    setTimeout(async () => {
      console.log(`processando pedido`)
      await ProcessOrder(
        sendingElement,
        `order_${sendingElement}_${username}.pdf`
      )
      setExitElement(sendingElement)
      setTimeout(() => {
        setSendingElement(sendingElement + 1)
      }, 2000)
    }, 1)
  }, [
    ProcessOrder,
    animation,
    handleSetStage,
    products.length,
    sendingElement,
    username
  ])

  const getCard = useCallback((title: string, cardNumber: number) => {
    if (title === 'Pocket Size') {
      return PocketSize[cardNumber]
    } else if (title === 'Small Acrilic') {
      return SmallAcrilic[cardNumber]
    } else if (title === 'Big Plastic') {
      return BigPlastic[cardNumber]
    }
  }, [])

  return (
    <S.Wrapper>
      <S.InfoWrapper>
        {sendingElement < products.length ? (
          <>
            <span>{`${sendingElement + 1}/${products.length}`}</span>
            <h1>Please, wait a minute, we are sending your orders...</h1>
          </>
        ) : (
          <>
            <h1>Very well! Finalizing your order...</h1>
          </>
        )}
      </S.InfoWrapper>

      {products &&
        products.map((product, i) => {
          const Card = getCard(product.product.title, product.currentCard)

          if (Card) {
            return (
              <S.WrapperCard
                sending={sendingElement === i}
                exit={exitElement === i}
                key={i}
                id={`Card_${i}`}
              >
                <Card
                  color={product.color}
                  image={product.image ? product.image : ''}
                  job={product.job}
                  name={product.name}
                />
              </S.WrapperCard>
            )
          }
        })}

      <S.AnimationWrapperValidated
        style={{ display: 'none' }}
        ref={refAnimationContainerValidated}
      />
    </S.Wrapper>
  )
}

export default ProcessOrders
