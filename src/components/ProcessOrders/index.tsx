import * as S from './styles'

import { useCart } from 'hooks/cart'
import { useCallback, useEffect, useState } from 'react'

import { Cards as BigPlastic } from 'pages/Products/BigPlastic'
import { Cards as SmallAcrilic } from 'pages/Products/SmallAcrilic'
import { Cards as PocketSize } from 'pages/Products/PocketSize'

import downloadComponentInPDF from 'utils/downloadComponentInPDF'
interface IProps {
  handleSetStage(state: number): void
}
const ProcessOrders: React.FC<IProps> = ({ handleSetStage }) => {
  const { products } = useCart()

  const [sendingElement, setSendingElement] = useState(0)

  const ProcessOrder = useCallback(async (order: number) => {
    const Element = document.getElementById(`Card_${order}`)
    Element && (await downloadComponentInPDF(Element))
  }, [])

  useEffect(() => {
    const ordersLength = products.length

    if (sendingElement >= ordersLength) {
      handleSetStage(4)
      return
    }

    setTimeout(async () => {
      await ProcessOrder(sendingElement)
      setSendingElement(sendingElement + 1)
    }, 3000)
  }, [ProcessOrder, handleSetStage, products.length, sendingElement])

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
      {products &&
        products.map((product, i) => {
          const Card = getCard(product.product.title, product.currentCard)

          if (Card) {
            return (
              <S.CardWrapper
                sending={sendingElement === i}
                key={i}
                id={`Card_${i}`}
              >
                <Card
                  color={product.color}
                  image={product.image ? product.image : ''}
                  job={product.job}
                  name={product.name}
                />
              </S.CardWrapper>
            )
          }
        })}
    </S.Wrapper>
  )
}

export default ProcessOrders
