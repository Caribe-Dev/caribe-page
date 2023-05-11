import localFont from 'next/font/local'

export const FormaDJRMicro = localFont({
  src: [
    {
      path: '../../public/fonts/FormaDJRMicro-Regular.woff2',
      weight: 'normal',
    },
    {
      path: '../../public/fonts/FormaDJRMicro-Medium.woff2',
      weight: '500',
    },
    {
      path: '../../public/fonts/FormaDJRMicro-Bold.woff2',
      weight: '700',
    },
  ],
})

export const Raleway = localFont({
  src: [
    {
      path: '../../public/fonts/Raleway-Regular.woff2',
      weight: 'normal',
    },
    {
      path: '../../public/fonts/Raleway-Medium.woff2',
      weight: '500',
    },
    {
      path: '../../public/fonts/Raleway-Bold.woff2',
      weight: '700',
    },
  ],
})
