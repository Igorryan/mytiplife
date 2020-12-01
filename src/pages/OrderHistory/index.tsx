import * as S from './styles'
import { format } from 'date-fns'

import Header from 'components/Header'
import Footer from 'components/Footer'

import { useEffect, useMemo, useState } from 'react'
import { useToast } from 'hooks/toast'
import { useAuth } from 'hooks/auth'
import { useCart } from 'hooks/cart'
import getIntegerAndFractionalValues from 'utils/getIntegerAndFractionalValues'
import Redirect from 'utils/Redirect'
import { ILocationData } from 'components/DeliveryAddress'

interface ProductsProps {
  quantity: number
  name: string
  unitPrice: number
}

interface Order {
  orderNumber: string
  placedOn: Date
  products: ProductsProps[]
  status: 'Fulfilled' | 'In progress'
  orderArrival: Date
  address: ILocationData
}

const OrderHistory = () => {
  const { addToast } = useToast()
  const { isAuthenticated } = useAuth()
  const { products } = useCart()

  const [filter, setFilter] = useState('All orders')

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
  const ordersFromAPI: Order[] = [
    {
      orderNumber: '0001',
      placedOn: new Date(2020, 10, 16, 12),
      products: [
        {
          quantity: 600,
          name: 'Sticker Card',
          unitPrice: 23.32
        },
        {
          quantity: 2,
          name: 'Sticker Card',
          unitPrice: 23.32
        }
      ],
      status: 'In progress',
      orderArrival: new Date(2020, 10, 24, 12),
      address: {
        type: 'Home',
        location: '160 Gordon rd - 302',
        completeAddress: 'Valley Stream, NY 11581-3430'
      }
    },
    {
      orderNumber: '0002',
      placedOn: new Date(2020, 10, 27, 15, 12),
      products: [
        {
          quantity: 4,
          name: 'Big Plastic',
          unitPrice: 98.12
        },
        {
          quantity: 1,
          name: 'Sticker Card',
          unitPrice: 32
        }
      ],
      status: 'Fulfilled',
      orderArrival: new Date(2020, 11, 3, 9),
      address: {
        type: 'Work',
        location: '1230 American rw - 98',
        completeAddress: 'New Jersey, NJ 193817-2182',
        floor: 'Number',
        howToReach: 'Follow the street of the first restaurant'
      }
    }
  ]

  const orders = useMemo(() => {
    if (filter !== 'All orders') {
      return ordersFromAPI.filter((order) => order.status === filter)
    }

    return ordersFromAPI
  }, [filter, ordersFromAPI])

  return (
    <S.Wrapper>
      <Header />

      <S.Section>
        <S.SectionHeader>
          <h1>My Account | Order History</h1>

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

        {orders.map((order) => (
          <S.Order key={order.orderNumber}>
            <S.OrderHeader status={order.status}>
              <div>
                <h2>Order #{order.orderNumber}</h2>
                <p>
                  {format(
                    order.placedOn,
                    `'Placed on' MMMM',' dd yyyy 'at' hh':'mm aaaa`
                  )}
                </p>
              </div>

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
            </S.OrderHeader>

            <S.OrderBodyWrapper>
              <S.PriceWrapper status={order.status}>
                <ul>
                  {order.products.map((p, i) => (
                    <li
                      style={{ background: i % 2 === 0 ? '#F5F5F5' : '#fff' }}
                      key={i}
                    >
                      <a href="#">
                        {p.quantity} x {p.name} ($
                        {getIntegerAndFractionalValues(p.unitPrice).fullValue})
                      </a>
                      <span>
                        $
                        {
                          getIntegerAndFractionalValues(
                            p.unitPrice * p.quantity
                          ).fullValue
                        }
                      </span>
                    </li>
                  ))}
                </ul>

                <div>
                  <span>
                    {order.status === 'Fulfilled'
                      ? format(
                          order.orderArrival,
                          `'${order.status}' MMMM dd',' yyyy`
                        )
                      : order.status}
                    <br />
                    {order.status !== 'Fulfilled' ? (
                      <label>
                        Your order will arrive by day{' '}
                        {order.orderArrival.getDate()}
                      </label>
                    ) : (
                      ''
                    )}
                  </span>
                  <p>
                    Total:{' '}
                    <strong>
                      $
                      {order.products.reduce(
                        (acc, p) =>
                          acc.quantity * acc.unitPrice +
                          p.unitPrice * p.quantity
                      )}
                    </strong>{' '}
                    USD
                  </p>
                </div>
              </S.PriceWrapper>
              <S.AddressWrapper>
                <div>
                  <p>
                    {order.address.location}
                    <br />
                    {order.address.completeAddress}
                    <br />
                    {order.address?.floor}

                    <br />
                    {order.address?.howToReach}
                  </p>
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
