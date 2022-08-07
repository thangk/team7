/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        '4xl': '1700px'
      },

      fontFamily: {
        'bebas-neue': ['Bebas Neue', 'cursive'],
        'barlow': ['Barlow', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
