import Image from 'next/image'

import SunImage from '../../../public/images/sun.svg'
import LeftPalmsImage from '../../../public/images/left-palms.svg'
import RightPalmsImage from '../../../public/images/right-palms.svg'

// Fallback illustration for posts without a cover image
function PlaceholderCover() {
  return (
    <div aria-hidden='true' className='absolute inset-0 overflow-hidden bg-blog-hero'>
      <SunImage className='absolute -bottom-[8%] left-1/2 -translate-x-1/2 w-[44%] [&_path]:fill-[#F6AE6B]' />
      <LeftPalmsImage className='absolute -bottom-[60%] left-0 w-[24%] [&_path]:fill-green-300' />
      <RightPalmsImage className='absolute -bottom-[60%] right-0 w-[24%] [&_path]:fill-green-300' />
      <p className='absolute inset-x-0 top-[22%] flex justify-center font-formaDJRMicro text-3xl text-aqua [text-shadow:0_2px_8px_rgba(0,37,42,0.6)]'>
        ¡Blog <span className='ml-2 text-orange'>Nuevo!</span>
      </p>
    </div>
  )
}

export function BlogCover({ image, alt, sizes, priority = false, className = 'aspect-[1000/420]' }) {
  return (
    <div className={`relative w-full overflow-hidden rounded-xl ${className}`}>
      {image ? (
        <Image src={image} alt={alt} fill sizes={sizes} priority={priority} className='object-cover' />
      ) : (
        <PlaceholderCover />
      )}
    </div>
  )
}
