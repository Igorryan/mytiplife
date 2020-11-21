import styled from 'styled-components'

export const CardOption = styled.div`
  width: 400px;
  height: 520px;
  position: relative;
  overflow: hidden;

  div.content {
    padding: 1rem;
    width: 100%;
    height: 80%;
    transition: background-color 0.2s;

    background-position: center;
    background-size: cover;

    img.logoCard {
      position: absolute;
      background: transparent;
      margin-left: 237px;
      bottom: 2.3rem;
    }

    div.wrapper {
      display: flex;
      flex-direction: row;
      position: absolute;
      bottom: 0;
      background: transparent;

      .qrCode {
        width: 20rem !important;
        height: 20rem !important;
        background: transparent;
        margin-right: 1.5rem;
        margin-bottom: 1rem;
      }

      div.info-wrapper {
        flex-direction: column;
        background: transparent;
        justify-content: space-between;

        div.infos {
          margin-top: 0.5rem;
          flex-direction: column;
          width: 150px;
          word-wrap: break-word;

          h2 {
            margin-top: 1.5rem;
            background: transparent;

            text-transform: uppercase;
            font-weight: 900;
            font-size: 2.5rem;
            color: #fff;

            overflow: hidden;
            height: 44px;
          }

          p {
            color: #fff;
            background: transparent;
            font-size: 2rem;
            font-weight: 500;
            margin-top: 0.5rem;

            overflow: hidden;
            height: 23px;
          }
        }
      }
    }
  }
`
