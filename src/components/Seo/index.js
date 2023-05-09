import Head from 'next/head'
import { useRouter } from 'next/router'

export function Seo (props) {
  const { title, description, image } = props
  const { asPath } = useRouter()
  const site = process.env.NEXT_PUBLIC_DOMAIN

  let parsedDescription = ''

  if (description) {
    const trimmedString = description.substring(0, 157)
    parsedDescription = `${trimmedString}...`
  }

  return (
    <Head>
      <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='format-detection' content='telephone=no, date=no, address=no' />
      <meta name='theme-color' content='#005D68' />
      <meta property='og:site_name' content='Caribe Dev' />
      <meta property='og:locale' content='es' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={`${site}${asPath}`} />
      {
        site && (
          <>
            <link rel='canonical' href={site} />
          </>
        )
      }
      {
        title && (
          <>
            <title>{title}</title>
            <meta property='og:image:alt' content={title} />
            <meta property='og:title' content={title} />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:image:alt' content={title} />
          </>
        )
       }
      {
        parsedDescription && (
          <>
            <meta name='description' content={parsedDescription} />
            <meta property='og:description' content={parsedDescription} />
            <meta name='twitter:description' content={parsedDescription} />
          </>
        )
      }
      {
        image && (
          <>
            <meta property='og:image' content={image} />
            <meta property='og:image:width' content='1200' />
            <meta property='og:image:height' content='630' />
            <meta name='twitter:image' content={image} />
            <meta name='twitter:image:width' content='1200' />
            <meta name='twitter:image:height' content='630' />
          </>
        )
      }

      <meta name="twitter:site" content="@caribedev" />
      <meta name="twitter:creator" content="@caribedev" />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
  )
}