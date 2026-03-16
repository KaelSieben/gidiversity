/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F2FA',
          100: '#CEE4F2',
          200: '#ACCEE5',
          300: '#82B5D9',
          400: '#5693BF',
          500: '#3379AB',
          600: '#146097',
          700: '#0B4D7D',
          800: '#053C63',
          900: '#012B4A',
        },
        secondary: {
          50: '#EDFCF5',
          100: '#D3F9E4',
          200: '#ACEFCC',
          300: '#75E0B2',
          400: '#3CCA90',
          500: '#18B077',
          600: '#0F9966',
          700: '#0A724F',
          800: '#0B593F',
          900: '#0A4735',
        },
        gray: {
          50: '#F5FAFD',
          100: '#D8DEE1',
          200: '#B9BFC2',
          300: '#9BA2A5',
          400: '#81888B',
          500: '#6B7174',
          600: '#505659',
          700: '#3B4043',
          800: '#272B2D',
          900: '#16181A',
        },
      },
      fontFamily: {
        heading: ['Quicksand', 'sans-serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '4rem',
        lg: '6rem',
        xl: '8rem',
        '2xl': '10rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
