import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;

  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const SpinnerAnimation = styled.img`
  width: 40px;
  height: 40px;
`

export const Button = styled.button`
  width: 100%;
  height: 45px;

  background: #11cea2;
  border-radius: 12px;

  font-size: 16px;
  font-weight: 900;
  color: #fff;

  transition: 0.7s ease;

  &:hover {
    transform: scale(1.05);
  }

  ${(props) =>
    props.disabled &&
    css`
      background: rgba(0, 0, 0, 0.3);
      cursor: auto;

      &:hover {
        transform: scale(1);
      }
    `}
`
