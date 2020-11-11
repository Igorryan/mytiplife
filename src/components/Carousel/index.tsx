import * as S from './styles'

import { useCallback, useState } from 'react'
import React from 'react'

interface ICarouselProps {
  sliderWidth: number
  positions: number[]
  current: number
  setCurrent(current: number): void
}

const Carousel: React.FC<ICarouselProps> = ({
  children,
  sliderWidth,
  positions,
  current,
  setCurrent
}) => {
  const childrenArray = React.Children.toArray(children)

  const [elementFocused, setElementFocused] = useState(current)

  const handleChangeElementFocused = useCallback(
    (element: number) => {
      if (element === elementFocused && element === childrenArray.length - 1) {
        setElementFocused(0)
        setCurrent(0)

        return
      }

      if (element === elementFocused) {
        handleChangeElementFocused(element + 1)
        return
      }

      setElementFocused(element)
      setCurrent(element)
    },
    [childrenArray.length, elementFocused, setCurrent]
  )

  return (
    <S.Wrapper style={{ width: sliderWidth }}>
      <S.Elements position={positions[elementFocused]}>
        {childrenArray.map((element, i) => {
          return (
            <S.ElementWrapper
              key={i}
              onClick={() => handleChangeElementFocused(i)}
              isFocused={elementFocused === i}
            >
              {element}
            </S.ElementWrapper>
          )
        })}
      </S.Elements>
    </S.Wrapper>
  )
}

export default Carousel
