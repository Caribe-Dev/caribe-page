import Link from 'next/link'

function MdxLink({ href = '', children, ...props }) {
  const className = 'text-orange underline underline-offset-4 hover:text-tertiary'

  if (href.startsWith('/') || href.startsWith('#')) {
    return <Link href={href} className={className} {...props}>{children}</Link>
  }

  return (
    <a href={href} className={className} target='_blank' rel='noopener noreferrer' {...props}>
      {children}
    </a>
  )
}

function MdxImage({ src, alt = '', title }) {
  return (
    <figure className='my-8'>
      {/* Plain img: MDX images have unknown dimensions, so next/image `fill` would need a fixed box */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} title={title} loading='lazy' className='w-full rounded-xl' />
      {title && <figcaption className='mt-2 text-center text-sm text-white/70'>{title}</figcaption>}
    </figure>
  )
}

// Inline `code` and fenced blocks both render <code>; fenced ones are wrapped by <pre>
function MdxCode({ className, ...props }) {
  if (className?.startsWith('language-')) {
    return <code className={className} {...props} />
  }

  return <code className='rounded bg-green-400 px-1.5 py-0.5 text-[0.9em] text-orange' {...props} />
}

export const mdxComponents = {
  h1: (props) => <h2 className='mt-12 mb-4 text-3xl md:text-4xl text-aqua' {...props} />,
  h2: (props) => <h2 className='mt-12 mb-4 text-2xl md:text-3xl text-aqua' {...props} />,
  h3: (props) => <h3 className='mt-8 mb-3 text-xl md:text-2xl text-tertiary' {...props} />,
  p: (props) => <p className='my-5 leading-relaxed' {...props} />,
  a: MdxLink,
  ul: (props) => <ul className='my-5 list-disc space-y-2 pl-6 marker:text-orange' {...props} />,
  ol: (props) => <ol className='my-5 list-decimal space-y-2 pl-6 marker:text-orange' {...props} />,
  blockquote: (props) => (
    <blockquote className='my-6 border-l-4 border-orange bg-green-400/60 py-2 px-5 italic text-tertiary [&>p]:my-2' {...props} />
  ),
  code: MdxCode,
  pre: (props) => (
    <pre className='my-6 overflow-x-auto rounded-xl bg-green-400 p-5 text-sm leading-relaxed text-white' {...props} />
  ),
  img: MdxImage,
  hr: () => <hr className='my-10 border-white/20' />,
  table: (props) => (
    <div className='my-6 overflow-x-auto'>
      <table className='w-full border-collapse text-left text-sm' {...props} />
    </div>
  ),
  th: (props) => <th className='border-b border-white/30 px-3 py-2 font-bold text-tertiary' {...props} />,
  td: (props) => <td className='border-b border-white/10 px-3 py-2' {...props} />,
}
