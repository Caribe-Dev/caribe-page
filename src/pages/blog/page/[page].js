import { BlogListing } from '@/components/blog/BlogListing'
import { getAllCategories, getAllPosts, getTotalPages, paginate } from '@/lib/blog'

// Page 1 is served by /blog, so only pages 2..N are generated here
export const getStaticPaths = async () => {
  const totalPages = getTotalPages(getAllPosts())

  return {
    paths: Array.from({ length: totalPages - 1 }, (_, index) => ({ params: { page: String(index + 2) } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const page = paginate(getAllPosts(), Number(params.page))

  if (!page || page.currentPage === 1) {
    return { notFound: true }
  }

  return {
    props: {
      ...page,
      categories: getAllCategories(),
    },
  }
}

export default function BlogPaginatedPage(props) {
  return <BlogListing {...props} />
}
