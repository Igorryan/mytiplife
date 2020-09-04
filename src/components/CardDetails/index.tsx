import * as S from './styles'
import { useState, useCallback, useEffect, useRef } from 'react'

const CardDetails = () => {
  const inputNameRef = useRef<HTMLInputElement>(null)
  const inputJobRef = useRef<HTMLInputElement>(null)

  const [cardPrice, setCardPrice] = useState(12)
  const [quantity, setQuantity] = useState(0)
  const [total, setTotal] = useState(0)
  const [name, setName] = useState('')
  const [job, setJob] = useState('')
  const [color, setColor] = useState(1)
  const [formCompleted, setFormCompleted] = useState(false)

  useEffect(() => {
    setTotal(quantity * cardPrice)
  }, [quantity, cardPrice])

  useEffect(() => {
    if (name && job && total) setFormCompleted(true)
    else setFormCompleted(false)
  }, [name, job, total])

  const handleChangeSelectedQuantity = useCallback((quantitySelected) => {
    setQuantity(quantitySelected)
  }, [])

  const handleInsertName = useCallback(() => {
    if (inputNameRef.current) {
      setName(inputNameRef.current.value)
    }
  }, [])

  const handleInsertJob = useCallback(() => {
    if (inputJobRef.current) {
      setJob(inputJobRef.current.value)
    }
  }, [])

  const handleColorSelected = useCallback((colorSelected) => {
    setColor(colorSelected)
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

          <S.CustomizationsWrapper>
            <S.BackgoundColorsWrapper>
              <h3>Custom Background</h3>
              <S.ColorsWrapper>
                <S.ColorOption
                  onClick={() => handleColorSelected(1)}
                  selected={color === 1 ? true : false}
                  style={{ background: '#59C398' }}
                />
                <S.ColorOption
                  onClick={() => handleColorSelected(2)}
                  selected={color === 2 ? true : false}
                  style={{ background: '#59A5E5' }}
                />
                <S.ColorOption
                  onClick={() => handleColorSelected(3)}
                  selected={color === 3 ? true : false}
                  style={{ background: '#CF5289' }}
                />
                <S.ColorOption
                  onClick={() => handleColorSelected(4)}
                  selected={color === 4 ? true : false}
                  style={{ background: '#FCCA4C' }}
                />
                <S.ColorOption
                  onClick={() => handleColorSelected(5)}
                  selected={color === 5 ? true : false}
                  style={{ background: '#FCCA4C' }}
                />
                <S.ColorOption
                  onClick={() => handleColorSelected(6)}
                  selected={color === 6 ? true : false}
                  style={{ background: '#FCCA4C' }}
                />
              </S.ColorsWrapper>
            </S.BackgoundColorsWrapper>

            <S.UploadInfosWrapper>
              <div>
                <h3>Your informations</h3>
                <input
                  ref={inputNameRef}
                  placeholder="Your name"
                  onChange={handleInsertName}
                  type="text"
                />
                <input
                  ref={inputJobRef}
                  placeholder="Your job"
                  onChange={handleInsertJob}
                  type="text"
                />
              </div>
            </S.UploadInfosWrapper>
          </S.CustomizationsWrapper>

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
                <span>$</span>
                {total}
                <span>.0</span>
              </h2>
              <S.AddToCartButton disabled={!formCompleted}>
                Add to cart
              </S.AddToCartButton>
            </div>
          </S.UnitsWrapper>
        </S.Details>
      </S.Section>
    </S.Wrapper>
  )
}

export default CardDetails
