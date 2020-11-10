import * as S from './styles'
import { VscArrowLeft } from 'react-icons/vsc'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useCart, handleCloseCart } from '../../hooks/cart'
import { useAuth } from 'hooks/auth'
import { motion } from 'framer-motion'
import { useCallback } from 'react'
import Redirect from 'utils/Redirect'
import getIntegerAndFractionalValues from 'utils/getIntegerAndFractionalValues'

const Cart: React.FC = () => {
  const { products, removeProduct, totalCartValue } = useCart()
  const { username } = useAuth()

  const handleFinishCart = useCallback(() => {
    const toRoute = username ? 'FinishCart' : 'Sign'
    Redirect(toRoute)
  }, [username])

  return (
    <S.Wrapper id="cart">
      <header>
        <div>
          <button onClick={handleCloseCart}>
            <VscArrowLeft size={25} color="#fff" />
          </button>
          <h1>Your cart</h1>
        </div>
        <img src="/img/cartHeaderIllustration.svg" alt="" />
      </header>

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
          onClick={handleFinishCart}
        >
          <button>FINISH CART</button>
        </motion.div>
      </footer>
    </S.Wrapper>
  )
}

export default Cart
