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
        'hero': "url('/images/hero.svg')",
        'mobile-hero': "url('/images/mobile-hero.svg')",
        'hero-1': "url('/images/hero-1.png')",
        'hero-2': "url('/images/hero-2.png')",
      }
    },
  },
  plugins: [],
}
