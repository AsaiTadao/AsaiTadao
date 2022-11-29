/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        btnBgColor:'#CC0000',
        btnTextColor:'#FFFFFF',
        lftBgColor:'#CECECE',
        lftTxtColor:'#2F4F4F',
        rgtBgColor:'#FFFFFF',
        rgtTxtColor:'#000000',
        darkBtnBgColor:'#F0F8FF',
        darkBtnTextColor:'#800080',
        darkLftBgColor:'#FFFFFF',
        darkLftTxtColor:'#696969',
        darkRgtBgColor:'#008080',
        darkRgtTxtColor:'#FFFFFF'
      }
    },
  },
  plugins: [],
}
