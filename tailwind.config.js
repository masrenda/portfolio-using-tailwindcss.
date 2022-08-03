/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        tp: '#14b8a6',
        brf: '#334155'
      },
      screens: {
        '2xl': '1320px'
      }
    }, 
  },
  plugins: [],
}
