import Image from 'next/image'

import { Layout } from '@/components/Layout'
import { Icon } from '@/components/Icon'

import allSocialMedia from '@/all-social-media'

const { social } = allSocialMedia

export function Footer () {
  const year = new Date().getFullYear()
  return (
    <footer className='p-4 bg-green-300 rounded-t-3xl border-solid z-50 relative'>
      <Layout className='flex flex-col md:flex-row justify-between items-center flex-nowrap'>
        <div className='flex w-full md:w-auto flex-col md:flex-row justify-between items-center'>
          <Image
            src='/images/small-caribe-dev.svg'
            alt='Small Caribe Dev logo'
            width={100}
            height={100}
          />
          <span className='text-[#FFC175] font-bold mt-4 md:mt-0'>
            © Copyright Caribe Dev {year}
          </span>
        </div>
        <a
          className='text-[#FFC175] font-bold text-[16px] underline mt-4 md:m-0'
          href='https://github.com/Caribe-Dev/caribe-page/blob/main/CODE_OF_CONDUCT.md'
          target='_blank'
        >
            Code of Conduct
        </a>
        <div className='flex items-center gap-4 mt-4 md:mt-0'>
          {
            social.map(({ url, icon }) => {
              const size = icon === 'github' ? 26 : 24
              return (
                <a key={url} href={url}  target='_blank'>
                  <Icon
                    icon={icon}
                    width={size}
                    height={size}
                  />
                </a>
              )
            })
          }
        </div>
      </Layout>
    </footer>
  )
}
