import Image from 'next/image'

export function Avatar ({ name, image, social = {} }) {
  return (
    <div className='flex flex-col justify-between items-center w-[220px] h-[220px]'>
      <div className='relative w-[140px] h-[140px] avatar'>
        <Image
          className='object-contain my-0 mx-auto rounded-full z-0'
          src={image}
          alt={`${name} image`}
          fill
        />
      </div>
      <span className='font-bold mt-4'>{name}</span>
      <div className='flex gap-5 mt-1'>
        {
          social.website && (
            <a href={social.website} target='_blank'>
              <Image
                src='images/world-icon.svg'
                alt='Website icon'
                width={22}
                height={22}
              />
            </a>
          )
        }
        {
          social.twitter && (
            <a href={social.twitter} target='_blank'>
              <Image
                src='images/twitter-icon.svg'
                alt='Twitter icon'
                width={22}
                height={22}
              />
            </a>
          )
        }
        {
          social.github && (
            <a href={social.github} target='_blank'>
              <Image
                src='images/github-icon.svg'
                alt='Github icon'
                width={22}
                height={22}
              />
            </a>
          )
        }
      </div>
    </div>
  )
}
