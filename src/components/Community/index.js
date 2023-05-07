import Image from 'next/image'

export function Community ({ website, name, logo }) {
  return (
    <a
      key={website}
      className='flex items-center justify-around text-center flex-col w-[180px] h-[180px]'
      href={website}
      target='_blank'
    >
      <span className='text-white font-bold text-[20px]'>{name}</span>
      <div className='relative w-[140px] h-[140px] p-[2px]'>
        <Image
          className='object-contain my-0 mx-auto rounded-full'
          src={logo}
          alt={`${name} logo`}
          fill
        />
      </div>
    </a>
  )
}
