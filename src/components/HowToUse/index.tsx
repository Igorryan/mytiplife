import * as S from './styles'

interface IProps {
  img1: string
  img2: string
  img3: string
}

const HowToUse: React.FC<IProps> = ({ img1, img2, img3 }) => (
  <S.Wrapper>
    <h1>How to use your sticker</h1>
    <img
      className="small_stars"
      src="/img/stars_mask.svg"
      alt="small stars illustration"
    />
    <img
      src="/img/waiter.svg"
      alt="waiter illustration"
      className="illustration_waiter"
    />
    <img
      src="/img/mask04.svg"
      alt="details of illustration"
      className="details_of_illustration"
    />

    <img src="/img/coin.svg" alt="coin illustration" className="coin1" />
    <img src="/img/coin.svg" alt="coin illustration" className="coin2" />
    <img src="/img/coin.svg" alt="coin illustration" className="coin3" />

    <div>
      <img
        src={img1}
        alt="waitress taking an order. She is wearing her mytiplife badge around her neck."
      />
      <img
        src={img2}
        alt="waitress taking an order. She is wearing her mytiplife badge around her neck."
      />
      <img
        src={img3}
        alt="waitress taking an order. She is wearing her mytiplife badge around her neck."
      />
    </div>
  </S.Wrapper>
)

export default HowToUse
