import Image from 'next/image'
import { format, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'

import allFounders from '@/all-founders'

const { founders } = allFounders

export function formatPostDate(date) {
  return format(parseISO(date), "d 'de' MMMM, yyyy", { locale: es })
}

function getInitials(name) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

export function AuthorByline({ author, date, readingTime, size = 'sm' }) {
  const founder = founders.find((item) => item.name.toLowerCase() === author.toLowerCase())
  const avatarSize = size === 'lg' ? 48 : 36

  return (
    <div className='flex items-center gap-3'>
      {founder?.image ? (
        <Image
          src={founder.image}
          alt=''
          width={avatarSize}
          height={avatarSize}
          className='rounded-full object-cover border-2 border-tertiary'
          style={{ width: avatarSize, height: avatarSize }}
        />
      ) : (
        <span
          aria-hidden='true'
          className='flex items-center justify-center rounded-full bg-primary text-tertiary text-xs font-bold border-2 border-tertiary'
          style={{ width: avatarSize, height: avatarSize }}
        >
          {getInitials(author)}
        </span>
      )}
      <div className='leading-tight'>
        <p className='text-sm text-white'>{author}</p>
        <p className='text-xs text-white/70'>
          <time dateTime={date}>{formatPostDate(date)}</time>
          {readingTime && <> · {readingTime} min de lectura</>}
        </p>
      </div>
    </div>
  )
}
