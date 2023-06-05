/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily:{
      'inter': ['Inter', 'sans-serif']
    },
    extend: {
      colors:{
        pigma : '#7F56DA',
        navigator : '#02D05B',
        darkNav : '#242629',
        darkBg : '#16161a',
        noHover : '#7d7d7d',
        HLig : '#272343',
        TexLig : '#2d334a',
        HDark : '#fffffe',
        TexDark : '#94a1b2'
      },
      aspectRatio:{
        'rect' : '5  / 1.05',
        'ress' : '5 / 1.5'
      },
      screens:{
        'hp' : '540px',
        'hpk' : '478px',
        'hpsk' : '376px',
        '425': '425px'
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwind-scrollbar')],
}

