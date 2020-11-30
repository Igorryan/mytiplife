import { keyframes, css } from 'styled-components'

export interface IAnimations {
  animation:
    | 'fadeOutLeft'
    | 'fadeInRight'
    | 'fadeOutRight'
    | 'fadeInLeft'
    | 'flipInHorBottom'
    | 'slitInHorizontal'
}

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

export const flipInHorBottomPrimary = keyframes`
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
export const swingOutTopBckAnimation = css`
  animation: ${swingOutTopBck} 0.45s cubic-bezier(0.6, -0.28, 0.735, 0.045) both;
`

export const slitInHorizontal = {
  keyframe: keyframes`
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
`,
  animation: '0.9s ease-out both'
}

const slideInBlurredRight = keyframes`
  0% {
    transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
    transform-origin: 0% 50%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateX(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
}
`
export const slideInBlurredRightAnimation = css`
  animation: ${slideInBlurredRight} 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
`

const slideInBlurredLeft = keyframes`
  0% {
    transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
    transform-origin: 100% 50%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateX(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
`
export const slideInBlurredLeftAnimation = css`
  animation: ${slideInBlurredLeft} 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
`

const scaleIn = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`
export const scaleInAnimation = css`
  animation: ${scaleIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`

const slideInBckCenter = keyframes`
  0% {
    -webkit-transform: translateZ(600px);
            transform: translateZ(600px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
`
export const slideInBckCenterAnimation = css`
  -webkit-animation: ${slideInBckCenter} 0.7s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: ${slideInBckCenter} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`

const flipInHorBottom = keyframes`
  0% {
    transform: rotateX(80deg);
    opacity: 0;
  }
  100% {
    transform: rotateX(0);
    opacity: 1;
  }

}
`
export const flipInHorBottomAnimation = css`
  animation: ${flipInHorBottom} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`

const swingInTopFwd = keyframes`
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
}
`
export const swingInTopFwdAnimation = css`
  -webkit-animation: ${swingInTopFwd} 0.5s
    cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  animation: ${swingInTopFwd} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
`

const bounceInFwd = keyframes`
0% {
    transform: scale(0);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: scale(1);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: scale(0.7);
    animation-timing-function: ease-in;
  }
  72% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
  81% {
    transform: scale(0.84);
    animation-timing-function: ease-in;
  }
  89% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
  95% {
    transform: scale(0.95);
    animation-timing-function: ease-in;
  }
  100% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
}
`
export const bounceInFwdAnimation = css`
  -webkit-animation: ${bounceInFwd} 1.1s both;
  animation: ${bounceInFwd} 1.1s both;
`

const slideInBlurredTop = keyframes`
  0% {
    transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    transform-origin: 50% 0%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
}
`
export const slideInBlurredTopAnimation = css`
  -webkit-animation: ${slideInBlurredTop} 1.1s both;
  animation: ${slideInBlurredTop} 1.1s both;
`

const slideOutBlurredRight = keyframes`
  0% {
    transform: translateX(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;

  }
  100% {
    transform: translateX(1000px) scaleX(2) scaleY(0.2);
    transform-origin: 0% 50%;
    filter: blur(40px);
    opacity: 0;
  }
}
`
export const slideOutBlurredRightAnimation = css`
  animation: ${slideOutBlurredRight} 0.45s
    cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
`

const slideOutBlurredLeft = keyframes`
  0% {
    transform: translateX(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-1000px) scaleX(2) scaleY(0.2);
    transform-origin: 100% 50%;
    filter: blur(40px);
    opacity: 0;
  }
}
`
export const slideOutBlurredLeftAnimation = css`
  animation: ${slideOutBlurredLeft} 0.45s cubic-bezier(0.755, 0.05, 0.855, 0.06)
    both;
`

const flip2HorTop1 = keyframes`
  0% {
    transform: translateY(0) rotateX(0);
    transform-origin: 50% 0%;
  }
  100% {
    transform: translateY(-100%) rotateX(-180deg);
    transform-origin: 50% 100%;
  }
}
`
export const flip2HorTop1Animation = css`
  animation: ${flip2HorTop1} 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
`
