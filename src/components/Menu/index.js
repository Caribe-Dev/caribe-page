import Link from 'next/link'
import classNames from 'classnames'

export function Menu ({ className, isOpen }) {
  return (
    <nav className={classNames(
      'w-full h-full md:h-auto md:w-auto md:block',
      { 'hidden': !isOpen }
    )}>
      <ul className={classNames('flex gap-5', className)}>
        <li className='md:font-medium font-bold text-center text-tertiary'>
          <Link href='#communities' scroll={false}>Comunidades</Link>
        </li>
        <li className='md:font-medium font-bold text-center text-tertiary'>
          <Link href='#organizers' scroll={false}>Organizadores</Link>
        </li>
        <li className='md:font-medium font-bold text-center text-tertiary'>
          <Link href='#agend' scroll={false}>Agenda</Link>
        </li>
        <li className='md:font-medium font-bold text-center text-tertiary'>
          <Link href='#we' scroll={false}>Nosotros</Link>
        </li>
      </ul>
    </nav>
  )
}
