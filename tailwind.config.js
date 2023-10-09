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
        'bali': "url('/public/img/bali.jpg')",
        'capeTown': "url('/public/img/cape-town.jpg')",
        'istanbul': "url('/public/img/istanbul.jpg')",
        'kyoto': "url('/public/img/kyoto.jpg')",
        'machuPicchu': "url('/public/img/machu-picchu.jpg')",
        'mexicoCity': "url('/public/img/mexico-city.jpg')",
        'newYork': "url('/public/img/new-york.jpg')",
        'paris': "url('/public/img/paris.jpg')",
        'prague': "url('/public/img/prague.jpg')",
        'rioDeJaneiro': "url('/public/img/rio-de-janeiro.jpg')",
        'rioDeJaneiroDesktop': "url('/public/img/rio-de-janeiro-desktop.jpg')",
        'rome': "url('/public/img/rome.jpg')",
        'santorini': "url('/public/img/santorini.jpg')",
        'sydney': "url('/public/img/sydney.jpg')",
        'venice': "url('/public/img/venice.jpg')",
        'sanFrancisco': "url('/public/img/sanFrancisco.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

