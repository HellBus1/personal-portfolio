/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.015em',
        normal: '0',
        wide: '0.04em',
        wider: '0.08em',
      },
      colors: {
        brand: {
          teal: '#2dd4bf',
          cyan: '#38bdf8',
          dark: '#0a0d14',
          slate: '#101522',
          border: 'rgba(255, 255, 255, 0.08)',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myDark: {
          "primary": "#2dd4bf", // Crisp vivid teal accent
          "primary-focus": "#14b8a6",
          "primary-content": "#042f2e",

          "secondary": "#38bdf8", // Sky cyan secondary
          "secondary-focus": "#0284c7",
          "secondary-content": "#082f49",

          "accent": "#a78bfa", // Lavender accent
          "accent-focus": "#8b5cf6",
          "accent-content": "#2e1065",

          "neutral": "#151b2b",
          "neutral-focus": "#1e263c",
          "neutral-content": "#f1f5f9",

          "base-100": "#0a0d14", // Deep rich background
          "base-200": "#101522", // Card surface
          "base-300": "#161d2e", // Elevated card surface
          "base-content": "#94a3b8", // High-legibility slate text

          "info": "#38bdf8",
          "success": "#34d399",
          "warning": "#fbbf24",
          "error": "#f87171"
        },
        myLight: {
          "primary": "#0d9488", // Deep readable teal
          "primary-focus": "#0f766e",
          "primary-content": "#ffffff",

          "secondary": "#0284c7",
          "secondary-focus": "#0369a1",
          "secondary-content": "#ffffff",

          "accent": "#7c3aed",
          "accent-focus": "#6d28d9",
          "accent-content": "#ffffff",

          "neutral": "#e2e8f0",
          "neutral-focus": "#cbd5e1",
          "neutral-content": "#0f172a",

          "base-100": "#fafaf9", // Warm paper background
          "base-200": "#ffffff", // Pure white card surface
          "base-300": "#f4f4f5", // Subtle nested surface
          "base-content": "#475569", // Deep gray text

          "info": "#0284c7",
          "success": "#059669",
          "warning": "#d97706",
          "error": "#dc2626"
        }
      }
    ]
  }
}
