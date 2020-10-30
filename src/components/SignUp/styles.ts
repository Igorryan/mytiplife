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

  button {
    border-radius: 12px;
    background: #11cea2;
    color: #fff;
    height: 45px;
    font-size: 16px;
    font-weight: 900;
    margin-bottom: 20px;
  }
`
