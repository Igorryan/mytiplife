import styled, { css } from 'styled-components'
import { Form } from '@unform/web'

interface ILocationTagProps {
  selected?: boolean
  available?: boolean
}

export const Wrapper = styled(Form)`
  margin: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 40px;
    margin-bottom: 45px;
  }

  div {
    width: 100%;

    p {
      font-size: 12px;
      color: #a9a9a9;
      margin-left: 30px;
    }
  }

  button {
    border-radius: 8px;
    background: #11cea2;
    color: #fff;
    height: 45px;
    font-size: 16px;
    font-weight: 900;
    margin-top: 20px;
    width: 100%;
  }
`

export const LocationsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 20px;
  margin-top: 15px;

  @media (max-width: 400px) {
    transform: scale(0.9);
    margin-left: -10px;
  }
`

export const LocationTag = styled.div<ILocationTagProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  text-transform: uppercase;
  color: #003d59;
  font-weight: 700;
  font-size: 12px;
  border-radius: 200px;
  border: 1px solid #003d59;
  padding: 0.5px 30px 0.5px 15px;
  margin: 3px;

  &:after {
    content: '';
    position: absolute;
    width: 10px;
    border: 2px solid #003d59;
    height: 10px;
    border-radius: 50%;
    margin-right: 7px;
    right: 0;
  }

  ${({ available }) =>
    available &&
    css`
      background: #003d59;
      color: #fff;

      &:after {
        border: 1px solid #fff;

        background-size: cover;
        width: 11px;
        height: 11px;
      }
    `}

  ${({ selected }) =>
    selected &&
    css`
      &:after {
        border: none;
        background: url(/img/done.svg);
        background-size: cover;
        width: 13px;
        height: 13px;
      }
    `}
`
