/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#005D68',
      'secondary': ' #00A1A2',
      'tertiary': '#FFE8CB',
      'white': '#F5F5F7',
      'dark-text': '#334244',
      'green-300': '#002F34',
    },
    extend: {
      fontFamily: {
        raleway: ['var(--raleway-font)', '-apple-system', 'Helvetica Neue', 'sans-serif'],
        formaDJRMicro: ['var(--formaDJRMicro-font)', '-apple-system', 'Helvetica Neue', 'sans-serif'],
      },
      backgroundImage: {
        'primary-hero': 'linear-gradient(0deg, #FDC547 34.26%, #F9A64B 42.48%, #F47D4F 54.55%, #F26D51 60.77%, #DC5C55 65.89%, #B33D5D 76.33%, #A33160 81.71%, #822A5F 87.62%, #59205E 95.78%, #491D5D 100%)',
        'secondary-hero': `
          linear-gradient(181.57deg, rgba(46, 111, 112, 0.2) 7.06%, #2E6F70 96.92%),
          linear-gradient(0deg, rgba(77, 189, 190, 0.99) 0%, rgba(85, 205, 179, 0.9943) 20.56%, #62E89F 47.97%, #72E397 55.49%, #9BD483 70.15%, #DDBE64 90.28%, #FFB253 99.99%)
        `,
        'block-grandient': 'linear-gradient(180deg, rgba(0,113,113,1) 50%, rgba(255,178,83,1) 50%)'
      }
    },
  },
  plugins: [],
}
