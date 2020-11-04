import * as S from './styles'

import { useCart } from 'hooks/cart'
import { useCallback, useEffect } from 'react'

import { Cards as BigPlastic } from 'pages/Products/BigPlastic'
import { Cards as SmallAcrilic } from 'pages/Products/SmallAcrilic'
import { Cards as PocketSize } from 'pages/Products/PocketSize'

import downloadComponentInPDF from 'utils/downloadComponentInPDF'
interface IProps {
  handleSetStage(state: number): void
}
const ProcessOrders: React.FC<IProps> = ({ handleSetStage }) => {
  const { products } = useCart()

  useEffect(() => {
    products &&
      products.forEach((product, i) => {
        const Element = document.getElementById(`Card_${i}`)
        Element && downloadComponentInPDF(Element)
      })

    setTimeout(() => {
      handleSetStage(4)
    }, 4000)
  }, [handleSetStage, products])

  const getCard = useCallback((title: string, cardNumber: number) => {
    if (title === 'Pocket Size') {
      return { Card: PocketSize[cardNumber], cardName: 'pocket' }
    } else if (title === 'Small Acrilic') {
      return { Card: SmallAcrilic[cardNumber], cardName: 'small' }
    } else if (title === 'Big Plastic') {
      return { Card: BigPlastic[cardNumber], cardName: 'big' }
    }
  }, [])

  return (
    <S.Wrapper>
      {products &&
        products.map((product, i) => {
          console.log(product.product.title)

          const { Card, cardName } = getCard(
            product.product.title,
            product.currentCard - 1
          )

          if (Card) {
            return (
              <S.CardWrapper
                cardName={cardName}
                key={i}
                className="active"
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
