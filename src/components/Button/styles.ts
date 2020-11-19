import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SpinnerAnimation = styled.img`
  width: 40px;
  height: 40px;
`

export const Button = styled.button`
  border-radius: 12px;
  background: #11cea2;
  color: #fff;
  height: 45px;
  font-size: 16px;
  font-weight: 900;
  width: 100%;

  ${(props) =>
    props.disabled &&
    css`
      background: rgba(0, 0, 0, 0.3);
      cursor: auto;
    `}
`
