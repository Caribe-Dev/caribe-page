import Head from 'next/head'
import { Header } from '@/components/Header'
import { FormaDJRMicro, Raleway } from '@/utils/fonts'

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
    </main>
  )
}
