import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'

import { Seo } from '@/components/Seo'
import { Layout } from '@/components/Layout'
import { AuthorByline } from '@/components/blog/AuthorByline'
import { BlogCover } from '@/components/blog/BlogCover'
import { BlogTags } from '@/components/blog/BlogTags'
import { RelatedPosts } from '@/components/blog/RelatedPosts'
import { mdxComponents } from '@/components/blog/mdxComponents'
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog'

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN
const DEFAULT_IMAGE = '/images/caribe-dev-hero.png'

export const getStaticPaths = async () => {
  return {
    paths: getAllPosts().map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return { notFound: true }
  }

  // blockJS (default) keeps posts from running arbitrary JS expressions
  const source = await serialize(post.content, {
    mdxOptions: { remarkPlugins: [remarkGfm] },
  })

  return {
    props: {
      post: post.meta,
      source,
      related: getRelatedPosts(post.meta),
    },
  }
}

export default function BlogPostPage({ post, source, related }) {
  const url = `${DOMAIN}/blog/${post.slug}`
  const image = `${DOMAIN}${post.image || DEFAULT_IMAGE}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: { '@type': 'Person', name: post.author },
    image,
    mainEntityOfPage: url,
    keywords: post.tags.map((tag) => tag.name).join(', '),
    publisher: {
      '@type': 'Organization',
      name: 'Fundación CaribeDev',
      logo: { '@type': 'ImageObject', url: `${DOMAIN}/images/small-caribe-dev.png` },
    },
  }

  return (
    <>
      <Seo
        title={`${post.title} | Caribe Dev`}
        description={post.description}
        image={image}
        canonical={`/blog/${post.slug}`}
        type='article'
        publishedTime={post.date}
        modifiedTime={post.updatedAt}
        author={post.author}
        tags={post.tags.map((tag) => tag.name)}
        jsonLd={jsonLd}
      />
      <div className='pt-28 pb-24 text-white'>
        <Layout>
          {/* Dark card keeps body text readable over the light top of the gradient */}
          <article className='mx-auto max-w-3xl rounded-3xl bg-green-300/90 p-6 shadow-xl md:p-12'>
            <nav aria-label='Breadcrumb' className='text-sm'>
              <Link href='/blog' className='text-aqua hover:text-tertiary'>← Volver al blog</Link>
            </nav>

            {post.image && (
              <BlogCover
                image={post.image}
                alt={post.imageAlt || ''}
                sizes='(min-width: 768px) 768px, 100vw'
                priority
                className='mt-6 aspect-[1000/420]'
              />
            )}

            <header className='mt-8'>
              {post.category && (
                <p className='text-sm font-bold uppercase tracking-wider text-orange'>{post.category}</p>
              )}
              <h1 className='mt-2 text-aqua text-[36px] md:text-[52px] leading-tight'>{post.title}</h1>
              <p className='mt-4 text-lg text-white/90'>{post.description}</p>
              <div className='mt-6 flex flex-wrap items-center justify-between gap-4'>
                <AuthorByline author={post.author} date={post.date} readingTime={post.readingTime} size='lg' />
                <BlogTags tags={post.tags} />
              </div>
            </header>

            <div className='mt-10 text-[17px] md:text-lg'>
              <MDXRemote {...source} components={mdxComponents} />
            </div>
          </article>

          <RelatedPosts posts={related} />
        </Layout>
      </div>
    </>
  )
}
