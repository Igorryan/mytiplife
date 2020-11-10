import styled from 'styled-components'

export const Wrapper = styled.main`
  overflow-x: hidden;
  transition: opacity 0.4s;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 170px;
  }

  @media (max-width: 1092px) {
    section {
      flex-direction: column;
    }
  }
`
