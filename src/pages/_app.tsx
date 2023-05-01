import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'

// Font Awesome setup
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// Custom font setup
const playPretend = localFont({ src: './fonts/play_pretend.woff2', variable: '--font-pp',})

export default function App({ Component, pageProps }: AppProps) {
  return <main className={playPretend.variable}>
    <Component {...pageProps} />
  </main>
}
