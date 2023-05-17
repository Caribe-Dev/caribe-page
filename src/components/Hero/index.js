import { Icon } from '@/components/Icon'
import { Layout } from '@/components/Layout'

import CloudsImage from '../../../public/images/clouds.svg'
import SunImage from '../../../public/images/sun.svg'
import HighWaveImage from '../../../public/images/high-wave.svg'
import SmallWaveImage from '../../../public/images/small-wave.svg'
import LeftMountainImage from '../../../public/images/left-mountain.svg'
import RightMountainImage from '../../../public/images/right-mountain.svg'
import LeftPalmsImage from '../../../public/images/left-palms.svg'
import RightPalmsImage from '../../../public/images/right-palms.svg'

export function Hero () {
  return (
    <section className='h-[75vh] md:h-screen bg-primary-hero relative'>
      <div className='hidden md:flex absolute justify-center top-[30%] md:top-0 left-0 right-0 w-full'>
        <CloudsImage className='w-[100%]' />
      </div>
      <div className='absolute flex justify-center top-[30%] md:top-10% left-0 right-0 w-full'>
        <CloudsImage className='w-[100%]' />
      </div>
      <div className='absolute flex justify-center bottom-0 left-0 right-0 w-full'>
        <HighWaveImage className='w-[100%] h-[130px] md:h-auto' />
      </div>
      <div className='absolute flex justify-center bottom-0 left-0 right-0 w-full'>
        <SmallWaveImage className='w-[100%] h-[120px] md:h-auto'  />
      </div>
      <div className='absolute flex justify-center bottom-0 left-0 right-0 w-full'>
        <SunImage className='w-[80%] md:w-[50%]' />
      </div>
      <div className='absolute flex bottom-0 left-0 right-0 w-full'>
        <LeftMountainImage className='w-[50%] md:w-[40%]' />
      </div>
      <div className='absolute flex justify-end bottom-0 left-0 right-0 w-full'>
        <RightMountainImage className='w-[50%] md:w-[52%]' />
      </div>
      <div className='absolute flex justify-start -bottom-[20%] left-0 right-0 w-full'>
        <LeftPalmsImage className='w-[30%] z-[1] md:w-[22%]' />
      </div>
      <div className='absolute flex justify-end -bottom-[20%] left-0 right-0 w-full'>
        <RightPalmsImage className='w-[25%] z-[1] md:w-[22%]' />
      </div>
      <Layout className='flex items-center flex-col z-1 relative pt-[100px] md:pt-[140px]'>
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
        <p className='mt-[20px] text-[25px] text-tertiary text-center'>
          CaribeDev: Primer encuentro de Comunidades Tec!
        </p>
        <span className='text-[20px] text-tertiary'>🇨🇴 Barranquilla, Colombia</span>
        <a
          className='bg-secondary py-[12px] px-[45px] rounded-2xl text-[20px] text-tertiary font-bold mt-4'
          href='https://www.eventbrite.co/e/caribedev-encuentro-de-comunidades-tec-tickets-626659845467'
          target='_blank'
        >
          Inscríbete
        </a>
      </Layout>
    </section>
  )
}
