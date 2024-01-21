/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark1: "#1e2124",
        dark2: "#282b30",
        dark3: "#36393e",
        dark4: "#424549"
      },
    },
  },
  plugins: [],
}

