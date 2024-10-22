/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'primary': ['BarQ-Bold'],
      'secondary': ['Josefin-Sans-Regular'],
    },
    extend: {
      backgroundColor: {
        'primary': ['#ffffff'],
        'secondary': ['#25273c'],
      },
    },
  },
  plugins: [],
}

