import styled, { css } from 'styled-components'

interface ICardWrapper {
  sending: boolean
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const CardWrapper = styled.div<ICardWrapper>`
  display: none;

  ${(props) =>
    props.sending &&
    css`
      display: flex;
    `}
`
