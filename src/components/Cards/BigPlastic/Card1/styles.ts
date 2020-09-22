import styled from 'styled-components'

export const CardOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 500px;
  height: 500px;
  margin: 10px;

  position: relative;

  box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.1);
  transition: all 1s;

  cursor: pointer;

  h2 {
    color: #0b0b0b;
    font-size: 4rem;
    word-wrap: break-word;
    line-height: 3.5rem;
    text-align: center;
    width: 30rem;
    font-weight: 900;
    text-transform: uppercase;
    z-index: 1;
  }

  p {
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 0.5rem;
    margin-top: 0.2rem;
    font-size: 1.4rem;
    margin-bottom: 3rem;
    z-index: 1;
  }

  .qrCode {
    margin-bottom: 4rem;
    width: 23rem;
    z-index: 1;
  }

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 250px;
    top: 0;
    background: url('/img/mask05.svg');
    background-size: cover;
    background-position: 0%;
  }
`
