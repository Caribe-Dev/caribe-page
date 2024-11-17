import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import { FormaDJRMicro, Raleway } from '@/utils/fonts'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'


import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <main className='min-h-screen'>
      <Head>
        <title>Caribe Dev</title>

      </Head>
      <style jsx global>{`
        :root {
          --raleway-font: ${Raleway.style.fontFamily};
          --formaDJRMicro-font: ${FormaDJRMicro.style.fontFamily};
        }
      `}</style>
      <Header />
      <Component {...pageProps} />
      <ScrollToTop />
      <Footer />
      <GoogleAnalytics gaId="G-6L5B79TZMT" />
      <GoogleTagManager gtmId="G-GRF4SF41QP" />
    </main>
  )
}
