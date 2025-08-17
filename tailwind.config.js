/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',    // Azul oscuro del logo PITECH
        secondary: '#3B82F6',  // Azul medio
        accent: '#06B6D4',     // Cyan tecnológico
        tech: '#0EA5E9',       // Azul tecnológico
        dark: '#0F172A',       // Azul muy oscuro
        light: '#F8FAFC',      // Gris muy claro
        success: '#10B981',    // Verde para éxito
        warning: '#F59E0B',    // Amarillo para advertencias
        error: '#EF4444',      // Rojo para errores
        gray: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        cyan: {
          50: '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
          700: '#0E7490',
          800: '#155E75',
          900: '#164E63',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        tech: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-tech': 'linear-gradient(135deg, #0EA5E9 0%, #06B6D4 100%)',
        'gradient-blue': 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
        'gradient-primary': 'linear-gradient(135deg, #1E3A8A 0%, #1E40AF 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
      },
      boxShadow: {
        'tech': '0 10px 25px -3px rgba(14, 165, 233, 0.3)',
        'tech-lg': '0 20px 40px -5px rgba(14, 165, 233, 0.4)',
        'blue': '0 10px 25px -3px rgba(59, 130, 246, 0.3)',
        'blue-lg': '0 20px 40px -5px rgba(59, 130, 246, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
} 