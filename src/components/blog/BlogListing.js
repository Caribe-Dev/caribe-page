import { Seo } from '@/components/Seo'
import { Layout } from '@/components/Layout'

import { BlogHero } from './BlogHero'
import { BlogGrid } from './BlogGrid'
import { BlogPagination, getPageHref } from './BlogPagination'

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN

// Shared body for /blog, /blog/page/N and /blog/categoria/[category](/page/N)
export function BlogListing({ posts, currentPage, totalPages, categories, category = null }) {
  const basePath = category ? `/blog/categoria/${category.slug}` : '/blog'
  const pageSuffix = currentPage > 1 ? ` · Página ${currentPage}` : ''
  const sectionTitle = category ? category.name : 'Blog'

  return (
    <>
      <Seo
        title={`${sectionTitle}${pageSuffix} | Caribe Dev`}
        description={
          category
            ? `Artículos de ${category.name} del blog de CaribeDev.`
            : 'Historias, aprendizajes y tutoriales de la comunidad tecnológica del Caribe colombiano.'
        }
        image={`${DOMAIN}/images/caribe-dev-hero.png`}
        canonical={getPageHref(basePath, currentPage)}
      />
      <BlogHero
        title='Historias, aprendizajes que'
        highlight='crecen desde el Caribe'
        compact={currentPage > 1 || Boolean(category)}
      />
      <div className='bg-green-300 pt-12 pb-24'>
        <Layout>
          <BlogGrid
            posts={posts}
            title={currentPage > 1 ? `Página ${currentPage}` : 'Lo último'}
            categories={categories}
            activeCategory={category?.slug}
          />
          <BlogPagination currentPage={currentPage} totalPages={totalPages} basePath={basePath} />
        </Layout>
      </div>
    </>
  )
}
