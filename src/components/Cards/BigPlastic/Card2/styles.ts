import styled from 'styled-components'

export const CardOption = styled.div`
  display: flex;

  width: 500px;
  height: 500px;
  margin: 10px;

  position: relative;

  box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.1);
  transition: all 1s;

  background: url('/img/profile_example_big_plastic.png');
  background-size: cover;

  cursor: pointer;

  svg {
    position: absolute;
    bottom: 8rem;
    right: 3.5rem;
  }

  svg.bottomMask {
    right: 5.8rem;
    bottom: 4.7rem;
  }

  .maskBackground {
    bottom: 28.5rem;
    right: 7.1rem;
    z-index: 2;

    p {
      font-size: 2rem;
      text-align: center;
      font-weight: 600;

      position: absolute;
      bottom: 37.3rem;
      right: 7.1rem;

      width: 15.8rem;
      height: 3.2rem;

      padding-top: 0.5rem;
      border-radius: 50rem;
      background: #ffe066;
    }

    h2 {
      font-size: 2.5rem;
      line-height: 2.5rem;
      font-weight: 900;
      text-align: center;
      text-transform: uppercase;
      color: #fff;

      position: absolute;
      bottom: 29.8rem;
      right: 7.5rem;

      width: 14rem;
      height: 5rem;

      word-wrap: break-word;
    }

    .qrCode {
      position: absolute;

      width: 11rem;

      right: 9rem;
      bottom: 18rem;
    }

    .logoCard {
      position: absolute;

      width: 10rem;

      right: 9.5rem;
      bottom: 10.5rem;
    }
  }
`
