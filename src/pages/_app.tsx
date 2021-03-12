import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

//Components
import AppProvider from 'hooks'
import { useEffect, useState } from 'react'

function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    const documentLoadedInterval = setInterval(() => {
      if (document.readyState === 'complete') {
        clearInterval(documentLoadedInterval)
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      }
    }, 1000)
  }, [])

  return (
    <>
      <Head>
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
        <title>MyTipLife</title>
        <link rel="shortcut icon" href="/img/favicon3.svg" />
        <link rel="apple-touch-icon" href="/img/favicon3.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Rubik:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyles />
      <div className={`loading ${!loading && 'out'}`}>
        <img src="/animations/coin-loader.gif" alt="coin loader" />
      </div>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}

export default App
