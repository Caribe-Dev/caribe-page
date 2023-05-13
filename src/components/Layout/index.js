import classNames from 'classnames'

export function Layout ({ children, className = '' }) {
  return (
    <div className={classNames('w-11/12 max-w-7xl m-auto h-full md:w-full md:px-4', className)}>
      {children}
    </div>
  )
}
