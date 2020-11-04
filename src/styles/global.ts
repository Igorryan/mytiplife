import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 html {
   font-size: 62.5%
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




`

export default GlobalStyles
