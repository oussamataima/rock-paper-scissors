/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 3px 3px rgba(0, 0, 0, 0.20)',
      },
      textShadow: {
        'custom': '0px 3px 3px rgba(0, 0, 0, 0.20)',
      },
    },
  },
  plugins: [],
}