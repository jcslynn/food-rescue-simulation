/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#230640',
        secondary: '#38145D',
        background: '#120226',
        btn: '#6C17A6',
        text1: 'white',
        text2: 'rgba(255, 255, 255, 0.6)',
        highlight: '#A955FF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      margin: {
        drawer: '0 0 0 140px',
      },
      fontFamily: {
        sans: ['Poppins'],
        display: ['Poppins'],
      },
      fontSize: {
        '2xl': ['50px', '80px'],
        xl: ['30px', '45px'],
        lg: ['25px', '40px'],
        base: ['20px', '32px'],
        sm: ['15px', '24px'],
      },
      opacity: {
        60: '.6',
      },
      minWidth: {
        'card': '300px',
      }
    },
  },
  variants: {
    extend: {
      visibility: ['group-hover'],
    },
  },
  plugins: [],
};
