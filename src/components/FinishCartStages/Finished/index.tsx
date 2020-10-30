import * as S from './styles'
import { FiArrowLeft } from 'react-icons/fi'

const data = {
  name: 'Kelvin Rogeres Monteiro',
  deliveryData: 'Your order will arrive by day X',
  requestNumber: 'MKJ2345HQ',
  cartTotal: 400.23
}

const Finished = () => (
  <S.Wrapper>
    <div>
      <h1>Thank you for shopping with my tip life</h1>

      <S.OrderDetail>
        <img width={24} src="/img/user_icon.svg" alt="" />
        <div>
          <span>Name</span>
          <p>{data.name}</p>
        </div>
      </S.OrderDetail>

      <S.OrderDetail>
        <img width={24} src="/img/calendar_icon.svg" alt="" />
        <div>
          <span>Delivery date (00/00/00)</span>
          <p>{data.deliveryData}</p>
        </div>
      </S.OrderDetail>

      <S.OrderDetail>
        <img width={24} src="/img/requestnumber_icon.svg" alt="" />
        <div>
          <span>Request Number</span>
          <p>{data.requestNumber}</p>
        </div>
      </S.OrderDetail>

      <S.OrderDetail>
        <img height={28} src="/img/dollar_icon.svg" alt="" />
        <div>
          <span>Cart Total</span>
          <p>$ {data.cartTotal}</p>
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

export default Finished
