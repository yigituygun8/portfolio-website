/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          lightHover: '#fcf4ff',
          darkHover: '#2a004a',
          darkTheme: '#11001f',
        },
        fontFamily: {
          outfit: ['var(--font-outfit)', 'sans-serif'],
          ovo: ['var(--font-ovo)', 'serif'],
          jetbrains: ['var(--font-jetbrains)', 'monospace'],
        },
    },
  },
  plugins: [],
};

export default config;