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
      'tertiary': '#FFB253',
      'white': '#F5F5F7',
    },
    extend: {
      fontFamily: {
        raleway: ['var(--raleway-font)', '-apple-system', 'Helvetica Neue', 'sans-serif'],
        formaDJRMicro: ['var(--formaDJRMicro-font)', '-apple-system', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
