/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: '#F64B56',
        gray_1: '#2D2E32',
        gray_2: '#25262A',
        gray_3: '#1d1e20',
      }
    },
  },
  plugins: [],
}

