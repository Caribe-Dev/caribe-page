import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'
import { useEffect, useCallback, useState } from 'react'

import { Layout } from '@/components/Layout'
import { Menu } from '@/components/Menu'
import { Icon } from '@/components/Icon'

import MobileHeroImage from '../../../public/images/header.svg'

const MAX_SCROLL = 30

export function Header () {
  const [open, setOpen] = useState(false)
  const [scrollTop, setScrollTop] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const _scrollTop = e.target.documentElement.scrollTop
      if (_scrollTop > MAX_SCROLL) {
        setScrollTop(true)
        return
      }

      setScrollTop(false)
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop])

  const handleMenu = useCallback((e) => {
    e.preventDefault()
    setOpen(open => !open)
  }, [])

  return (
    <header
      className={classNames(
        'fixed z-10 w-full',
        { 'h-20': !open, 'h-screen': open, 'bg-green-300': open }
      )}
    >
      <div className='relative h-20'>
        <MobileHeroImage className={
          classNames(
            'absolute transition-all',
            {
              '-top-[190px]': !scrollTop,
              '-top-[80px]': scrollTop,
              'md:-top-[50px]': scrollTop
            },
          )
        } />
        <Layout className='flex relative flex-wrap md:flex-nowrap md:items-center'>
          <div className='flex basis-full justify-between h-[70px] items-center'>
            <Link href='/'>
              <Image
                src='/images/caribe-dev-logo.svg'
                alt='Caribe Dev logo'
                width={120}
                height={40}
              />
            </Link>
            <a
              href='#'
              onClick={handleMenu}
              className='flex items-center p-1 text-sm md:hidden hover:opacity-90 focus:outline-none'
              aria-expanded={open}
            >
              <span className='sr-only'>Open main menu</span>
                <Icon
                  icon='hamburger'
                  className='fill-tertiary'
                  width={25}
                  height={25}
                />
            </a>
          </div>
          <Menu isOpen={open} className='flex-col justify-center py-4 md:flex-row md:justify-start md:py-0' />
        </Layout>
      </div>
    </header>
  )
}
