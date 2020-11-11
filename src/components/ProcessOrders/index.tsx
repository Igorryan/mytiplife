import * as S from './styles'

import { useCart } from 'hooks/cart'
import { useCallback, useEffect, useState } from 'react'

import { Cards as BigPlastic } from 'pages/Products/BigPlastic'
import { Cards as SmallAcrilic } from 'pages/Products/SmallAcrilic'
import { Cards as PocketSize } from 'pages/Products/PocketSize'

import downloadComponentInPDF from 'utils/downloadComponentInPDF'
import { useAuth } from 'hooks/auth'
interface IProps {
  handleSetStage(state: number): void
}
const ProcessOrders: React.FC<IProps> = ({ handleSetStage }) => {
  const { products } = useCart()
  const { username } = useAuth()

  const [sendingElement, setSendingElement] = useState(0)
  const [exitElement, setExitElement] = useState<number>()

  const ProcessOrder = useCallback(async (order: number, pdfName: string) => {
    const Element = document.getElementById(`Card_${order}`)
    Element && (await downloadComponentInPDF(Element, pdfName))
  }, [])

  useEffect(() => {
    const ordersLength = products.length

    if (sendingElement >= ordersLength) {
      handleSetStage(4)
      return
    }

    setTimeout(async () => {
      await ProcessOrder(
        sendingElement,
        `order_${sendingElement}_${username}.pdf`
      )
      setExitElement(sendingElement)
      setTimeout(() => {
        setSendingElement(sendingElement + 1)
      }, 2000)
    }, 1)
  }, [ProcessOrder, handleSetStage, products.length, sendingElement, username])

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
      <h1>
        {sendingElement < products.length
          ? `${sendingElement + 1}/${
              products.length
            } - Sending production orders`
          : `Done!`}
      </h1>
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
    </S.Wrapper>
  )
}

export default ProcessOrders
