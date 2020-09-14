import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 520px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3rem;

  .slider {
    width: 500px;
    overflow: hidden;
  }
  .slider .thumbs {
    display: flex;
    align-items: center;
    position: relative;
    height: 580px;
    width: max-content;
    transition: transform 1s;
  }

  .slider .thumbs div.cardContainer {
    float: left;
    transition: opacity 1s;
    margin-bottom: 10px;

    &.active .card {
      height: 565px;
    }
  }
`
