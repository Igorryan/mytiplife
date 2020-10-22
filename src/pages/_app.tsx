import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

//Components
import Cart from 'components/Cart'

//Contexts
import { AuthProvider } from 'hooks/auth'
import { CartProvider } from 'hooks/cart'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
        <title>React Avançado - Boilerplate</title>
        <link rel="shortcut icon" href="/img/nextjs.png" />
        <link rel="apple-touch-icon" href="/img/nextjs.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Rubik:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyles />

      <AuthProvider>
        <CartProvider>
          <Cart></Cart>
          <Component {...pageProps} />
        </CartProvider>
      </AuthProvider>
    </>
  )
}

export default App
