import Link from 'next/link'

export function Menu () {
  return (
    <nav>
      <ul className="flex gap-5">
        <li className='font-medium'>
          <Link href="#communities" scroll={false}>Comunidades</Link>
        </li>
        <li className='font-medium'>
          <Link href='#organizers' scroll={false}>Organizadores</Link>
        </li>
        <li className='font-medium'>
          <Link href='#events' scroll={false}>Eventos</Link>
        </li>
        <li className='font-medium'>
          <Link href='#sponsors' scroll={false}>Sponsors</Link>
        </li>
      </ul>
    </nav>
  )
}
