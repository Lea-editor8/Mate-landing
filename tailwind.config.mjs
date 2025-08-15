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
        primary: {
          DEFAULT: '#1E40AF', // Azul base
          light: '#3B82F6',
          dark: '#1E3A8A',
        },
        secondary: {
          DEFAULT: '#F59E0B', // Amarillo base
          light: '#FCD34D',
          dark: '#B45309',
        },
        neutral: {
          DEFAULT: '#374151', // Gris base
          light: '#9CA3AF',
          dark: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}