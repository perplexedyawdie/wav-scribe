import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {

  return (
    <SessionProvider session={session}>
      <Head>
        <title>Wav Scribe</title>
        <meta name="description" content="Audio to text made easy with ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Component {...pageProps} />
    </SessionProvider>
  )
}
