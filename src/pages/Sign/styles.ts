import styled from 'styled-components'

export const Wrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fcfcfc;
    border-bottom: 1px solid #eeeeee;
    height: 130px;
    width: 100%;
    overflow: hidden;

    img {
      width: 800px;
    }
  }

  section {
    display: flex;
    margin: 60px 0;

    .divisor {
      width: 1.5px;
      background: rgba(225, 225, 225, 0.4);
      margin: 0 70px;
    }

    @media (max-width: 750px) {
      flex-direction: column;

      .divisor {
        width: 100%;
        height: 2px;
        margin: 50px 0;
      }
    }
  }
`
