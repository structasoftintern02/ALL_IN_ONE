/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        corporate: {
          primary: '#0F172A',     // Deep Slate/Navy
          secondary: '#1E293B',   // Darker Slate
          accent: '#0D9488',      // Emerald Teal
          highlight: '#D97706',   // Amber Gold
          bg: '#F8FAFC',          // Soft Light Slate
          card: '#FFFFFF',
          border: '#E2E8F0',
        },
        fintech: {
          primary: '#4F46E5',     // Indigo
          secondary: '#4338CA',   // Deep Indigo
          accent: '#06B6D4',      // Bright Cyan
          highlight: '#10B981',   // Neon Emerald
          bg: '#F3F4F6',          // Crisp Grey
          card: '#FFFFFF',
          border: '#E5E7EB',
        },
        eco: {
          primary: '#15803D',     // Rich Eco Green
          secondary: '#166534',   // Deep Forest Green
          accent: '#EAB308',      // Solar Yellow/Gold
          highlight: '#059669',   // Vivid Emerald
          bg: '#F0FDF4',          // Soft Tint Mint
          card: '#FFFFFF',
          border: '#DCFCE7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'glow-fintech': '0 0 20px rgba(79, 70, 229, 0.15)',
        'glow-eco': '0 0 20px rgba(21, 128, 61, 0.15)',
        'glow-corporate': '0 0 20px rgba(15, 23, 42, 0.12)',
      }
    },
  },
  plugins: [],
}
