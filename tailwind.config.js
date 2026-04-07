/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: { DEFAULT: '#800000', dark: '#550000', light: '#A52A2A' },
        gold: { DEFAULT: '#D4AF37', light: '#F0D060', dark: '#B8962E', muted: '#C9A84C' },
        ivory: { DEFAULT: '#FFF8E7', dark: '#F5EED6', warm: '#FFF5D6' },
        temple: { DEFAULT: '#0B5D3B', light: '#0E7A4E', dark: '#084A2F' },
        cream: '#FFF8F0',
        charcoal: '#2C2C2C',
      },
      fontFamily: {
        telugu: ['Noto Sans Telugu', 'Mandali', 'sans-serif'],
        display: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Poppins', 'sans-serif'],
        script: ['Great Vibes', 'cursive'],
      },
      boxShadow: {
        'gold': '0 0 40px rgba(212,175,55,0.2)',
        'gold-lg': '0 0 80px rgba(212,175,55,0.25)',
        'card': '0 8px 40px rgba(0,0,0,0.12)',
        'glass': '0 8px 32px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite linear',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'diya-flicker': 'diya-flicker 2s ease-in-out infinite',
        'petal-fall': 'petal-fall 8s linear infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-500px 0' },
          '100%': { backgroundPosition: '500px 0' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,175,55,0.15)' },
          '50%': { boxShadow: '0 0 50px rgba(212,175,55,0.35)' },
        },
        'diya-flicker': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '25%': { opacity: 0.85, transform: 'scale(1.02)' },
          '50%': { opacity: 1, transform: 'scale(0.98)' },
          '75%': { opacity: 0.9, transform: 'scale(1.01)' },
        },
        'petal-fall': {
          '0%': { transform: 'translateY(-10%) rotate(0deg)', opacity: 0 },
          '10%': { opacity: 1 },
          '90%': { opacity: 1 },
          '100%': { transform: 'translateY(110vh) rotate(720deg)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
