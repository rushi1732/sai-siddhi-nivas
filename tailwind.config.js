/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        chateau: {
          river: '#132c25',     // Deep lush Periyar river emerald
          riverDark: '#0b1c17', // Dark night river water
          riverLight: '#244e43',// Shallow backwater teal green
          terracotta: '#b85834',// Traditional Kerala terracotta roof tile
          terracottaHover: '#a04826',
          sand: '#f7f4ed',      // Warm Kerala ivory parchment
          sandDark: '#ebe4d3',  // Aged limestone / stucco
          gold: '#c59d5f',      // Heritage brass lamp glow
          goldHover: '#b28b4c',
          charcoal: '#1a221f',  // Text dark slate
          muted: '#627068',     // Subdued text
          border: '#ded7c5',    // Subtle earthen border
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
