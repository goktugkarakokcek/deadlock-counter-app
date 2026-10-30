/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deadlock: {
          bg: "#0b0f17",
          panel: "#131b2e",
          card: "#1a243b",
          amber: "#f59e0b",
          soul: "#34d399",
          spirit: "#a855f7",
          weapon: "#fb923c",
          vitality: "#4ade80",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Georgia', ' Cambria', 'serif'],
      },
    },
  },
  plugins: [],
};
