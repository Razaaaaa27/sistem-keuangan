/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
    
  ],
  theme: {
    extend: {
      fontFamily :{
      'inter': ['inter', 'sans-serif'],
      'golos': ['Golos Text', 'sans-serif'],
      'bobon' : ['Tilt Prism', 'sans-serif'],
      'bobon1' : ['Protest Revolution', 'sans-serif'],
    },
  },
},


  plugins: [],
}


