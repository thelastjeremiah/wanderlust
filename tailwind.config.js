/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./page/*.html'],
  theme: {
    extend: {
      colors: {
        'facebook': '#3B5998',
        'gmail': '#D44638',
      },
      backgroundColor: {
        'main-cover': '#03a9f426',
        'main-cover-mobile':'#1516168a'
        // #1516168a
      },
    },
  },
  plugins: [],
}

