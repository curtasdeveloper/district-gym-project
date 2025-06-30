/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Tell Tailwind to look at all JS/JSX/TS/TSX files in the src folder
  ],
  theme: {
    extend: {
      spacing: {
        'calc-center': 'calc(50% - 15vw)',
        'calc-center': 'calc(50% - 10vh)'
      },
      
    },
  },
  plugins: [],
}
