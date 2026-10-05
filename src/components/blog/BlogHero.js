import classNames from 'classnames'

import { Layout } from '@/components/Layout'
import SunImage from '../../../public/images/sun.svg'
import CloudsImage from '../../../public/images/clouds.svg'
import RightPalmsImage from '../../../public/images/right-palms.svg'

export function BlogHero({ eyebrow = 'Nuestro Blog', title, highlight, compact = false }) {
  return (
    <section
      className='relative overflow-hidden bg-blog-hero'
    >
      <div aria-hidden='true' className='absolute top-[12%] left-0 right-0 opacity-10 [&_path]:fill-tertiary'>
        <CloudsImage className='w-full' />
      </div>
      <div aria-hidden='true' className='absolute bottom-[40px] md:bottom-[60px] left-0 right-0 flex justify-center'>
        <SunImage className={classNames('[&_path]:fill-[#F6AE6B]', compact ? 'w-[50%] md:w-[20%]' : 'w-[70%] md:w-[30%]')} />
      </div>
      <div
        aria-hidden='true'
        className={classNames('absolute -bottom-[4%] right-0 [&_path]:fill-green-300', compact ? 'w-[24%] md:w-[10%]' : 'w-[34%] md:w-[16%]')}
      >
        <RightPalmsImage className='w-full h-auto' />
      </div>
      <svg
        aria-hidden='true'
        className='absolute bottom-0 left-0 w-full h-[90px] md:h-[160px] fill-green-300'
        viewBox='0 0 1440 160'
        preserveAspectRatio='none'
      >
        <path d='M0 20C120 10 260 60 360 110C470 160 560 150 640 130C760 100 860 90 980 110C1110 130 1260 60 1440 40V160H0Z' />
      </svg>

      <Layout
        className={classNames('relative z-10 flex flex-col items-center px-4 text-center', {
          'pt-[120px] pb-[200px] md:pt-[180px] md:pb-[280px]': !compact,
          'pt-[110px] pb-[140px] md:pt-[130px] md:pb-[170px]': compact,
        })}
      >
        <p className='font-formaDJRMicro font-medium text-lg md:text-xl text-white'>{eyebrow}</p>
        <h1 className='mt-4 max-w-4xl text-[36px] md:text-[64px] leading-[1.05] text-aqua'>
          {title}
          {highlight && (
            <>
              <br />
              <span className='text-orange'>{highlight}</span>
            </>
          )}
        </h1>
      </Layout>
    </section>
  )
}
