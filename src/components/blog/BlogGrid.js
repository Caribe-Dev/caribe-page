import Link from 'next/link'
import classNames from 'classnames'

import { BlogCard } from './BlogCard'

const chipClass = 'rounded-md border px-3 py-1 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange'

function CategoryChip({ href, active, children }) {
  return (
    <li>
      <Link
        href={href}
        aria-current={active ? 'page' : undefined}
        className={classNames(
          chipClass,
          active ? 'border-primary bg-primary text-white' : 'border-white/20 text-white hover:bg-white/10'
        )}
      >
        {children}
      </Link>
    </li>
  )
}

export function BlogGrid({ posts, title = 'Lo último', categories = [], activeCategory = null }) {
  return (
    <section className='flex flex-col items-center'>
      <h2 className='text-white text-center'>{title}</h2>

      {categories.length > 1 && (
        <nav aria-label='Categorías' className='mt-6'>
          <ul className='flex flex-wrap justify-center gap-2'>
            <CategoryChip href='/blog' active={!activeCategory}>Todas</CategoryChip>
            {categories.map((category) => (
              <CategoryChip
                key={category.slug}
                href={`/blog/categoria/${category.slug}`}
                active={activeCategory === category.slug}
              >
                {category.name}
              </CategoryChip>
            ))}
          </ul>
        </nav>
      )}

      {posts.length ? (
        <div className='mt-8 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className='mt-10 text-center text-white/80'>Aún no hay artículos publicados.</p>
      )}
    </section>
  )
}
