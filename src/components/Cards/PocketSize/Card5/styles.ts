import styled from 'styled-components'

export const CardOption = styled.div`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  width: 400px;
  border-radius: 5px;
  height: 520px;
  float: left;
  position: relative;
  transition: all 1s;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  padding: 2rem;
  background: url('/img/profile_example.png');

  div.background {
    position: absolute;
    bottom: 0;
    border-radius: 0 0 5px 5px;
    left: 0;

    width: 100%;
    height: 11rem;
  }

  div.logoWrapper {
    width: 100%;
    img {
    }
  }

  div.infoWrapper {
    display: flex;
    text-align: right;
    position: relative;

    img {
      width: 18rem;
    }

    div.infos {
      width: 100%;
      bottom: 0;
      position: absolute;
      h2 {
        text-transform: uppercase;
        font-weight: 900;
        font-size: 2.5rem;
        color: #fff;
      }

      p {
        margin-top: 0.5rem;
        color: #fff;
        font-size: 2rem;
        font-weight: 500;
      }
    }
  }
`
