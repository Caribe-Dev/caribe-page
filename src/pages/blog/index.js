import { BlogListing } from '@/components/blog/BlogListing'
import { getAllCategories, getAllPosts, paginate } from '@/lib/blog'

export const getStaticProps = async () => {
  return {
    props: {
      ...paginate(getAllPosts(), 1),
      categories: getAllCategories(),
    },
  }
}

export default function BlogPage(props) {
  return <BlogListing {...props} />
}
