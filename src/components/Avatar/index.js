import Image from 'next/image'
import { FaXTwitter } from "react-icons/fa6";

import { Icon } from '@/components/Icon'


const ICON_SIZE = 22

export function Avatar({ name, image, social = {} }) {
  return (
    <div className='flex flex-col justify-between items-center w-[220px] h-[220px]'>
      <div className='relative w-[140px] h-[140px]  avatar'>
        <Image
          className='object-cover my-0 mx-auto rounded-full z-0'
          src={image}
          alt={`${name} image`}
          fill
        />
      </div>
      <span className='font-bold mt-4 text-tertiary'>{name}</span>
      <div className='flex gap-5 mt-1 items-center'>
        {
          social.website && (
            <a href={social.website} target='_blank'>
              <Icon
                icon='world'
                width={ICON_SIZE}
                height={ICON_SIZE}
              />
            </a>
          )
        }
        {
          social.twitter && (
            <a href={social.twitter} target='_blank'>
              <FaXTwitter
                className='text-[#ffc175] text-lg'
                icon='twitter'
                width={ICON_SIZE}
                height={ICON_SIZE}
              />
            </a>
          )
        }
        {
          social.github && (
            <a href={social.github} target='_blank'>
              <Icon
                icon='github'
                width={ICON_SIZE}
                height={ICON_SIZE}
              />
            </a>
          )
        }
      </div>
    </div>
  )
}
