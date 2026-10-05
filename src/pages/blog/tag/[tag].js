import Link from 'next/link'

import { Seo } from '@/components/Seo'
import { Layout } from '@/components/Layout'
import { BlogHero } from '@/components/blog/BlogHero'
import { BlogGrid } from '@/components/blog/BlogGrid'
import { getAllTags, getPostsByTag } from '@/lib/blog'

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN

export const getStaticPaths = async () => {
  return {
    paths: getAllTags().map((tag) => ({ params: { tag: tag.slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const tag = getAllTags().find((item) => item.slug === params.tag)

  if (!tag) {
    return { notFound: true }
  }

  return {
    props: {
      tag,
      posts: getPostsByTag(tag.slug),
    },
  }
}

export default function BlogTagPage({ tag, posts }) {
  return (
    <>
      <Seo
        title={`#${tag.name} | Blog | Caribe Dev`}
        description={`Artículos del blog de CaribeDev sobre ${tag.name}.`}
        image={`${DOMAIN}/images/caribe-dev-hero.png`}
        canonical={`/blog/tag/${tag.slug}`}
      />
      <BlogHero eyebrow='Blog · Tag' title={`#${tag.name}`} compact />
      <div className='bg-green-300 pt-12 pb-24'>
        <Layout>
          <BlogGrid
            posts={posts}
            title={`${posts.length} ${posts.length === 1 ? 'artículo' : 'artículos'}`}
          />
          <p className='mt-12 text-center'>
            <Link href='/blog' className='text-aqua hover:text-tertiary'>← Ver todos los artículos</Link>
          </p>
        </Layout>
      </div>
    </>
  )
}
