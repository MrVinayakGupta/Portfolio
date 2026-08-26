/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        dark: {
          bg: '#080c16',
          surface: '#0d1322',
          card: '#121a2d',
          border: '#1e293b',
          muted: '#94a3b8'
        },
        light: {
          bg: '#fcfbfa',
          surface: '#ffffff',
          card: '#ffffff',
          border: '#f3e8d2',
          text: '#0f172a',
          muted: '#64748b'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Cinzel', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Cinzel', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(217, 119, 6, 0.08)',
        'luxury-dark': '0 20px 40px -15px rgba(14, 165, 233, 0.08)',
        'glow-gold': '0 0 25px rgba(245, 158, 11, 0.25)',
        'glow-cyan': '0 0 25px rgba(56, 189, 248, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.15)',
        'glass-gold': '0 8px 32px 0 rgba(217, 119, 6, 0.08)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
