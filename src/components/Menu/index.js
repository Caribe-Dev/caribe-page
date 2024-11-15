import classNames from 'classnames'
import Link from 'next/link'
import { useCallback } from 'react'

export function Menu({ className, isOpen, setOpen }) {

  const onClick = useCallback(() => {
    if (isOpen) setOpen(false)
  })

  return (
    <nav className={classNames(
      'w-full h-full md:h-auto md:w-auto md:block',
      { 'hidden': !isOpen }
    )}>
      <ul className={classNames('flex gap-5', className)}>
        <li className='font-bold text-center md:font-medium text-tertiary' >
          <a href='/#communities' scroll={false} onClick={onClick}>Comunidades</a>
        </li>
        <li className='font-bold text-center md:font-medium text-tertiary' onClick={onClick}>
          <a href='/#sponsors' scroll={false}>Sponsors</a>
        </li>
        <li className='font-bold text-center md:font-medium text-tertiary' onClick={onClick}>
          <a href='/#founders' scroll={false}>Fundadores</a>
        </li>
        <li className='font-bold text-center md:font-medium text-tertiary' onClick={onClick}>
          <a href='/#about-us' scroll={false}>Nosotros</a>
        </li>
        <li className='font-bold text-center md:font-medium text-tertiary'>
          <Link href="/hacktoberfest2024/index.html">HacktoberFest</Link>
        </li>
        <li className='font-bold text-center md:font-medium text-tertiary'>
          <Link href="/caribeconf">CaribeConf</Link>
        </li>
      </ul>
    </nav>
  )
}
