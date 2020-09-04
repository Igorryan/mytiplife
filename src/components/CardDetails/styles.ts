import styled from 'styled-components'

export const Wrapper = styled.main``

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 60px;
`

export const Carousel = styled.div`
  width: 500px;
  height: 30px;
`

export const Details = styled.div`
  width: 400px;
  margin-left: 30px;

  h1 {
    text-transform: uppercase;
    font-size: 26px;
    font-weight: 700;
    color: #153d57;
    margin-bottom: 30px;
  }

  p {
    font-size: 14px;
  }
`

export const UnitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 30px 0;
  border: 1px solid #e8e8e8;
  border-radius: 12px;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    border-bottom: 1px solid #e8e8e8;
    padding: 20px 40px;

    li {
      list-style: none;
    }

    input {
      cursor: pointer;
      display: none;
    }

    input[type='radio']:checked + label {
      font-weight: 500;
      color: #153d57;
    }

    input[type='radio']:checked + label:before {
      border: 1px solid #153d57;
      background: #153d57;
    }

    label {
      font-size: 20px;
      font-family: 'Rubik', sans-serif;
      margin-left: 8px;
      font-weight: 400;
      color: #bfbfbf;
      cursor: pointer;

      ::after {
        content: 'UN';
        font-size: 14px;
        margin-left: 2px;
      }

      ::before {
        content: ' ';
        position: absolute;
        border-radius: 50%;
        border: 1px solid #bfbfbf;
        width: 10px;
        height: 10px;
        font-size: 14px;
        margin-left: -18px;
        margin-top: 5px;
      }
    }
  }

  div {
    display: flex;
    padding: 20px 0;
    width: 80%;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 36px;
      font-family: 'roboto', sans-serif;
      font-weight: 700;
      color: #153d57;

      span {
        font-size: 25px;

        :first-child {
          margin-right: 5px;
          font-weight: 400;
        }
      }
    }

    button {
      width: 150px;
      height: 50px;

      background: #11cea2;
      border-radius: 9px;
      color: #fff;

      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 0.5px;
    }
  }
`

export const BackgoundColorsWrapper = styled.div``

export const ColorsWrapper = styled.div``

export const ColorOption = styled.div``

export const Info = styled.div``

export const UploadInfosWrapper = styled.div``
