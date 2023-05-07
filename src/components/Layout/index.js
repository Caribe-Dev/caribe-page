import classNames from 'classnames'

export function Layout ({ children, className = '' }) {
  return (
    <div className={classNames('w-full max-w-7xl m-auto h-full', className)}>
      {children}
    </div>
  )
}
