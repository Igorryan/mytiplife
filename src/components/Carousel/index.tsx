import * as S from './styles'
import $ from 'jquery'

import { useCallback, useState } from 'react'
import React from 'react'

const Carousel: React.FC = ({ children }) => {
  const [current, setCurrent] = useState(0)

  //Transformando children em array
  const childrenArray = React.Children.toArray(children)

  const handleChangeComponent = useCallback(
    (currentIndex: number) => {
      const move = (index: number): number => {
        switch (index) {
          case 0:
            return 0
          case 1:
            return 382
          case 2:
            return 802
          case 3:
            return 1222
          case 4:
            return 1642
          case 5:
            return 2062
          case 6:
            return 2442
          default:
            return 0
        }
      }

      if (currentIndex === current) {
        console.log('next')
        $('.thumbs').css('transform', `translateX(-${move(current + 1)}px)`)
        const newCurrent = current === 6 ? 0 : current + 1
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

      console.log({ current })
    },
    [current]
  )

  return (
    <S.Wrapper>
      <div className="slider">
        <div className="thumbs">
          {childrenArray.map((element, i) => {
            return (
              <div
                key={i}
                style={{
                  opacity: current === i ? 1 : 0.4,
                  overflow: 'hidden'
                }}
                className="cardContainer"
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
