/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('color'),
        'Blue': '#4f7df3',
        'PaleBlue': '#c2d3ff',
        'LightRed': '#ff5263',
        'Gray': '#969696',
        'VeryDarkBlue': '#151f29',
      }),
      textColor: {
        'Blue': '#4f7df3',
        'PaleBlue': '#c2d3ff',
        'LightRed': '#ff5263',
        'Gray': '#969696',
        'VeryDarkBlue': '#151f29',
      },
      fontFamily: {
        'LibreFranklin': ['Libre Franklin', 'sans-serif'],
      },
      colors: {
        'Blue': '#4f7df3',
        'Gray': '#969696',
      }
    },
  },
  plugins: [],
}

