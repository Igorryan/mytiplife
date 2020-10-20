import styled from 'styled-components'

const mobile = 620

export const Wrapper = styled.main`
  position: fixed;
  width: 520px;
  height: 100vh;
  right: 0;

  z-index: 13;

  background: #fff;
  transition: all 0.2s;
  filter: drop-shadow(-3px 38px 59px rgba(0, 0, 0, 0.1));

  display: none;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 35px;
    height: 70px;

    background: #ffa340;

    div {
      display: flex;
      align-items: center;

      h1 {
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        margin-left: 20px;
        margin-bottom: -3px;
      }
    }

    ::before {
      content: '';
      position: absolute;
      width: 125px;
      height: 150px;
      background: url(/img/boy_holding_coin.svg) no-repeat;
      background-size: contain;
      top: 24px;
      left: -74px;

      @media (max-width: ${mobile}px) {
        display: none;
      }
    }
  }

  ul {
    li {
      display: flex;

      padding: 20px 25px;
      border-bottom: 2px solid #f5f5f5;

      img {
        height: 150px;
      }

      .description {
        margin-left: 25px;
        margin-top: 15px;

        header {
          display: flex;
          justify-content: space-between;

          h1 {
            font-size: 16px;
            text-transform: uppercase;
            font-weight: 700;
            color: #153d57;
          }

          strong {
            font-size: 16px;
            font-weight: 700;
            color: #153d57;

            span {
              font-size: 10px;
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

          font-size: 12px;
          line-height: 16px;
        }

        div {
          display: flex;
          align-items: center;
          justify-content: space-between;

          margin-top: 30px;

          strong {
            font-family: 'Roboto', sans-serif;
            font-size: 36px;
            font-weight: 700;
            color: #153d57;

            span {
              font-size: 24px;

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

  @media (max-width: ${mobile}px) {
    height: 100%;
    width: 100%;
    bottom: 0;

    border-radius: 75px 75px 0 0;
  }
`
