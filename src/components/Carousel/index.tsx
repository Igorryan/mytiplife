import * as S from './styles'
import $ from 'jquery'

import { useCallback, useEffect, useState } from 'react'
import React from 'react'

interface ICarouselProps {
  width: number
  sliderWidth: number
  cardFocusWidth?: number
  cardFocusHeight?: number
}

const Carousel: React.FC<ICarouselProps> = ({
  children,
  width,
  sliderWidth,
  cardFocusWidth = 400,
  cardFocusHeight = 565
}) => {
  const [current, setCurrent] = useState(0)

  //Transformando children em array
  const childrenArray = React.Children.toArray(children)

  useEffect(() => {
    console.log(childrenArray[0])
  })

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

      if (currentIndex === current) {
        console.log('next')
        $('.thumbs').css('transform', `translateX(-${move(current + 1)}px)`)
        const newCurrent =
          current === childrenArray.length - 1 ? 0 : current + 1
        setCurrent(newCurrent)
        return
      }

      if (currentIndex < current) {
        console.log('prev')
        $('.thumbs').css('transform', `translateX(-${move(currentIndex)}px)`)
      }

      if (currentIndex > current) {
        console.log('next')
        $('.thumbs').css('transform', `translateX(-${move(currentIndex)}px)`)
      }

      setCurrent(currentIndex)
    },
    [current, childrenArray, width]
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
                  current === i ? 'active' : 'disabled'
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
