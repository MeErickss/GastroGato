/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FDFCF0',
          orange: '#FFB347',
          ink: '#2D241E',
          muted: '#F5F2E8',
        }
      },
    },
  },
  plugins: [],
}