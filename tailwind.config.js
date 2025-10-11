/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#200934',
        secondary: '#f9f7f0',
        mustard: '#f8b454',
        lightText: '#e3e2d6',
        darkText: '#09090b',
        lightBlue: '#5e5ba9',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-0.5px)' },
          '50%': { transform: 'translateX(0.5px)' },
          '75%': { transform: 'translateX(-0.5px)' },
        },
      },
      animation: {
        shake: 'shake 0.6s ease-in-out',
      },
    },
  },
  plugins: [],
}
