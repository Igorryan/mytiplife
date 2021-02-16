import * as S from './styles'
import { FiArrowLeft } from 'react-icons/fi'
import { IOrderData } from 'pages/FinishCart'
import getIntegerAndFractionalValues from 'utils/getIntegerAndFractionalValues'
import { useMemo, useState } from 'react'

interface IFinishedProps {
  orderData: IOrderData
}

const Finished: React.FC<IFinishedProps> = ({ orderData }) => {
  const [deliveryDay, setDeliveryDay] = useState('')

  useMemo(() => {
    const [, , day] = orderData.deliveryDate.split('/')
    setDeliveryDay(day)
  }, [orderData])

  return (
    <S.Wrapper>
      <div>
        <h1>Thank you for shopping with my tip life</h1>

        <S.OrderDetail>
          <img width={24} src="/img/user_icon.svg" alt="" />
          <div>
            <span>Username</span>
            <p>{orderData.username}</p>
          </div>
        </S.OrderDetail>

        <S.OrderDetail>
          <img width={24} src="/img/calendar_icon.svg" alt="" />
          <div>
            <span>Delivery date {orderData.deliveryDate}</span>
            <p>Your order will arrive by day {deliveryDay}</p>
          </div>
        </S.OrderDetail>

        <S.OrderDetail>
          <img width={24} src="/img/requestnumber_icon.svg" alt="" />
          <div>
            <span>Request Number</span>
            <p>{orderData.requestNumber}</p>
          </div>
        </S.OrderDetail>

        <S.OrderDetail>
          <img height={28} src="/img/dollar_icon.svg" alt="" />
          <div>
            <span>Cart Total</span>
            <p>
              $ {getIntegerAndFractionalValues(orderData.cartTotal).fullValue}
            </p>
          </div>
        </S.OrderDetail>

        <a href="/">
          <FiArrowLeft style={{ marginRight: 20, marginLeft: -20 }} />
          Back to home
        </a>
      </div>
      <img src="/img/finished_illustration.svg" alt="" />
    </S.Wrapper>
  )
}

export default Finished
