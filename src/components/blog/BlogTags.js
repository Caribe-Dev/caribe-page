import classNames from 'classnames'
import Link from 'next/link'

export function BlogTags({ tags, className }) {
  if (!tags?.length) return null

  return (
    <ul className={classNames('flex flex-wrap gap-2', className)} aria-label='Tags'>
      {tags.map((tag) => (
        <li key={tag.slug}>
          <Link
            href={`/blog/tag/${tag.slug}`}
            className='inline-block rounded-md border border-aqua/40 px-2 py-0.5 text-xs text-aqua hover:bg-aqua/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange'
          >
            #{tag.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
