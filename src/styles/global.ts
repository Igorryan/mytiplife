import { createGlobalStyle, keyframes } from 'styled-components'

const loadingOut = keyframes`
  from {
    width: 100vw;
  }

  to {
    width: 0vw;
  }
`

const scaleIn = keyframes`
  from {
    transform: scale(0)
  }
  to {
    transform: scale(1)
  }
`

const scaleOut = keyframes`
  from {
    transform: scale(1)
  }
  to {
    transform: scale(0)
  }
`

const GlobalStyles = createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   -webkit-font-smoothing: antialiased;
 }

 html {
   font-size: 62.5%;
 }

 html, body, #__next {
   height: 100%;
 }

 body {
   font-family: 'Roboto', sans-serif;
   -webkit-font-smoothing: antialiased;
   font-size: 14px;
   line-height: 22px;
 }

 h1, h2, h3, h4, h5, h6, strong, a {
   font-family: 'Rubik', sans-serif;
   font-weight: 500;
 }

 button {
      outline: none;
      border: none;
      font-family: 'Roboto', sans-serif;
      cursor:pointer;
 }

main  {
  transition: opacity 0.6s;
}


 .customScrollBar {
  &::-webkit-scrollbar {
    width: 6px; /* width of the entire scrollbar */
  }
  &::-webkit-scrollbar-track {
    background: #e3e3e3; /* color of the tracking area */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ffe066; /* color of the scroll thumb */
  }
 }

 .qrCode {
  border: 10px solid #fff;
      border-radius: 10px;
 }

 .loading {
   position: fixed;

   display: flex;
   align-items: center;
   justify-content: center;

   z-index: 16;
   overflow: hidden;

   width: 100vw;
   height: 100vh;

   background: #fff;

   img {
    width: 700px;
    transform: scale(0);

    animation: ${scaleIn} 0.4s ease forwards;
    animation-delay: 0.2s;
   }

   @media (max-width: 768px){
     img {
       margin-top: -150px;
       width: 100%;
     }
   }
 }

 .out {
  animation: ${loadingOut} .8s ease-in-out forwards;
  animation-delay: 0.2s;

  img {
    animation: ${scaleOut} 0.4s ease forwards;
  }

  @media (max-width: 768px){
    animation-duration: 0.6s;
   }
 }

`

export default GlobalStyles
