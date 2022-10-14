/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors:{
        'mainblue': '#6E8E9B',
        'white':'#FFFFFF',
        'black':'#000000',
      }
    },
    fontFamily:{
      'mandali':['Mandali'],
      'raleway':['Raleway'],
    },
  },
  plugins: [],
}
