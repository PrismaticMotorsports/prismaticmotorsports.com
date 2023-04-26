import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'

const playPretend = localFont({ src: './fonts/play_pretend.woff2', variable: '--font-pp',})

export default function App({ Component, pageProps }: AppProps) {
  return <main className={playPretend.variable}>
    <Component {...pageProps} />
  </main>
}
