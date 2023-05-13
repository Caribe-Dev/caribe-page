import classNames from 'classnames'
import Image from 'next/image'

export function Community ({ website, name, logo, background, className }) {
  return (
    <a
      key={website}
      style={{ 'background-color': background || '#002F34' }}
      className={
        classNames(
          'relative flex items-center justify-around rounded-xl text-center flex-col w-[160px] h-[70px]',
          className
        )
      }
      href={website}
      target='_blank'
    >
      <Image
        className='object-contain px-4'
        src={logo}
        alt={`${name} logo`}
        fill
      />
    </a>
  )
}
