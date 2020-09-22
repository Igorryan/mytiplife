import styled, { css } from 'styled-components'

interface ICarouselProps {
  cardFocusWidth: number
  cardFocusHeight: number
}

export const Wrapper = styled.div<ICarouselProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3rem;

  .slider {
    overflow: hidden;
  }
  .slider .thumbs {
    display: flex;
    align-items: center;
    position: relative;
    height: 580px;
    width: max-content;
    transition: transform 1s;
  }

  .slider .thumbs div.cardContainer {
    float: left;
    transition: opacity 1s;
    margin-bottom: 10px;

    &.active .card {
      ${({ cardFocusHeight, cardFocusWidth }) =>
        css`
          width: ${cardFocusWidth}px;
          height: ${cardFocusHeight}px;
        `};
    }
  }
`
