import styled from 'styled-components'

export const CardOption = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  width: 500px;
  height: 500px;
  margin: 10px;

  box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.1);
  transition: all 1s;

  cursor: pointer;

  div.img {
    background: url('/img/profile_example_big_plastic2.png');
    background-size: cover;
    height: 60%;
  }

  div.color {
    display: flex;
    position: relative;

    height: 40%;
    transition: 1s;
  }

  .qrCode {
    position: absolute;

    width: 24rem;
    height: 24rem;

    margin-top: -4rem;
    margin-left: 2rem;
  }

  .logoCard {
    position: absolute;
    right: 0;

    margin: 2rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    color: #fff;

    position: absolute;
    bottom: 14.5rem;
    left: 30rem;

    width: 15.8rem;
    height: 3.2rem;

    padding-top: 0.5rem;
    border-radius: 50rem;
  }

  h2 {
    font-size: 3.5rem;
    line-height: 3.5rem;
    font-weight: 900;
    text-transform: uppercase;
    word-wrap: break-word;
    color: #fff;

    position: absolute;
    left: 30rem;
    bottom: 10rem;

    width: 19rem;
    height: 5rem;
  }
`
