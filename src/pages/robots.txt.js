import { sendXml } from '@/lib/xml'

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN

export const getServerSideProps = async ({ res }) => {
  sendXml(res, `User-agent: *\nAllow: /\n\nSitemap: ${DOMAIN}/sitemap.xml\n`, 'text/plain')
  return { props: {} }
}

export default function Robots() {
  return null
}
