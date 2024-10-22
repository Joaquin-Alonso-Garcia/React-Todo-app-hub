/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'primary': ['Josefin Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'checkBackground': 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
      },
      colors: {
        'brightBlue': 'hsl(220, 98%, 61%)',
        'veryLightGray': 'hsl(0, 0%, 98%)',
        'veryLightGrayishBlue': 'hsl(236, 33%, 92%)',
        'lightGrayishBlue': 'hsl(233, 11%, 84%)',
        'grayishBlue': 'hsl(236, 9%, 61%)',
        'veryDarkGrayishBlue-100': 'hsl(235, 19%, 35%)',
        'darkBlue': 'hsl(235, 21%, 11%)',
        'darkDesaturatedBlue': 'hsl(235, 24%, 19%)',
        'darkLightGrayishBlue': 'hsl(234, 39%, 85%)',
        'darkGrayishBlue': 'hsl(234, 11%, 52%)',
        'darkGrayishBlue-200': 'hsl(233, 14%, 35%)',
        'darkGrayishBlue-300': 'hsl(237, 14%, 26%)',
      },
      screens: {
        'md': '600px',
      }
    },
  },
  plugins: [],
}

