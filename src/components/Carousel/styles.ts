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
  transition: transform 0.2s;

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

  @media (max-width: 1092px) {
    transform: scale(1.1);
    margin-top: 20px;
    margin-bottom: 80px;
  }

  @media (max-width: 720px) {
    transform: scale(0.8);
    margin-top: -60px;
    margin-bottom: 0px;
  }

  @media (max-width: 500px) {
    transform: scale(0.6);
    margin-top: -150px;
    margin-bottom: -80px;
  }
`
