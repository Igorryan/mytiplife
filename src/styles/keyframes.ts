import { keyframes } from 'styled-components'

export const swingInTopFwd = keyframes`
  0% {
    transform: rotateX(-100deg);
    transform-origin: top;
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
`
export const rollInBlurredLeft = keyframes`
  0% {
    transform: translateX(-1000px) rotate(-720deg);
    filter: blur(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0) rotate(0deg);
    filter: blur(0);
    opacity: 1;
  }
  `
export const flipInHorTop = keyframes`
  0% {
    transform: rotateX(-80deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0);
    opacity: 1;
  }
  `

export const slitInHorizontal = keyframes`
  0% {
    transform: translateZ(-800px) rotateX(90deg);
    opacity: 0;
  }
  54% {
    transform: translateZ(-160px) rotateX(87deg);
    opacity: 1;
  }
  100% {
    transform: translateZ(0) rotateX(0);
  }
  `
