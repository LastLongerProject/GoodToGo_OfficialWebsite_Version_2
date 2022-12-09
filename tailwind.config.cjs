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
    fontSize: {
      'xs': ['14px', '20px'],
      'sm': ['16px', '24px'],
      'base': ['18px', '26px'],
      'lg': ['20px', '28px'],
      'xl': ['24px', '32px'],
      '2xl': ['28px', '40px'],
      '3xl': ['34px', '50px'],
      '4xl': ['55px', '70px'],
    },
  },
  plugins: [],
}
