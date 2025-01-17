import classNames from 'classnames'
import Link from 'next/link'

export function Menu({ className, isOpen, setOpen }) {

  const onClick = (e) => {
    const $anchor = e.target.closest('a')

    if ($anchor) {
      const dataScroll = $anchor.dataset.scroll

      if (dataScroll === 'true') {
        e.preventDefault()
      }

      setOpen(false)
    }
  }

  return (
    <nav className={classNames(
      'w-full h-full md:h-auto md:w-auto md:block',
      { 'hidden': !isOpen }
    )}>
      <ul className={classNames('flex gap-5', className)} onClick={onClick}>
        <li className='font-bold text-center md:font-medium text-tertiary' >
          <Link href='#communities' data-scroll="true">Comunidades</Link>
        </li>
        {/*<li className='font-bold text-center md:font-medium text-tertiary' onClick={onClick}>
        <a href='/#sponsors' scroll={false}>Sponsors</a></li>*/}
        <li className='font-bold text-center md:font-medium text-tertiary'>
          <Link href='#founders' data-scroll="true">Organizadores</Link>
        </li>
        <li className='font-bold text-center md:font-medium text-tertiary'>
          <Link href='#about-us' data-scroll="true">Nosotros</Link>
        </li>
        <li className='font-bold text-center md:font-medium text-tertiary'>
          <Link href="/hacktoberfest/2024/index.html">HacktoberFest</Link>
        </li>
        <li className='font-bold text-center md:font-medium text-tertiary'>
          <Link href="https://www.caribeconf.com/">CaribeConf</Link>
        </li>
      </ul>
    </nav >
  )
}
