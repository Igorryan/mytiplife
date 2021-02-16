import * as S from './styles'
import lottie, { AnimationItem } from 'lottie-web'
import AnimationValidated from '../../../public/animations/sent-successfully.json'

import { useCart } from 'hooks/cart'
import { useCallback, useEffect, useRef, useState } from 'react'

import { Cards as BigPlastic } from 'pages/Products/BigPlastic'
import { Cards as SmallAcrilic } from 'pages/Products/SmallAcrilic'
import { Cards as PocketSize } from 'pages/Products/PocketSize'

import downloadComponentInPDF from 'utils/downloadComponentInPDF'
import { IOrderData, IProductData } from 'pages/FinishCart'
import api from 'services/api'

interface IProps {
  handleSetStage(state: number): void
  setOrderData(state: IOrderData): void
  orderData: IOrderData
}

const ProcessOrders: React.FC<IProps> = ({
  handleSetStage,
  setOrderData,
  orderData
}) => {
  const { products, totalCartValue } = useCart()

  const [sendingElement, setSendingElement] = useState(-1)
  const [exitElement, setExitElement] = useState<number>()
  const [productsFormatted, setProductsFormatted] = useState<IProductData[]>([])

  //animation
  const refAnimationContainerValidated = useRef<HTMLDivElement>(null)
  const [animation, setAnimation] = useState<AnimationItem | null>(null)

  const ProcessOrder = useCallback(
    async (order: number) => {
      const Element = document.getElementById(`Card_${order}`)

      if (!Element) return

      const folderAndFileName = await downloadComponentInPDF(Element)

      const priceUnity = Number(
        (products[order].total / products[order].quantity).toFixed(2)
      )

      const product = {
        productId: products[order].id,
        quantity: products[order].quantity,
        file: `https://playtubegiftcards.s3.amazonaws.com/${folderAndFileName}`,
        priceUnity
      }

      setProductsFormatted((state) => [...state, product])
    },
    [products]
  )

  const registeringPurchase = useCallback(async () => {
    console.log('Registrando compra')

    const token = localStorage.getItem('@MyTipLife:token')

    if (!token) return

    const order = {
      totalPrice: totalCartValue,
      address: orderData.deliveryAddress,
      products: productsFormatted
    }

    console.log(order)

    const response = await api.post('/order', order, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if (!response.data) return

    const { deliveryDate, requestNumber } = response.data.data

    const newOrderData = {
      ...orderData,
      deliveryDate: String(deliveryDate),
      requestNumber: String(requestNumber)
    }

    setOrderData(newOrderData)

    setTimeout(() => {
      localStorage.removeItem('@MyTipLife:cart')
      handleSetStage(4)
    }, 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleSetStage, productsFormatted])

  const getCard = useCallback((title: string, cardNumber: number) => {
    if (title === 'Pocket Size') {
      return PocketSize[cardNumber]
    } else if (title === 'Small Acrilic') {
      return SmallAcrilic[cardNumber]
    } else if (title === 'Big Plastic') {
      return BigPlastic[cardNumber]
    }
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

      registeringPurchase()

      return
    }

    setTimeout(async () => {
      await ProcessOrder(sendingElement)
      setExitElement(sendingElement)
      setTimeout(() => {
        setSendingElement(sendingElement + 1)
      }, 2000)
    }, 1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendingElement])

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
