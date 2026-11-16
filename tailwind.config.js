/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: '#005733',
          forestDark: '#004528',
          forestLight: '#0d6b42',
          lime: '#C5F176',
          limeHover: '#B4E85B',
          amber: '#F59E0B',
          ecoGreen: '#10B981',
        },
        surface: {
          white: '#FFFFFF',
          page: '#F9FAF4',
          card: '#F3F4EE',
          dark: '#17231D',
          darkCard: '#1E2D26',
        },
        text: {
          primary: '#1A1C19',
          secondary: '#3F4942',
          eyebrow: '#4B6D00',
          onDark: '#E8E9E3',
          onDarkMuted: '#A3AFA7',
        },
        border: {
          light: '#E2E3DD',
          card: '#E8EAE3',
          forest: '#3D6752',
          darkSubtle: 'rgba(255, 255, 255, 0.12)',
        }
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(23, 35, 29, 0.06)',
        'elevated': '0 12px 32px -4px rgba(23, 35, 29, 0.12)',
        'glow-lime': '0 0 24px -4px rgba(197, 241, 118, 0.35)',
      },
      maxWidth: {
        'container': '1184px',
        'canvas': '1280px',
      }
    },
  },
  plugins: [],
}

