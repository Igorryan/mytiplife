import styled, { css } from 'styled-components'
import InputMask from 'react-input-mask'

interface IInputProps {
  error?: number
}

export const Wrapper = styled.div`
  display: flex;
  margin: 80px 0;

  @media (max-width: 880px) {
    flex-direction: column;
  }
`

export const ProductsWrapper = styled.div`
  height: 540px;
  overflow: scroll;
  overflow-x: hidden;
  background: #fff;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  @media (max-width: 880px) {
    display: none;
  }

  ul {
    overflow-y: hidden;
    overflow-x: hidden;
    width: 500px;
    padding: 0 30px;
    /* margin-right: -50px;
    padding-right: 50px; */
    padding-top: 20px;

    li {
      display: flex;
      width: 400px;
      padding: 20px 0;
      border-bottom: 2px solid #f5f5f5;
      margin-left: 20px;
      img {
        height: 125px;
      }

      .description {
        margin-left: 25px;
        position: relative;

        header {
          display: flex;
          justify-content: space-between;

          h1 {
            font-size: 14px;
            text-transform: uppercase;
            font-weight: 700;
            color: #153d57;
          }

          strong {
            font-size: 14px;
            font-weight: 700;
            color: #153d57;
            position: relative;

            span {
              font-size: 8px;
            }

            ::before {
              content: ' ';
              position: absolute;
              border-radius: 50%;
              background: #153d57;
              width: 9px;
              height: 9px;
              font-size: 14px;
              margin-left: -16px;
              margin-top: 5.5px;
            }
          }
        }

        p {
          margin-top: 12px;

          font-size: 10px;
          line-height: 16px;
        }

        div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: absolute;
          margin-top: 15px;
          bottom: 0;
          width: 100%;

          strong {
            font-family: 'Roboto', sans-serif;
            font-size: 28px;
            font-weight: 700;
            color: #153d57;

            span {
              font-size: 20px;

              :first-of-type {
                font-weight: 400;
                margin-right: 5px;
              }
            }
          }

          button {
            display: flex;
            align-items: center;

            font-size: 14px;
            font-weight: 700;

            color: #d2d2d2;
            background: none;
          }
        }
      }
    }
  }
`

export const PaymentDetails = styled.form`
  width: 400px;
  padding: 30px;
  margin-left: 20px;

  h1 {
    font-size: 36px;
    margin-bottom: 50px;
  }

  div {
    position: relative;

    p {
      margin-top: 15px;
      font-size: 12px;
      color: #a9a9a9;
      margin-left: 30px;
      margin-bottom: 5px;
    }

    input {
      font-family: 'Rubik', sans-serif;
      border: 1px solid #e3e3e3;
      outline: none;
      border-radius: 8px;
      width: 100%;
      height: 60px;
      padding: 10px 30px 11px;
      color: #153d57;
      font-size: 16px;
      font-weight: 700;
      background: transparent;
      text-transform: capitalize;

      &:focus {
        border: none;
        outline: none;
        border: 1px solid #11cea2;
      }
    }

    > img {
      position: absolute;
      right: 17px;
      margin-top: 13.5px;
      border-radius: 6px;
      object-fit: contain;
    }
  }

  .inputGroup {
    display: flex;
    width: 100%;

    div:first-child {
      margin-right: 14px;
      width: 400px;
    }

    div:nth-of-type(2) {
      p {
        margin-left: 0;
        margin-right: 0;
        text-align: center;
      }
      input {
        text-align: center;
      }
    }
  }

  div.links {
    display: flex;
    flex: 1;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      cursor: pointer;
    }
  }

  @media (max-width: 880px) {
    width: 80vw;
    padding: 0px;
    margin-left: 0px;

    h1 {
      font-size: 32px;
    }
  }
`

export const RememberMyCardWrapper = styled.div`
  margin: 15px 0;
  input {
    display: none;
  }

  label {
    color: #b7b7b7;
    display: flex;
    align-items: center;
    padding: 10px 0;
    font-size: 12px;

    cursor: pointer;

    &::before {
      content: '';
      border-radius: 20px;
      width: 10px;
      height: 10px;
      margin-right: 14px;
    }
  }

  [type='checkbox']:checked + label:before {
    background: #e0821b;
    border: 3px solid #e0821b;
  }

  [type='checkbox']:not(:checked) + label:before {
    border: 3px solid #e0821b;
  }
`

export const Input = styled.input<IInputProps>`
  ${({ error }) =>
    error &&
    css`
      border-color: #c53030 !important;
    `}
`

export const InputWithMask = styled(InputMask)<IInputProps>`
  ${({ error }) =>
    error &&
    css`
      border-color: #c53030 !important;
    `}
`
