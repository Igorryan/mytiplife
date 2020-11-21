import styled from 'styled-components'

export const CardOption = styled.div`
  width: 400px;
  height: 520px;
  float: left;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  background-position: center;
  background-size: cover;

  padding: 2rem;

  div.background {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 11rem;
  }

  div.logoWrapper {
    width: 100%;
  }

  div.infoWrapper {
    display: flex;
    text-align: right;
    position: relative;

    .qrCode {
      width: 18rem !important;
      height: 18rem !important;
    }

    div.infos {
      width: 100%;
      bottom: 1rem;
      position: absolute;

      display: flex;
      flex-direction: column;
      align-items: flex-end;

      h2 {
        text-transform: uppercase;
        font-weight: 900;
        font-size: 2.5rem;
        color: #fff;
        height: 21px;

        width: 160px;
        overflow: hidden;
      }

      p {
        margin-top: 0.5rem;
        color: #fff;
        font-size: 2rem;
        font-weight: 600;
        height: 23px;

        width: 160px;
        overflow: hidden;
      }
    }
  }
`
