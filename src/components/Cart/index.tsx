import * as S from './styles'
import { VscArrowLeft } from 'react-icons/vsc'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useCallback } from 'react'

interface IProps {
  product: string
  description: string
  card: number
  units: number
  price: number
  name: string
  job: string
  color: string
}

const productsInCart: IProps[] = [
  {
    product: 'Sticker Card',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,',
    card: 2,
    units: 1200,
    price: 3000.29,
    name: 'Igor Ryan',
    job: 'Developer',
    color: '#59C398'
  },
  {
    product: 'Big Plastic',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,',
    card: 5,
    units: 2190,
    price: 4091.93,
    name: 'Igor Ryan',
    job: 'Design',
    color: '#CF5289'
  }
]

const Cart = () => {
  const getFractionalInPriceValue = useCallback((value: number): number => {
    const [, fractional] = value.toString().split('.')
    return Number(fractional)
  }, [])

  return (
    <S.Wrapper>
      <header>
        <div>
          <VscArrowLeft size={25} color="#fff" />
          <h1>Your cart</h1>
        </div>
        <img src="/img/cartHeaderIllustration.svg" alt="" />
      </header>

      <ul>
        {productsInCart.map(({ product, description, price, units }, i) => (
          <li key={i}>
            <img src="/img/example_productCardImage.png" alt="" />
            <div className="description">
              <header>
                <h1>{product}</h1>
                <strong>
                  {units}
                  <span>UN</span>
                </strong>
              </header>
              <p>{description}</p>
              <div>
                <strong>
                  <span>$</span>
                  {Math.trunc(price)}
                  <span>.{getFractionalInPriceValue(price)}</span>
                </strong>
                <button>
                  TO REMOVE
                  <AiFillCloseCircle
                    size={26}
                    style={{
                      marginLeft: 5
                    }}
                  />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </S.Wrapper>
  )
}

export default Cart
