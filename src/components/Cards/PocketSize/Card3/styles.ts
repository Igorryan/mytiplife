import styled from 'styled-components'

export const CardOption = styled.div`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  width: 400px;
  height: 520px;
  border-radius: 3px;
  position: relative;
  transition: all 1s;
  border-radius: 5px;
  cursor: pointer;

  div.imageUploaded {
    position: absolute;
    z-index: 0;
    width: 40rem;
    height: 46rem;

    background-image: url('/img/profile_example.png');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px 5px 0 0;
    background-position: center;
  }

  div.content {
    padding: 1rem;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    transition: background-color 0.2s;

    img.logoCard {
      position: absolute;
      margin-left: 235px;
      bottom: 2rem;
    }

    div.wrapper {
      display: flex;
      flex-direction: row;
      z-index: 1;
      position: absolute;
      bottom: 0;

      img.qrCode {
        width: 20rem;
        height: 20rem;
        margin-right: 1.5rem;
        margin-bottom: 1rem;
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
