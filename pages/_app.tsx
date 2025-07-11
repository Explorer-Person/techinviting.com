import type { AppProps } from 'next/app'
import '../styles/landing.css'
import '../styles/topics.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
