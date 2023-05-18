/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily:{
      'inter': ['Poppins', 'sans-serif']
    },
    extend: {
      colors:{
        pigma : '#7F56DA',
        navigator : '#02D05B',
        darkNav : '#242629',
        darkBg : '#16161a'
      },
      aspectRatio:{
        'rect' : '5  / 1.05',
        'ress' : '5 / 1.5'
      },
      screens:{
        'hp' : '540px',
        'hpk' : '478px',
        'hpsk' : '376px'
      }
    },
  },
  plugins: [],
}

