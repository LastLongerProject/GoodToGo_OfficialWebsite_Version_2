/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        '2xl': '5rem',
      },
      screens: {
        sm: '560px',
        md: '768px',
        lg: '1024px',
        xl: '1024px',
        '2xl': '1280px',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: '#FFFFFF',
        op: {
          80: '#FFFFFFCC'
        },
      },
      black: '#1B1E1F',
      blue: {
        DEFAULT: '#40B9D8', // 500
        100: '#D9F1F7',
        250: '#9FDCEC',
      },
      yellow: {
        DEFAULT: '#FFD84B', // 500
        700: '#FFC800',
      },
    },
  },
  plugins: [],
}
