import { Icon } from '@/components/Icon'
import { Layout } from '@/components/Layout'

import MobileHeroImage from '../../../public/images/mobile-hero.svg'

export function Hero () {
  return (
    <section className='h-screen relative'>
      <div className='hidden absolute md:block w-full top-0 h-[50%] bg-hero-1 bg-no-repeat sm:bg-cover md:bg-bottom lg:bg-[length:100%_100%]' />
      <div className='hidden absolute md:block w-full top-[50%] h-[50%] bg-hero-2 bg-no-repeat sm:bg-cover md:bg-center lg:bg-[length:100%_100%]' />

      <MobileHeroImage className='absolute md:hidden'  />
      <Layout className='flex items-center flex-col z-1 relative pt-[100px] md:pt-[200px]'>
        <h2 className='flex justify-center text-xl md:text-[48px] gap-3 text-tertiary font-bold'>
          <Icon
            icon='calendar'
            width={29}
            height={29}
          />
          <span>Mayo 27 | 9 AM - 12 PM</span>
        </h2>
        <h1 className='text-tertiary text-center text-[40px] md:text-[100px] max-w-[800px] mt-5 md:mt-10 leading-[95%]'>
          Esto es un evento bien bacano
        </h1>

        <p className='mt-[20px] text-[22px] text-tertiary text-center'>CaribeDev: Primer encuentro de Comunidades Tec!</p>
        <span className='text-[18px] text-tertiary'>🇨🇴 Barranquilla, Colombia</span>

        <a
          className='bg-secondary py-[12px] px-[45px] rounded-2xl text-[20px] text-tertiary font-bold mt-4'
          href='https://www.eventbrite.co/e/caribedev-encuentro-de-comunidades-tec-tickets-626659845467'
          target='_blank'
        >
          Inscribete
        </a>
      </Layout>
    </section>
  )
}
