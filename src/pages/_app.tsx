import { Header } from '../components/Header'
import { SessionProvider  } from 'next-auth/react'
import '../styles/global.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
    <Header />
    <Component {...pageProps} />
    </SessionProvider>
  )
}