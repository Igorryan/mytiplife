import * as S from './styles'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Addresses = () => (
  <S.Wrapper>
    <Header />
    <S.Section>
      <S.SectionHeader>
        <h1>My Account | Addresses</h1>
      </S.SectionHeader>

      <S.Addresses>
        <S.Address>
          <header>Home</header>

          <div className="addressDescription">
            <p>
              160 Gordon rd - 302
              <br />
              Valley Stream, NY 11581-3430
              <br />
              United States
              <br />+ 1 5166683742
            </p>
          </div>

          <div className="buttonsWrapper">
            <button>EDIT</button>
            <button>Delete</button>
          </div>
        </S.Address>
        <S.Address>
          <header>Work</header>

          <div className="addressDescription">
            <p>
              160 Gordon rd - 302
              <br />
              Valley Stream, NY 11581-3430
              <br />
              United States
              <br />+ 1 5166683742
            </p>
          </div>

          <div className="buttonsWrapper">
            <button>EDIT</button>
            <button>Delete</button>
          </div>
        </S.Address>
        <S.Address>
          <header>Office</header>

          <div className="addressDescription">
            <p>
              160 Gordon rd - 302
              <br />
              Valley Stream, NY 11581-3430
              <br />
              United States
              <br />+ 1 5166683742
            </p>
          </div>

          <div className="buttonsWrapper">
            <button>EDIT</button>
            <button>Delete</button>
          </div>
        </S.Address>
        <S.Address>
          <header>Other</header>

          <div className="addressDescription">
            <p>
              160 Gordon rd - 302
              <br />
              Valley Stream, NY 11581-3430
              <br />
              United States
              <br />+ 1 5166683742
            </p>
          </div>

          <div className="buttonsWrapper">
            <button>EDIT</button>
            <button>Delete</button>
          </div>
        </S.Address>
      </S.Addresses>
    </S.Section>
    <Footer />
  </S.Wrapper>
)

export default Addresses
