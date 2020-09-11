import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 520px;
  position: relative;

  .slider {
    width: 500px;
    overflow: hidden;
    margin-top: -10px;
  }
  .slider .thumbs {
    position: relative;
    height: 565px;
    width: max-content;
    transition: transform 1s;
  }

  .slider .thumbs div.cardContainer {
    float: left;
    transition: opacity 1s;
  }

  .slider .thumbs div.card {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.1);
    margin: 10px;
    border-radius: 3px;
    float: left;
    position: relative;
    transition: all 1s;
  }

  div.card {
    cursor: pointer;
  }
`
