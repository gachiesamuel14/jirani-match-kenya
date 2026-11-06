/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        kenyan: {
          green: '#006600',
          red: '#BB0000',
          black: '#000000',
          gold: '#FFD700',
        },
      },
    },
  },
  plugins: [],
};