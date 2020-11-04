import styled, { css } from 'styled-components'

const cardSize = {
  pocket: css`
    width: 400px;
    height: 565px;
  `,
  small: css`
    width: 560px;
    height: 470px;
  `,
  big: css`
    width: 570px;
    height: 570px;
  `
}

interface CardWrapperProps {
  cardName: 'pocket' | 'small' | 'big'
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const CardWrapper = styled.div<CardWrapperProps>`
  &.active .card {
    ${(props) => cardSize[props.cardName]}
  }
`
