import styled from 'styled-components'

export const CardOption = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;

  width: 500px;
  height: 380px;
  margin: 10px;

  position: relative;

  box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.1);
  transition: all 1s;
  background-size: cover;
  background-position: center;
  cursor: pointer;

  div:nth-child(1) {
    width: 50%;
    height: 100%;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    right: 0;
    width: 50%;
    height: 100%;
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
