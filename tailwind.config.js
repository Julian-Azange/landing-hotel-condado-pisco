/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Paleta elegante dorada y futurista
        'gold-primary': '#D4AF37',
        'gold-secondary': '#F4E4BC',
        'gold-accent': '#FFD700',
        'gold-dark': '#B8860B',
        'gold-light': '#FFF8DC',

        // Colores base elegantes
        'dark-elegant': '#0F0F0F',
        'dark-soft': '#1A1A1A',
        'dark-medium': '#2D2D2D',
        'white-pure': '#FFFFFF',
        'white-soft': '#FAFAFA',
        'gray-elegant': '#6B7280',
        'gray-light': '#9CA3AF',

        // Colores de acento futuristas
        'platinum': '#E5E4E2',
        'silver': '#C0C0C0',
        'bronze': '#CD7F32',
        'copper': '#B87333',

        // Gradientes elegantes
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #B8860B 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 50%, #2D2D2D 100%)',
        'gradient-elegant': 'linear-gradient(135deg, #2D2D2D 0%, #1A1A1A 100%)',

        // Glassmorphism
        'glass-gold': 'rgba(212, 175, 55, 0.1)',
        'glass-dark': 'rgba(15, 15, 15, 0.8)',
        'glass-white': 'rgba(255, 255, 255, 0.05)',

        // Textos
        'text-primary': '#FFFFFF',
        'text-secondary': '#E5E4E2',
        'text-muted': '#9CA3AF',
        'text-gold': '#D4AF37',
        'text-dark': '#0F0F0F',
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-inset': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        'modern': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'modern-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
