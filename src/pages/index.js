import Image from 'next/image'

import { Hero } from '@/components/Hero'
import { Seo } from '@/components/Seo'
import { Layout } from '@/components/Layout'
import { Community } from '@/components/Community'
import { Avatar } from '@/components/Avatar'
import { Carousel } from '@/components/Carousel'
import { Schedule } from '@/components/Schedule'

import allCommunities from '@/all-communities'
import allOrganizers from '@/all-organizers'
import schedule from '@/schedule'

import ReflectedSunImage from '../../public/images/reflected-Sun.svg'
import ReflectedClouldsImage from '../../public/images/reflected-cloulds.svg'
import OrangeBlockImage from '../../public/images/orange-block.svg'
import GreenBlockImage from '../../public/images/green-block.svg'

const { communities } = allCommunities
const { organizers } = allOrganizers
const { talks } = schedule

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN

export default function Home() {
  return (
    <>
      <Seo
        title='Caribe Dev'
        description='Caribe Dev, la comunidad para los desarrolladores del Caribe Colombiano.'
        image={`${DOMAIN}/images/caribe-dev-hero.png`}
      />
      <Hero />
      <section id='communities' className='bg-secondary-hero relative -mt-[20px] md:-mt-[34px] pb-[30px]'>
        <div className='absolute flex justify-center top-0 left-0 right-0 w-full'>
          <ReflectedSunImage className='w-[76%] md:w-[49%]' />
        </div>
        <div className='md:flex absolute justify-center md:top-0 left-0 right-0 w-full'>
          <ReflectedClouldsImage className='w-[100%] z-0' />
        </div>
        <Layout className='relative md:pt-16'>
          <div className='flex w-full justify-center'>
            <div className='w-[80%] mt-10 z-[2]'>
              <Carousel>
                {
                  communities.map(({ website, ...rest }) => {
                    return (
                      <Community
                        className='mx-auto'
                        key={website}
                        website={website}
                        { ...rest }
                      />
                    )
                  })
                }
              </Carousel>
            </div>
          </div>
          <h2 id='organizers' className='text-[35px] md:text-[60px] mt-20 text-tertiary'>Organizadores</h2>
          <div className='flex flex-wrap justify-center items-center pt-[50px]'>
            {
              organizers.map(({ name, image, social }) => {
                return (
                  <div className='flex justify-center basis-[20%] mb-12' key={name}>
                    <Avatar name={name} image={image} social={social} />
                  </div>
                )
              })
            }
          </div>
          <div className='pt-2 flex justify-center'>
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSfsFK6t_FUBsbCWExXtDIWkBiquEQTMAnB8NNdxdKB8e5VBRw/viewform'
              className='text-tertiary text-[20px] justify-center items-center rounded-2xl bg-secondary px-[60px] py-[25px] font-bold hover:opacity-90'
              target='_blank'
            >
              Haz parte del equipo
            </a>
          </div>
        </Layout>
      </section>
      <section id='agend' className='relative overflow-hidden bg-block-grandient'>
        <div className='absolute flex justify-center w-full'>
          <OrangeBlockImage className='w-full' />
        </div>
        <Layout className='relative pt-20 md:pt-40 pb-[70px]'>
          <h2 className='text-[35px] md:text-[60px] text-primary'>Agenda</h2>
          <div className='flex flex-col max-w-[900px] w-full flex-wrap mt-10 gap-6'>
            {
              talks.map(({ title, ...rest }) => {
                return <Schedule key={title} title={title} {...rest} />
              })
            }
          </div>
        </Layout>
      </section>
      <section id='we' className='relative bg-[#FFB253] overflow-hidden'>
        <div className='absolute flex justify-center w-full'>
          <GreenBlockImage className='w-full' />
        </div>
        <Layout className='relative pt-20 md:pt-40 pb-[70px]'>
          <div className='flex justify-between'>
            <div className='flex flex-col basis-[100%] md:basis-[65%]'>
              <h2 className='text-[35px] md:text-[60px] text-tertiary'>Nosotros</h2>
              <p className='text-tertiary font-medium mt-[20px] text-[18px] md:text-[20px] max-w-[1000px] w-full'>
                Somos líderes que buscamos brindar un espacio para aprender y compartir con nuestras comunidades de tecnología en la Costa Caribe,
                donde nos conozcan y así poder ofrecerles oportunidades y experiencias únicas, que promuevan la innovación y la
                creatividad en la ciudad!
              </p>
            </div>
            <div className='hidden basis-[30%] mt-2 md:block'>
              <Image
                src='/images/small-caribe-dev.svg'
                alt='Small Caribe Dev logo'
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className='relative mt-10 w-full h-[400px]'>
            <Image
              className='object-cover rounded-3xl'
              src='/images/nosotros.jpeg'
              alt='Reunion de la comunidad'
              fill
            />
          </div>
        </Layout>
      </section>
    </>
  )
}
