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
  totalCartValue: number
  isOpen: number
  addProduct(product: IProductToCart): void
  removeProduct(product_id: string): void
  openCart(): void
  closeCart(): void
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

  // 0 - close
  // 1 - open
  // 2 - init
  const [open, setOpen] = useState(2)

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

    localStorage.setItem(
      '@MyTipLife:infos',
      JSON.stringify({
        name: product.name,
        job: product.job
      })
    )

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

  const openCart = useCallback(() => {
    setOpen(1)
    opacityInMainsElements(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const closeCart = useCallback(() => {
    setOpen(0)
    opacityInMainsElements(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const opacityInMainsElements = useCallback(
    (active: boolean) => {
      const opacity = active ? '0.5' : '1'

      const mains = document.querySelectorAll('main')
      mains &&
        mains.forEach((main) => {
          main.style.opacity = opacity
          active
            ? main.addEventListener('click', closeCart)
            : main.removeEventListener('click', closeCart)
        })
    },
    [closeCart]
  )

  return (
    <CartContext.Provider
      value={{
        products: data,
        totalCartValue,
        isOpen: open,
        addProduct,
        removeProduct,
        openCart,
        closeCart
      }}
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

export { CartProvider, useCart }
