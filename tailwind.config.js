/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      objectPosition: {
        topCenter: ['100% 25%']
      }
    },
  },
  plugins: [],
}

