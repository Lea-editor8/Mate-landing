// tailwind.config.mjs
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,astro}", // ajusta según tu estructura de proyecto
  ],
  theme: {
    extend: {
      colors: {
        // Paleta personalizada
          primary: '#af1e1eff', // Azul base
          light: '#3B82F6',
          dark: '#1E3A8A'
      },
      fontFamily: {
          sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}