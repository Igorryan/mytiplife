import styled from 'styled-components'

export const Wrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

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
