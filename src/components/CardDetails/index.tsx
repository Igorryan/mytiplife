import * as S from './styles'
import { useState, useCallback } from 'react'

const CardDetails = () => {
  const [quantity, setQuantity] = useState(0)

  const handleChangeSelectedQuantity = useCallback((quantitySelected) => {
    setQuantity(quantitySelected)
  }, [])

  return (
    <S.Wrapper>
      <S.Section>
        <S.Carousel></S.Carousel>
        <S.Details>
          <h1>Sticker Card</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam,
          </p>

          <S.UnitsWrapper>
            <ul>
              <li>
                <input
                  onClick={() => handleChangeSelectedQuantity(100)}
                  type="radio"
                  id="oneHundred"
                  name="quantityCard"
                  value="100"
                />
                <label htmlFor="oneHundred">100</label>
              </li>
              <li>
                <input
                  onClick={() => handleChangeSelectedQuantity(500)}
                  type="radio"
                  id="fiveHundred"
                  name="quantityCard"
                  value="500"
                />
                <label htmlFor="fiveHundred">500</label>
              </li>
              <li>
                <input
                  onClick={() => handleChangeSelectedQuantity(1000)}
                  type="radio"
                  id="thousand"
                  name="quantityCard"
                  value="1000"
                />
                <label htmlFor="thousand">1000</label>
              </li>
            </ul>
            <div>
              <h2>
                <span>$</span>1200.<span>65</span>
              </h2>
              <button>Add to cart</button>
            </div>
          </S.UnitsWrapper>

          <S.BackgoundColorsWrapper>
            <h3>Custom Background</h3>
            <S.ColorsWrapper>
              <S.ColorOption>#59C398</S.ColorOption>
              <S.ColorOption>#59A5E5</S.ColorOption>
              <S.ColorOption>#CF5289</S.ColorOption>
              <S.ColorOption>#FCCA4C</S.ColorOption>
            </S.ColorsWrapper>
            <S.Info>?</S.Info>
          </S.BackgoundColorsWrapper>

          <S.UploadInfosWrapper>
            <div className="fieldWrapper">
              <h3>Custom Name</h3>
              <input placeholder="Your name" type="text" />
            </div>
            <div className="fieldWrapper">
              <h3>Custom Job</h3>
              <input placeholder="Your job" type="text" />
            </div>
            <button>Upload</button>
          </S.UploadInfosWrapper>
        </S.Details>
      </S.Section>
    </S.Wrapper>
  )
}

export default CardDetails
