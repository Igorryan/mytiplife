import * as S from './styles'
import lottie from 'lottie-web'

import { VscArrowLeft } from 'react-icons/vsc'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useCart } from '../../hooks/cart'
import { useAuth } from 'hooks/auth'
import { useCallback, useEffect, useRef } from 'react'
import Redirect from 'utils/Redirect'
import getIntegerAndFractionalValues from 'utils/getIntegerAndFractionalValues'
import AnimationData from '../../../public/animations/empty-box.json'
import Button from 'components/Button'

const Cart: React.FC = () => {
  const {
    products,
    totalCartValue,
    isOpen,
    removeProduct,
    closeCart
  } = useCart()

  const { username } = useAuth()

  const animationContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (animationContainerRef.current) {
      lottie.loadAnimation({
        container: animationContainerRef.current,
        animationData: AnimationData
      })
    }
  }, [])

  const handleFinishCart = useCallback(() => {
    const toRoute = username ? 'FinishCart' : 'Sign'
    Redirect(toRoute)
  }, [username])

  return (
    <S.Wrapper isOpen={isOpen} id="cart">
      <S.Header isOpen={isOpen}>
        <div>
          <button onClick={closeCart}>
            <VscArrowLeft size={25} color="#fff" />
          </button>
          <h1>Your cart</h1>
        </div>
        <img src="/img/cartHeaderIllustration.svg" alt="" />
      </S.Header>

      <S.EmptyCart
        style={{ display: `${products.length === 0 ? 'flex' : 'none'}` }}
      >
        <S.AnimationWrapper ref={animationContainerRef}></S.AnimationWrapper>
        <h1>Your cart is empty :(</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </p>
      </S.EmptyCart>

      <S.ProductList>
        {products &&
          products.map(({ product, total, quantity }, i) => (
            <S.Product key={i}>
              <img src={product.productImage} alt="" />
              <div className="description">
                <header>
                  <h1>{product.title}</h1>
                  <strong>
                    {quantity}
                    <span>UN</span>
                  </strong>
                </header>
                <p>{product.description}</p>
                <div>
                  <strong>
                    <span>$</span>
                    {getIntegerAndFractionalValues(total).integerPart}
                    <span>
                      .{getIntegerAndFractionalValues(total).fractionalPart}
                    </span>
                  </strong>
                  <button onClick={() => removeProduct(i)}>
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
            </S.Product>
          ))}
      </S.ProductList>

      <S.OrderDetails>
        <div>
          <span>CART TOTAL:</span>
          <strong className="">
            <span>$</span>
            {getIntegerAndFractionalValues(totalCartValue).integerPart}
            <span>
              .{getIntegerAndFractionalValues(totalCartValue).fractionalPart}
            </span>
          </strong>
        </div>

        <Button
          style={{ height: '57px' }}
          onClick={handleFinishCart}
          disabled={products.length === 0 ? true : false}
        >
          FINISH CART
        </Button>
      </S.OrderDetails>
    </S.Wrapper>
  )
}

export default Cart
