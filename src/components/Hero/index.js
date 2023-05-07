import Image from 'next/image'

import { Layout } from '@/components/Layout'

export function Hero () {
  return (
    <section className='h-screen'>
      <Layout className='flex justify-between items-center pb-20'>
        <div className='basis-[45%] text-white pb-16'>
          <h1 className='mb-5'>
            <span className='font-formaDJRMicro text-[52px] text-tertiary'>
              <span className='font-formaDJRMicro text-[60px] mr-1'>{'{'}</span>
              Caribe Dev
              <span className='font-formaDJRMicro text-[60px] ml-1'>{'}'}</span>
            </span>
            , la comunidad para los desarrolladores del Caribe Colombiano.
          </h1>
          <div className='flex gap-4'>
            <div className='flex border-2 rounded-md items-center border-white'>
              <div className='flex items-center h-full border-r-2 border-white px-3'>
                <Image
                  src='/images/calendar-icon.svg'
                  alt='Calendar logo'
                  width={32}
                  height={32}
                />
              </div>
              <div className='px-4 py-1'>
                <span className='block font-bold'>27 de Mayo, 2023 - 9AM - 12PM</span>
                <span className='block font-bold'>Barranquilla - Colombia 🇨🇴</span>
              </div>
            </div>
            <a href='123' className='flex basis-[140px] text-[18px] justify-center items-center rounded-md bg-tertiary px-6 py-1 font-bold hover:opacity-90'>
              Inscríbete
            </a>
          </div>
        </div>
        <div className='flex justify-between items-center basis-[45%] relative'>
          <div className='hero absolute z-0 top-0 right-0 bottom-0 left-0 opacity-30 bg-tertiary' />
          <Image
            className='relative z-1'
            src='/images/caribe-dev-hero.png'
            alt='Caribe Dev logo'
            width={500}
            height={500}
            style={{
              borderRadius: '50%'
            }}
          />
        </div>
      </Layout>
    </section>
  )
}
