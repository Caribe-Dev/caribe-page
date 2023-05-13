import Head from 'next/head'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FormaDJRMicro, Raleway } from '@/utils/fonts'

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
      <Footer />
    </main>
  )
}
