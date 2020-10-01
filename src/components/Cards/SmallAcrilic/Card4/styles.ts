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
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    right: 0;
    width: 42%;
    height: 80%;
    border-radius: 3rem;
    margin-right: 5%;

    svg.backgroundMask {
      position: absolute;
      z-index: 2;
    }

    svg.bottomMask {
      position: absolute;
      bottom: -2.2rem;
      z-index: 1;
    }
  }

  h2 {
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: 900;
    color: #fff;
    z-index: 3;
    margin-top: 1.5rem;
  }

  p {
    color: #151515;
    font-weight: 600;
    z-index: 4;
    text-align: center;
    background: #ffe066;
    width: 15.5rem;
    padding: 1rem 0;
    border-radius: 3rem;
    position: absolute;
    top: -2rem;
  }

  .qrCode {
    width: 16rem;
    margin: 2rem 0;
    z-index: 3;
  }

  .logoCard {
    z-index: 3;
  }
`
