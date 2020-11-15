import { keyframes } from 'styled-components'

export interface IAnimations {
  animation:
    | 'fadeOutLeft'
    | 'fadeInRight'
    | 'fadeOutRight'
    | 'fadeInLeft'
    | 'flipInHorBottom'
    | 'swingOutTopBck'
}

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

export const fadeOutLeft = keyframes`
  0% {
    margin-left: 0;
    opacity: 1;
  }

  100% {
    margin-left: -600px;
    opacity: 0;
  }
`

export const fadeInRight = keyframes`
  0% {
    margin-right: -600px;
    opacity: 0;
  }

  100% {
    margin-right: 0px;
    opacity: 1;
  }
`

export const fadeOutRight = keyframes`
  0% {
    margin-right: 0;
    opacity: 1;
  }

  100% {
    margin-right: -600px;
    opacity: 0;
  }
`

export const fadeInLeft = keyframes`
  0% {
    margin-left: -600px;
    opacity: 0;
  }

  100% {
    margin-left: 0px;
    opacity: 1;
  }
`

export const flipInHorBottom = keyframes`
  0% {
    transform: rotateX(80deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0);
    opacity: 1;
  }
`
//animation: flip-in-hor-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

export const swingOutTopBck = keyframes`
  0% {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }
  100% {
    transform: rotateX(-100deg);
    transform-origin: top;
    opacity: 0;
  }
`
//animation: swing-out-top-bck 0.45s cubic-bezier(0.600, -0.280, 0.735, 0.045) both;
