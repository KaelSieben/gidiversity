/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#',
        },
        blue: {
          200: '#',
          300: '#',
          400: '#',
          500: '#',
          600: '#',
          700: '#',
          800: '#',
          900: '#',
          1000: '#',
        },
        secondary: {
          100: '#',
        },
        green: {
          200: '#',
          300: '#',
          400: '#',
          500: '#',
        },
        white: {
          100: '#',
        },
        gray: {
          100: '#',
          200: '#',
          300: '#',
          400: '#',
          500: '#',
          600: '#',
          700: '#',
          800: '#',
          900: '#',
          1000: '#',
          1100: '#',
          1200: '#',
        },
      },
    },
  },
  plugins: [],
};
