import styled from 'styled-components'

export const CardOption = styled.div`
  div.imageUploaded {
    position: absolute;
    z-index: 0;
    width: 40rem;
    height: 46rem;

    background-image: url('/img/profile_example.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  div.content {
    padding: 1rem;
    width: 400px;
    height: 565px;
    transition: background-color 0.2s;

    img.logoCard {
      position: absolute;
      margin-left: 235px;
      margin-top: -73px;
    }

    div.wrapper {
      display: flex;
      flex-direction: row;
      z-index: 1;
      margin-top: 34.5rem;

      img.qrCode {
        width: 20rem;
        height: 20rem;
        margin-right: 1.5rem;

        z-index: 1;
      }

      div.info-wrapper {
        z-index: 1;

        flex-direction: column;
        justify-content: space-between;

        div.infos {
          margin-top: 0.5rem;
          flex-direction: column;
          width: 150px;
          word-wrap: break-word;

          h2 {
            margin-top: 1.5rem;

            text-transform: uppercase;
            font-weight: 900;
            font-size: 2.5rem;
            color: #fff;
          }

          p {
            color: #fff;
            font-size: 2rem;
            font-weight: 500;
            margin-top: 0.5rem;
          }
        }
      }
    }
  }
`
