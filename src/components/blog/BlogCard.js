import Link from 'next/link'

import { AuthorByline } from './AuthorByline'
import { BlogCover } from './BlogCover'
import { BlogTags } from './BlogTags'

export function BlogCard({ post }) {
  return (
    <article className='relative flex flex-col gap-4 rounded-2xl bg-green-400 p-4 pb-6 transition-transform focus-within:ring-2 focus-within:ring-orange hover:-translate-y-1'>
      <BlogCover
        image={post.image}
        alt=''
        sizes='(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw'
      />
      <div className='flex flex-1 flex-col gap-3 px-2'>
        <h3 className='text-2xl text-aqua'>
          {/* Stretched link: the whole card is clickable while tags stay independent links */}
          <Link href={`/blog/${post.slug}`} className='outline-none after:absolute after:inset-0 after:content-[""]'>
            {post.title}
          </Link>
        </h3>
        <p className='text-sm leading-relaxed text-white/90'>{post.description}</p>
        <div className='mt-auto flex flex-col gap-3 pt-2'>
          <AuthorByline author={post.author} date={post.date} readingTime={post.readingTime} />
          <BlogTags tags={post.tags} className='relative z-10' />
        </div>
      </div>
    </article>
  )
}
