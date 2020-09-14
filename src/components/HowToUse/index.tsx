import * as S from './styles'

const HowToUse = () => (
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
        src="/img/howtouse1.png"
        alt="waitress taking an order. She is wearing her mytiplife badge around her neck."
      />
      <img
        src="/img/howtouse2.png"
        alt="waitress taking an order. She is wearing her mytiplife badge around her neck."
      />
      <img
        src="/img/howtouse3.png"
        alt="waitress taking an order. She is wearing her mytiplife badge around her neck."
      />
    </div>
  </S.Wrapper>
)

export default HowToUse
