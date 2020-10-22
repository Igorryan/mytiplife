import * as S from './styles'
import { VscArrowLeft } from 'react-icons/vsc'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useMemo } from 'react'
import getFractionalNumber from '../../utils/getFractionalNumber'
import { useCart, handleCloseCart } from '../../hooks/cart'
import { motion } from 'framer-motion'

const Cart: React.FC = () => {
  const { products, removeProduct } = useCart()

  const totalCartValue = useMemo(() => {
    let total = 0

    products &&
      products.forEach((p) => {
        total += p.total
      })

    return total
  }, [products])

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
              <img src="/img/example_productCardImage.png" alt="" />
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
                    {Math.trunc(total)}
                    <span>.{getFractionalNumber(total)}</span>
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
            {Math.trunc(totalCartValue)}
            <span>.{getFractionalNumber(totalCartValue)}</span>
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
          <button>FINISH CART</button>
        </motion.div>
      </footer>
    </S.Wrapper>
  )
}

export default Cart
