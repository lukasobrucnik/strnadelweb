/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0047ab',
        'racing-blue': '#0047ab',
        secondary: '#d2f000',
        'phosphor-yellow': '#d2f000',
        tertiary: '#ff0000',
        'racing-red': '#ff0000',
        surface: '#131314',
        background: '#080808',
        'on-surface': '#e5e2e3',
        'on-surface-variant': '#c3c6d5',
        'surface-container-low': '#1c1b1c',
        'surface-container-lowest': '#0e0e0f',
        'surface-container': '#201f20',
        'surface-container-high': '#2a2a2b',
        outline: '#434653',
      },
      borderRadius: {
        DEFAULT: '0.1rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '9999px',
      },
      spacing: {
        gutter: '24px',
        unit: '4px',
        'margin-desktop': '64px',
        'margin-mobile': '16px',
      },
      fontFamily: {
        'headline-lg': ['Space Grotesk', 'Anybody', 'sans-serif'],
        'display-lg': ['Space Grotesk', 'Anybody', 'sans-serif'],
        'label-sm': ['JetBrains Mono', 'monospace'],
        'data-lg': ['JetBrains Mono', 'monospace'],
        'body-md': ['Hanken Grotesk', 'sans-serif'],
      },
      animation: {
        ticker: 'ticker 30s linear infinite',
        pulseSlow: 'pulse 2.4s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
