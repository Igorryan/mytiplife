import IProductToCart from 'DTOS/IProductsInCartDTO'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import Cart from 'components/Cart'

interface ICartContextData {
  products: IProductToCart[]
  addProduct(product: IProductToCart): void
  removeProduct(product_id: string): void
  totalCartValue: number
}

function addEventCloseCart() {
  handleCloseCart()
}

const opacityInMainsElements = (active: boolean) => {
  const opacity = active ? '0.5' : '1'

  const mains = document.querySelectorAll('main')
  mains &&
    mains.forEach((main) => {
      main.style.opacity = opacity
      active
        ? main.addEventListener('click', addEventCloseCart)
        : main.removeEventListener('click', addEventCloseCart)
    })
}

const handleCloseCart = () => {
  const cartElement = document.getElementById('cart')
  if (cartElement) cartElement.style.right = '-1200px'
  opacityInMainsElements(false)
}

const handleOpenCart = () => {
  const cartElement = document.getElementById('cart')
  if (cartElement) cartElement.style.right = '0'
  opacityInMainsElements(true)
}

function getStorage(): IProductToCart[] {
  const cartInStorage = localStorage.getItem('@MyTipLife:cart')

  if (cartInStorage) {
    const cartInStorageFormatted: IProductToCart[] = JSON.parse(cartInStorage)
    return cartInStorageFormatted
  } else {
    return []
  }
}

const CartContext = createContext<ICartContextData>({} as ICartContextData)

const CartProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IProductToCart[]>([])

  const totalCartValue = useMemo(() => {
    let total = 0

    data &&
      data.forEach((p) => {
        total += p.total
      })

    return total
  }, [data])

  useEffect(() => {
    const cartInStorage = localStorage.getItem('@MyTipLife:cart')

    if (cartInStorage) {
      const cartInStorageFormatted: IProductToCart[] = JSON.parse(cartInStorage)
      setData(cartInStorageFormatted)
    } else {
      setData([])
    }
  }, [])

  const addProduct = useCallback((product: IProductToCart) => {
    const cartInStorage = localStorage.getItem('@MyTipLife:cart')

    if (cartInStorage) {
      const cartInStorageFormatted: IProductToCart[] = JSON.parse(cartInStorage)
      cartInStorageFormatted.push(product)
      setData(cartInStorageFormatted)
      localStorage.setItem(
        '@MyTipLife:cart',
        JSON.stringify(cartInStorageFormatted)
      )
    } else {
      setData([product])
      localStorage.setItem('@MyTipLife:cart', JSON.stringify([product]))
    }
  }, [])

  const removeProduct = useCallback((product_id: string) => {
    const products = getStorage().filter((p) => p.id !== product_id)
    setData(products)
    localStorage.setItem('@MyTipLife:cart', JSON.stringify(products))
  }, [])

  return (
    <CartContext.Provider
      value={{ products: data, addProduct, removeProduct, totalCartValue }}
    >
      <Cart></Cart>

      {children}
    </CartContext.Provider>
  )
}

function useCart(): ICartContextData {
  const context = useContext(CartContext)

  return context
}

export { CartProvider, useCart, handleCloseCart, handleOpenCart }
