/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      colors: {
        green: {
          50:  '#E1F5EE',
          100: '#9FE1CB',
          300: '#5DCAA5',
          500: '#1D9E75',
          600: '#0F6E56',
          700: '#085041',
          900: '#04342C',
        },
        dark: {
          base:      '#0a0f0d',
          surface:   '#0e1a14',
          subtle:    '#070c09',
          highlight: '#0a1f18',
        },
        border: {
          DEFAULT: '#1a2e24',
          accent:  'rgba(29,158,117,0.2)',
        },
      },
      letterSpacing: {
        tighter: '-0.04em',
      },
      animation: {
        'fade-up':   'fadeUp 0.7s ease both',
        'pulse-dot': 'pulseDot 2s ease infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
}
