import { icons } from './icons'

export function Icon ({ icon, ...props }) {
  const Component = icons[icon]

  if (!Component) return <></>

  return <Component {...props} />
}
