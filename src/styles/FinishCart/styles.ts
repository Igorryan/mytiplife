import styled, { css } from 'styled-components'
import {
  flipInHorBottomPrimary,
  swingOutTopBck,
  fadeOutLeft,
  fadeInRight,
  fadeOutRight,
  fadeInLeft
} from 'styles/keyframes'

interface IStageProps {
  progress: number
}

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: #f5f5f5;
  width: 100vw;
  overflow-x: hidden;
`

export const StagesFinishCartWrapper = styled.section`
  min-height: calc(100vh - 292px);
  width: 100%;
  display: flex;
  justify-content: center;
`

export const WrapperForAnimation = styled.div`
  animation-fill-mode: forwards;

  .flipInHorBottomPrimary {
    animation: ${flipInHorBottomPrimary} 0.5s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .swingOutTopBck {
    animation: ${swingOutTopBck} 0.45s cubic-bezier(0.6, -0.28, 0.735, 0.045)
      both;
  }
  .fadeOutLeft {
    animation: ${fadeOutLeft} 0.8s;
  }
  .fadeInRight {
    animation: ${fadeInRight} 0.8s;
  }
  .fadeOutRight {
    animation: ${fadeOutRight} 0.8s;
  }
  .fadeInLeft {
    animation: ${fadeInLeft} 0.8s;
  }
`

export const ProgressBar = styled.div<IStageProps>`
  background: #003d59;
  height: 45px;
  padding-top: 11px;
  width: 100%;

  ul {
    display: flex;
    justify-content: center;
    position: relative;

    width: 500px;
    height: 53px;
    margin: 0 auto;

    background: #003d59;
    border-radius: 200px;
    list-style: none;

    li {
      font-size: 14px;
      margin: 0 40px;
      text-transform: uppercase;
      color: #fff;
      transition: color 1s;
    }

    .bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      background: #fff;
      width: 60%;
      height: 1px;
      bottom: 17px;

      .circle {
        width: 9px;
        height: 9px;
        border-radius: 50%;
        border: 2px solid #fff;
        background: #003d59;
        z-index: 1;
        transition: background 1s;
      }

      .progressCompleted {
        position: absolute;
        background: #ffce00;
        height: 1px;
        transition: width 1s;
        width: 0%;
      }
    }

    ${({ progress }) => {
      if (progress === 1)
        return css`
          li:nth-of-type(1) {
            color: #ffce00;
            font-weight: 900;
          }

          .bar {
            .circle:nth-of-type(1) {
              background: #ffce00;
              border-color: #ffce00;
            }
          }
        `
      else if (progress === 2 || progress === 3) {
        return css`
          li:nth-of-type(1),
          li:nth-of-type(2) {
            color: #ffce00;
            font-weight: 700;
          }

          .bar {
            .circle:nth-of-type(1),
            .circle:nth-of-type(2) {
              background: #ffce00;
              border-color: #ffce00;
            }

            .progressCompleted {
              width: 50%;
            }
          }
        `
      } else if (progress === 4) {
        return css`
          li {
            color: #ffce00;
            font-weight: 700;
          }

          .bar {
            .circle {
              background: #ffce00;
              border-color: #ffce00;
            }

            .progressCompleted {
              width: 100%;
            }
          }
        `
      }
    }}
  }

  @media (max-width: 500px) {
    ul {
      width: 100%;
      border-radius: 0;

      .bar {
        width: 300px;
      }
    }
  }
`

export const DeliveryAddress = styled.form``
