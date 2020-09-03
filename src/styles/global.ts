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
 }

 h1, h2, h3, h4, h5, h6, strong, a {
   font-family: 'Rubik', sans-serif;
   font-weight: 500;
 }
`

export default GlobalStyles
