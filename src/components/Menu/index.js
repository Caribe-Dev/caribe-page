import classNames from 'classnames'
import Link from 'next/link'

export function Menu({ className, isOpen }) {
  return (
    <nav className={classNames(
      'w-full h-full md:h-auto md:w-auto md:block',
      { 'hidden': !isOpen }
    )}>
      <ul className={classNames('flex gap-5', className)}>
        <li className='md:font-medium font-bold text-center text-tertiary'>
          <a href='#communities' scroll={false}>Comunidades</a>
        </li>
        <li className='md:font-medium font-bold text-center text-tertiary'>
          <a href='#organizers' scroll={false}>Organizadores</a>
        </li>
        <li className='md:font-medium font-bold text-center text-tertiary'>
          <a href='#we' scroll={false}>Nosotros</a>
        </li>
        <li className='md:font-medium font-bold text-center text-tertiary'>
          <Link href="/hacktoberfest2024/index.html">HacktoberFest</Link>
        </li>
      </ul>
    </nav>
  )
}
