import * as S from 'styles/OrderHistory/styles'
import { format } from 'date-fns'

import Header from 'components/Header'
import Footer from 'components/Footer'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { useToast } from 'hooks/toast'
import { useAuth } from 'hooks/auth'
import { useCart } from 'hooks/cart'
import getIntegerAndFractionalValues from 'utils/getIntegerAndFractionalValues'
import Redirect from 'utils/Redirect'
import Products from 'data/Products'
import api from 'services/api'

interface ProductsProps {
  quantity: number
  product_id: number
  unit_price: number
}

interface Order {
  request_number: string
  total_price: string
  created_at: string
  products: ProductsProps[]
  fulfilled_at: string | null
  delivery_date: string
  address: {
    id: number
    location: string
    complete_address: string
    type: string
    floor?: string
    how_to_reach?: string
  }
}

const OrderHistory = () => {
  const { addToast } = useToast()
  const { isAuthenticated } = useAuth()
  const { products } = useCart()

  const [filter, setFilter] = useState('All orders')
  const [ordersFromAPI, setOrdersFromAPI] = useState<Order[]>([])

  const GetProductTitle = useCallback((id) => {
    const product = Products.find((p) => p.id === id)

    if (!product) return

    return product.title
  }, [])

  const GetDateByDeliveryDate = useCallback((delivery_date: string) => {
    const [, month, day] = delivery_date.split('/')

    return `${day}/${month}`
  }, [])

  useEffect(() => {
    if (!isAuthenticated()) {
      addToast({
        type: 'error',
        title: 'You need to log in again',
        description: 'We will redirect you',
        timer: true
      })

      setTimeout(() => {
        window.location.href = '/Sign'
      }, 3500)
    }
  }, [addToast, isAuthenticated, products.length])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(async () => {
    if (!localStorage) return

    const token = localStorage.getItem('@MyTipLife:token')

    if (!token) return

    const response = await api.get('/order', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    setOrdersFromAPI(response.data)
    console.log(response.data)
  }, [])

  const orders = useMemo(() => {
    if (filter === 'All orders') return ordersFromAPI
    if (filter === 'Fulfilled')
      return ordersFromAPI.filter((order) => order.fulfilled_at !== null)

    if (filter === 'In progress')
      return ordersFromAPI.filter((order) => order.fulfilled_at === null)

    return ordersFromAPI
  }, [filter, ordersFromAPI])

  return (
    <S.Wrapper>
      <Header />

      <S.Section>
        <S.SectionHeader>
          <h1>Order History</h1>

          <S.FiltersWrapper>
            <S.Filter
              selected={filter === 'All orders'}
              onClick={() => setFilter('All orders')}
              color="#003d59"
            >
              All orders
            </S.Filter>
            <S.Filter
              selected={filter === 'In progress'}
              onClick={() => setFilter('In progress')}
              color="#F7971E"
            >
              In progress
            </S.Filter>
            <S.Filter
              selected={filter === 'Fulfilled'}
              onClick={() => setFilter('Fulfilled')}
              color="#51BB8D"
            >
              Fulfilled
            </S.Filter>
          </S.FiltersWrapper>
        </S.SectionHeader>

        {orders.map((order, i) => (
          <S.Order
            style={{ animationDelay: `${i / 5}s` }}
            key={order.request_number}
          >
            <S.OrderHeader
              status={order.fulfilled_at ? 'Fulfilled' : 'In progress'}
            >
              <div>
                <h2>Order #{order.request_number}</h2>
                <p>
                  {format(
                    new Date(order.created_at),
                    `'Placed on' MMMM',' dd yyyy 'at' hh':'mm aaaa`
                  )}
                </p>
              </div>

              {order.address.type && (
                <div>
                  <h2>Shipping Address</h2>
                  <p
                    className="addressTag"
                    onClick={() => {
                      Redirect('Addresses')
                    }}
                  >
                    {order.address.type}
                  </p>
                </div>
              )}
            </S.OrderHeader>

            <S.OrderBodyWrapper>
              <S.PriceWrapper
                status={order.fulfilled_at ? 'Fulfilled' : 'In progress'}
              >
                <ul>
                  {order.products.map((p, i) => (
                    <li
                      style={{ background: i % 2 === 0 ? '#F5F5F5' : '#fff' }}
                      key={i}
                    >
                      <a href="#">
                        {p.quantity} x {GetProductTitle(p.product_id)} ($
                        {getIntegerAndFractionalValues(p.unit_price).fullValue})
                      </a>
                      <span>
                        $
                        {
                          getIntegerAndFractionalValues(
                            p.unit_price * p.quantity
                          ).fullValue
                        }
                      </span>
                    </li>
                  ))}
                </ul>

                <div>
                  <span>
                    {order.fulfilled_at !== null
                      ? format(
                          new Date(order.fulfilled_at),
                          `'Fulfilled' MMMM dd',' yyyy`
                        )
                      : 'In Progress'}
                    <br />
                    {!order.fulfilled_at ? (
                      <label>
                        Your order will arrive by day{' '}
                        {GetDateByDeliveryDate(order.delivery_date)}
                      </label>
                    ) : (
                      ''
                    )}
                  </span>
                  <p>
                    Total: <strong>${order.total_price}</strong> USD
                  </p>
                </div>
              </S.PriceWrapper>
              <S.AddressWrapper>
                <div>
                  <p>{order.address.location}</p>
                  <p>{order.address.complete_address}</p>
                  <p>{order.address?.floor}</p>
                  <p>{order.address?.how_to_reach}</p>
                </div>
              </S.AddressWrapper>
            </S.OrderBodyWrapper>
          </S.Order>
        ))}
      </S.Section>

      <Footer />
    </S.Wrapper>
  )
}

export default OrderHistory
