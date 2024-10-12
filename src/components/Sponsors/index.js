import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export function Sponsors({ website, name, logo, background, className }) {
  return (
    <Link className='flex justify-start flex-col items-center w-[160px] z-10' href={website}
      target='_blank'>
      <div
        key={website}
        style={{ 'backgroundColor': background || '#002F34' }}
        className={
          classNames(
            'relative flex items-center justify-around rounded-xl text-center flex-col w-[160px] h-[160px]',
            className
          )
        }
      >
        <Image
          className='object-contain px-4'
          src={logo}
          alt={`${name} logo`}
          fill
        />
      </div>
      <span className='text-white font-bold text-[12px] text-center'>{name}</span>
    </Link>
  )
}
