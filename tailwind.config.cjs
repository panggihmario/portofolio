/** @type {import('tailwindcss').Config} */
/*Purple 250 - Green 142 - Blue 230 - Pink 340 - yellow 47*/
const huecolor = 47
module.exports = {
  darkMode : 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        'tablet' : {
          'max' : '768px'
        }
      },
      colors : {
        primary : `hsl(${huecolor}, 88%, 53%)`,
        dark_primary : `hsl(${huecolor}, 30%, 8%)`,
        light_primary : 'hsl(47, 88%, 94%)',
        whitesmoke : '#F5F5F5',
        smoke : 'hsl(250, 8%, 45%)',
        light : 'hsl(250, 8%, 65%)'
      },
      fontFamily : {
        'poppins' : ['Poppins', 'sans-serif']
      },
      boxShadow : {
        'nav' : '0 -1px 4px rgba(0,0,0,.15)'
      },
      zIndex: {
        '100': '100',
      },
      gridTemplateColumns : {
        'main' : '.5fr 3fr',
        'max-content' : 'max-content',
        'medium' : 'max-content 1fr 1fr',
        'qualification' : '1fr max-content 1fr',
        'q-section' : '.6fr'
      },
      gridColumn : {
        '1/3'  : '1/3',
        'initial' : 'initial'
      },
      spacing : {
        'initial' : 'initial'
      },
      padding : {
        'input' : '.75rem 1rem .25rem',
        'text' : '.25rem .5rem .5rem 0',
        'footer' : '3rem 0 3.5rem 3rem'
      },
      borderRadius : {
        'half' : '50%'
      }
    },
  },
  plugins: [],
}

