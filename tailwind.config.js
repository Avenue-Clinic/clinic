/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
    },
    fontFamily: {
      DEFAULT: ['var(--font-plus-jakarta-sans)'],
      sans: ['var(--font-plus-jakarta-sans)'],
      'plus-jakarta-sans': ['var(--font-plus-jakarta-sans)'],
      'rubik': ['var(--font-rubik)'],
      'poppins': ['var(--font-poppins)'],
    },
  },
  plugins: [],
}
