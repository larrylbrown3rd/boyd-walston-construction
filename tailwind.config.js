/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#C4A962',
          'gold-dark': '#A68B4B',
          'gold-light': '#E8D5A3',
        },
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        barlow: ['var(--font-barlow)', 'sans-serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
      },
    },
  },
}
