import Link from 'next/link'
import Image from 'next/image'

import { Layout } from '@/components/Layout'
import { Menu } from '@/components/Menu'

export function Header () {
  return (
    <header className='sticky top-0 z-10 h-[61px] bg-white shadow-lg'>
      <Layout className='flex justify-between items-center h-full'>
        <Link href='/'>
          <Image
            src='/images/caribe-dev-logo.svg'
            alt='Caribe Dev logo'
            width={120}
            height={40}
          />
        </Link>
        <Menu />
      </Layout>
    </header>
  )
}
