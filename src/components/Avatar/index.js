import Image from 'next/image'
import { FaXTwitter } from "react-icons/fa6";

import { Icon } from '@/components/Icon'


const ICON_SIZE = 22

export function Avatar({ name, image, social = {} }) {
  return (
    <div className='flex flex-col justify-between items-center md:w-[220px] w-[165px]'>
      <div className='relative w-[80%] md:w-[140px] aspect-square avatar'>
        <Image
          className='z-0 object-cover mx-auto my-0 rounded-full'
          src={image}
          alt={`${name} image`}
          fill
        />
      </div>
      <span className='mt-4 font-bold text-tertiary'>{name}</span>
      <div className='flex items-center gap-5 mt-1'>
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
        {
          social.linkedin && (
            <a href={social.linkedin} target='_blank'>
              <Icon
                icon='linkedin'
                width={ICON_SIZE}
                height={ICON_SIZE}
              />
            </a>
          )
        }
        {
          social.instagram && (
            <a href={social.instagram} target='_blank'>
              <Icon
                icon='instagram'
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
