import styled from 'styled-components'

export const CardOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  width: 500px;
  height: 380px;
  margin: 10px;

  position: relative;

  box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.1);
  transition: all 1s;
  background-position: center;
  background-size: cover;

  cursor: pointer;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    right: 0;
    width: 46%;
    height: 87%;
    border-radius: 3rem;
    margin-right: 5%;
  }

  h2 {
    text-transform: uppercase;
    font-weight: 900;
    color: #fff;
  }

  p {
    color: #fff;
    font-weight: 600;
  }

  .qrCode {
    width: 18rem;
    margin: 2rem 0;
  }

  .logoCard {
    margin-top: 1rem;
  }
`
