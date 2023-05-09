import { Layout } from '@/components/Layout'
import { Icon } from '@/components/Icon'

import allSocialMedia from '@/all-social-media'

const { social } = allSocialMedia

export function Footer () {
  const year = new Date().getFullYear()
  return (
    <footer className='h-[60px]'>
      <Layout className='flex justify-between items-center'>
        <div className='flex justify-between items-center'>
          <span className='text-white font-bold'>
            © Copyright Caribe Dev {year}
          </span>
        </div>
        <a
          className='text-white font-bold text-[14px] underline'
          href='https://github.com/Caribe-Dev/caribe-page/blob/main/CODE_OF_CONDUCT.md'
        >
            Code of Conduct
        </a>
        <div className='flex items-center gap-4'>
          {
            social.map(({ url, icon }) => {
              const size = icon === 'github' ? 26 : 24
              return (
                <a key={url} className='' href={url}  target='_blank'>
                  <Icon
                    icon={icon}
                    className='fill-white'
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
