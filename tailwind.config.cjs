/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
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
      gray: {
        DEFAULT: '#D9D9D9', // 500
        900: '#6B6B6B'
      },
      blue: {
        DEFAULT: '#40B9D8', // 500
        100: '#D9F1F7',
        250: '#9FDCEC',
      },
      yellow: {
        DEFAULT: '#FFD84B', // 500
        250: '#FFECA5',
        700: '#FFC800',
      },
      orange: {
        DEFAULT: '#DF6B34'
      },
      green: {
        DEFAULT: '#3CB371'
      }
    },
    fontSize: {
      '2xs': ['13px', '20px'],
      'xs': ['14px', '20px'],
      'sm': ['16px', '24px'],
      'base': ['18px', '26px'],
      'lg': ['20px', '28px'],
      'xl': ['24px', '32px'],
      '2xl': ['28px', '40px'],
      '3xl': ['34px', '50px'],
      '4xl': ['55px', '70px'],
      '6xl': ['100px', '130px'],
      '8xl': ['144px', '160px'],
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '9px',
      'lg': '15px',
      'xl': '21px',
      'full': '9999px',
    }
  },
  plugins: [],
}
