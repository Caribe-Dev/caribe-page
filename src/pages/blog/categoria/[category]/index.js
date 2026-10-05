import { BlogListing } from '@/components/blog/BlogListing'
import { getAllCategories, getPostsByCategory, paginate } from '@/lib/blog'

export const getStaticPaths = async () => {
  return {
    paths: getAllCategories().map((category) => ({ params: { category: category.slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const categories = getAllCategories()
  const category = categories.find((item) => item.slug === params.category)

  if (!category) {
    return { notFound: true }
  }

  return {
    props: {
      ...paginate(getPostsByCategory(category.slug), 1),
      categories,
      category,
    },
  }
}

export default function BlogCategoryPage(props) {
  return <BlogListing {...props} />
}
