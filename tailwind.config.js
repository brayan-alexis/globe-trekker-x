/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  content: ['./public/index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        'primary': '#362FD9',
        'secondary': '#1AACAC',
        'tertiary': '#2E97A7',
      },
      fontFamily: {
        'Lato': 'Lato, sans-serif',
      },
      backgroundImage: {
        'bali': "url('../img/bali.jpg')",
        'capeTown': "url('../img/cape-town.jpg')",
        'istanbul': "url('../img/istanbul.jpg')",
        'kyoto': "url('../img/kyoto.jpg')",
        'machuPicchu': "url('../img/machu-picchu.jpg')",
        'mexicoCity': "url('../img/mexico-city.jpg')",
        'newYork': "url('../img/new-york.jpg')",
        'paris': "url('../img/paris.jpg')",
        'prague': "url('../img/prague.jpg')",
        'rioDeJaneiro': "url('../img/rio-de-janeiro.jpg')",
        'rioDeJaneiroDesktop': "url('../img/rio-de-janeiro-desktop.jpg')",
        'rome': "url('../img/rome.jpg')",
        'santorini': "url('../img/santorini.jpg')",
        'sydney': "url('../img/sydney.jpg')",
        'venice': "url('../img/venice.jpg')",
        'sanFrancisco': "url('../img/sanFrancisco.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

