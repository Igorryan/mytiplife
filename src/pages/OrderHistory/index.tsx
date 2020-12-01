import * as S from './styles'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { VscArrowRight } from 'react-icons/vsc'

const OrderHistory = () => (
  <S.Wrapper>
    <Header />

    <S.Section>
      <S.SectionHeader>
        <h1>My Account | Order History</h1>

        <S.FiltersWrapper>
          <S.Filter color="#003d59">All orders</S.Filter>
          <S.Filter selected color="#F7971E">
            In progress
          </S.Filter>
          <S.Filter color="#51BB8D">Fulfilled</S.Filter>
        </S.FiltersWrapper>
      </S.SectionHeader>

      <S.Order>
        <S.OrderHeader>
          <div>
            <h2>Order #0001</h2>
            <p>Placed on November, 16 2020 at 12:00 am</p>
          </div>

          <div>
            <h2>Shipping Address</h2>
            <p className="addressTag">Home</p>
          </div>
        </S.OrderHeader>

        <S.OrderBodyWrapper>
          <S.PriceWrapper>
            <ul>
              <li style={{ background: '#F5F5F5' }}>
                <a href="#">2 x 600 Sticker Card ($23.00)</a>
                <span>$46.00</span>
              </li>
              <li>
                <a href="#">2 x 600 Sticker Card ($23.00)</a>
                <span>$46.00</span>
              </li>
            </ul>

            <div>
              <span>
                In progress
                <br />
                <label>Your order will arrive by day X</label>
              </span>
              <p>
                Total: <strong>$92.00</strong> USD
              </p>
            </div>
          </S.PriceWrapper>
          <S.AddressWrapper>
            <div>
              <p>
                160 Gordon rd - 302
                <br />
                Valley Stream, NY 11581-3430
                <br />
                United States
                <br />+ 1 5166683742
              </p>
            </div>

            <a href="/Addresses">
              <p>View Addresses (2) </p>
              <VscArrowRight size={20} color="#9b9b9b" />
            </a>
          </S.AddressWrapper>
        </S.OrderBodyWrapper>
      </S.Order>

      <S.Order>
        <S.OrderHeader
          style={{
            background: 'linear-gradient(90deg, #56AB2F 0%, #A8E063 100%);'
          }}
        >
          <div>
            <h2>Order #0001</h2>
            <p>Placed on November, 16 2020 at 12:00 am</p>
          </div>

          <div>
            <h2>Shipping Address</h2>
            <p className="addressTag">Home</p>
          </div>
        </S.OrderHeader>

        <S.OrderBodyWrapper>
          <S.PriceWrapper>
            <ul>
              <li style={{ background: '#F5F5F5' }}>
                <a href="#">2 x 600 Sticker Card ($23.00)</a>
                <span>$46.00</span>
              </li>
              <li>
                <a href="#">2 x 600 Sticker Card ($23.00)</a>
                <span>$46.00</span>
              </li>
            </ul>

            <div>
              <span>Fulfilled November 20, 2020</span>
              <p>
                Total: <strong>$92.00</strong> USD
              </p>
            </div>
          </S.PriceWrapper>
          <S.AddressWrapper>
            <div>
              <p>
                160 Gordon rd - 302
                <br />
                Valley Stream, NY 11581-3430
                <br />
                United States
                <br />+ 1 5166683742
              </p>
            </div>

            <a href="/Addresses">
              <p>View Addresses (2) </p>
              <VscArrowRight size={18} color="#9b9b9b" />
            </a>
          </S.AddressWrapper>
        </S.OrderBodyWrapper>
      </S.Order>
    </S.Section>

    <Footer />
  </S.Wrapper>
)

export default OrderHistory
