import * as S from './styles'
import lottie from 'lottie-web'

import { VscArrowLeft } from 'react-icons/vsc'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useCart } from '../../hooks/cart'
import { useAuth } from 'hooks/auth'
import { motion } from 'framer-motion'
import { useCallback, useEffect, useRef } from 'react'
import Redirect from 'utils/Redirect'
import getIntegerAndFractionalValues from 'utils/getIntegerAndFractionalValues'
import AnimationData from '../../../public/animations/coin-jump.json'

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
      <header>
        <div>
          <button onClick={closeCart}>
            <VscArrowLeft size={25} color="#fff" />
          </button>
          <h1>Your cart</h1>
        </div>
        <img src="/img/cartHeaderIllustration.svg" alt="" />
      </header>

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

      <ul>
        {products &&
          products.map(({ id, product, total, quantity }, i) => (
            <li key={i}>
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
                  <button onClick={() => removeProduct(id)}>
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

      <footer>
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
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          style={{
            position: 'relative',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '20px 0'
          }}
        >
          <S.BtnFinishCart
            onClick={handleFinishCart}
            disabled={products.length === 0 ? true : false}
          >
            FINISH CART
          </S.BtnFinishCart>
        </motion.div>
      </footer>
    </S.Wrapper>
  )
}

export default Cart
