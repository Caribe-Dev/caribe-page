import Image from 'next/image'

export function Schedule ({ time, title, name, photo }) {
  return (
    <div className='flex basis-full flex-col bg-[rgba(255,255,255,0.3)] rounded-2xl px-[50px] py-[20px] border-l-[6px] border-r-solid border-[#E39600]'>
      {time && <span className='text-[18px] md:text-[20px] text-primary'>{time}</span>}
      {title && <span className='text-[20px] md:text-[25px] text-primary font-bold my-[10px]'>{title}</span>}
      <div className='flex items-center gap-2'>
        {
          photo && (
            <Image
              className='rounded-full h-[45px] object-cover'
              src={photo}
              alt={`${name} avatar`}
              width={45}
              height={45}
            />
          )
        }
        { name && <span className='text-[18px] md:text-[20px] text-primary'>{name}</span>}
      </div>
    </div>
  )
}