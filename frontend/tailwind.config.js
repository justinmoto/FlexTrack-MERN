/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {'poppins' : ['Poppins', 'sans-serif']}
    },
    screens: {

      'sm': {'max': '640px'},
      'md': {'max': '768px'},
      'lg': {'max': '1024px'},
      'xl': {'max': '1280px'},
      '2xl': {'max': '1580px'},
    },
  },
  plugins: [],
}

