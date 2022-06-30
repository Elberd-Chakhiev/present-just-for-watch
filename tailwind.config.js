/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
      extend: {
        colors: {
          'blue--theme': '#17375E',
          'green--theme': '#92D050',
          'red--theme': '#FF0000',
        }
      },


      screens: {
          '2xl': {'max': '1919px'},
          'xl': {'max': '1023px'},
          'lg': {'max': '767px'},
          'md': {'max': '539px'},
          'sm': {'max': '360px'},
          'xm': {'max': '320px'},
        },
  },
  plugins: [],
}