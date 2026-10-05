import { BlogCard } from './BlogCard'

export function RelatedPosts({ posts }) {
  if (!posts?.length) return null

  return (
    <section aria-labelledby='related-posts' className='mt-16'>
      <h2 id='related-posts' className='text-white text-center'>Artículos relacionados</h2>
      <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}
