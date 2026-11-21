/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hotel: {
          forest: '#133826',      // Deep lush forest green
          forestDark: '#0c2419',  // Deep night forest green
          forestLight: '#1d4f36', // Vibrant botanical green
          forestMuted: '#2a5f44',
          gold: '#c5a059',        // Champagne gold
          goldLight: '#dfbe7e',   // Light champagne
          goldDark: '#a38139',    // Deep burnished gold
          goldHover: '#b28d44',
          ivory: '#faf8f5',       // Warm royal ivory
          ivoryDark: '#f3ede2',   // Soft linen ivory
          beige: '#ede4d4',       // Soft neutral beige
          beigeDark: '#ded3be',   // Architectural sandstone
          charcoal: '#141c18',    // Deep slate charcoal text
          muted: '#5a6b62',       // Subdued elegant body text
          border: '#e2dacf',      // Refined luxury border
          sand: '#faf8f5',
          terracotta: '#c5a059',  // Gold accent mapped for harmony
          terracottaHover: '#b28d44',
        },
        // Chateau backward-compatibility mapping
        chateau: {
          river: '#133826',
          riverDark: '#0c2419',
          riverLight: '#1d4f36',
          terracotta: '#c5a059',
          terracottaHover: '#b28d44',
          sand: '#faf8f5',
          sandDark: '#f3ede2',
          gold: '#c5a059',
          goldHover: '#b28d44',
          charcoal: '#141c18',
          muted: '#5a6b62',
          border: '#e2dacf',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(12, 36, 25, 0.12)',
        'luxury-hover': '0 30px 60px -15px rgba(12, 36, 25, 0.22)',
      }
    },
  },
  plugins: [],
}
