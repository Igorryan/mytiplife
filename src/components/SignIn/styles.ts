import styled from 'styled-components'

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;

  h1 {
    font-size: 24px;
    margin-bottom: 30px;
    margin-left: 30px;
  }

  label {
    margin-left: 30px;
    margin-bottom: 5px;

    font-family: 'Rubik', sans-serif;
    font-size: 12px;
    color: #a9a9a9;
  }

  input {
    font-family: 'Rubik', sans-serif;
    color: #153d57;
    font-size: 12px;
    font-weight: 600;
    border: 1px solid #e8e8e8;

    height: 45px;
    padding: 0 30px;
    border-radius: 12px;
    margin-bottom: 20px;
  }

  a.terms {
    text-decoration: none;
    color: #5e5e5e;
    font-size: 12px;
    font-weight: 400;
    text-align: center;

    width: 80%;
    margin: 0 auto 20px;

    span {
      font-weight: 600;
      color: #ff7300;
    }
  }

  button {
    border-radius: 12px;
    background: #11cea2;
    color: #fff;
    height: 45px;
    font-size: 16px;
    font-weight: 900;
    margin-bottom: 20px;
  }

  a.forgotPassword {
    font-size: 12px;
    text-align: right;
    margin-right: 30px;
    color: #153d57;
  }
`
