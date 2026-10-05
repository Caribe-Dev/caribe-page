import { BlogListing } from '@/components/blog/BlogListing'
import { getAllCategories, getPostsByCategory, getTotalPages, paginate } from '@/lib/blog'

// Page 1 is served by /blog/categoria/[category], so only pages 2..N are generated here
export const getStaticPaths = async () => {
  const paths = getAllCategories().flatMap((category) => {
    const totalPages = getTotalPages(getPostsByCategory(category.slug))

    return Array.from({ length: totalPages - 1 }, (_, index) => ({
      params: { category: category.slug, page: String(index + 2) },
    }))
  })

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const categories = getAllCategories()
  const category = categories.find((item) => item.slug === params.category)
  const page = category && paginate(getPostsByCategory(category.slug), Number(params.page))

  if (!page || page.currentPage === 1) {
    return { notFound: true }
  }

  return {
    props: {
      ...page,
      categories,
      category,
    },
  }
}

export default function BlogCategoryPaginatedPage(props) {
  return <BlogListing {...props} />
}
