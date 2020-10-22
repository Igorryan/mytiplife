import * as S from './styles'
import $ from 'jquery'

import { useCallback } from 'react'
import React from 'react'

interface ICarouselProps {
  width: number
  sliderWidth: number
  cardFocusWidth?: number
  cardFocusHeight?: number
  currentCard: number
  setCurrentCard: (currentCard: number) => void
}

const Carousel: React.FC<ICarouselProps> = ({
  children,
  width,
  sliderWidth,
  cardFocusWidth = 400,
  cardFocusHeight = 565,
  currentCard,
  setCurrentCard
}) => {
  //Transformando children em array
  const childrenArray = React.Children.toArray(children)

  const handleChangeComponent = useCallback(
    (currentIndex: number) => {
      const move = (index: number): number => {
        const _91percentComponentWidth = (91 * width) / 100

        if (index === 1) {
          return _91percentComponentWidth
        }

        if (index === 0 || index > childrenArray.length - 1) {
          return 0
        }

        return _91percentComponentWidth + (index - 1) * width
      }

      if (currentIndex === currentCard) {
        $('.thumbs').css('transform', `translateX(-${move(currentCard + 1)}px)`)
        const newCurrent =
          currentCard === childrenArray.length - 1 ? 0 : currentCard + 1
        setCurrentCard(newCurrent)
        return
      }

      if (currentIndex < currentCard) {
        $('.thumbs').css('transform', `translateX(-${move(currentIndex)}px)`)
      }

      if (currentIndex > currentCard) {
        $('.thumbs').css('transform', `translateX(-${move(currentIndex)}px)`)
      }

      setCurrentCard(currentIndex)
    },
    [currentCard, childrenArray, width, setCurrentCard]
  )

  return (
    <S.Wrapper
      cardFocusHeight={cardFocusHeight}
      cardFocusWidth={cardFocusWidth}
      style={{ width: sliderWidth }}
    >
      <div style={{ width: sliderWidth }} className="slider">
        <div className="thumbs">
          {childrenArray.map((element, i) => {
            return (
              <div
                key={i}
                className={`cardContainer ${
                  currentCard === i ? 'active' : 'disabled'
                }`}
                onClick={() => {
                  handleChangeComponent(i)
                }}
              >
                {element}
              </div>
            )
          })}
        </div>
      </div>
    </S.Wrapper>
  )
}

export default Carousel
