import Link from 'next/link'

const buttonClass = 'rounded-md border px-4 py-2 text-sm transition-colors'
const enabledClass = `${buttonClass} border-primary bg-primary text-white hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange`
const disabledClass = `${buttonClass} border-white/10 text-white/40 cursor-not-allowed`

// Page 1 lives at basePath itself; later pages at `${basePath}/page/N`
export function getPageHref(basePath, page) {
  return page <= 1 ? basePath : `${basePath}/page/${page}`
}

export function BlogPagination({ currentPage, totalPages, basePath = '/blog' }) {
  if (totalPages <= 1) return null

  const hasPrev = currentPage > 1
  const hasNext = currentPage < totalPages

  return (
    <nav aria-label='Paginación' className='mt-12 flex flex-wrap items-center justify-center gap-3 md:gap-4'>
      {hasPrev ? (
        <Link href={getPageHref(basePath, currentPage - 1)} rel='prev' className={enabledClass}>
          ← Anteriores
        </Link>
      ) : (
        <span aria-disabled='true' className={disabledClass}>← Anteriores</span>
      )}

      <span className='text-sm text-white/80' aria-current='page'>
        Página {currentPage} de {totalPages}
      </span>

      {hasNext ? (
        <Link href={getPageHref(basePath, currentPage + 1)} rel='next' className={enabledClass}>
          Siguientes →
        </Link>
      ) : (
        <span aria-disabled='true' className={disabledClass}>Siguientes →</span>
      )}
    </nav>
  )
}
