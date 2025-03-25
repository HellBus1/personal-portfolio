/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myDark: {
          "primary": "#496e97",
          "primary-focus": "#3b5a7a",
          "primary-content": "#ffffff",

          "secondary": "#f6ad55",
          "secondary-focus": "#dd8c3f",
          "secondary-content": "#ffffff",

          "accent": "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",

          "neutral": "#111319",
          "neutral-focus": "#0e0f14",
          "neutral-content": "#ffffff",

          "base-100": "#1a1c26", // Darker for better shadow visibility
          "base-200": "#16181f", // Darker for better shadow visibility
          "base-300": "#12141a", // Darker for better shadow visibility
          "base-content": "#a9afc3",

          "info": "#2094f3",
          "success": "#009485",
          "warning": "#ff9900",
          "error": "#ff5724"
        },
        myLight: {
          "primary": "#3b82f6",
          "primary-focus": "#2563eb",
          "primary-content": "#ffffff",

          "secondary": "#fbbf24",
          "secondary-focus": "#f59e0b",
          "secondary-content": "#ffffff",

          "accent": "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",

          "neutral": "#e5e7eb", // Darker for better shadow visibility
          "neutral-focus": "#d1d5db", // Darker for better shadow visibility
          "neutral-content": "#1f2937",

          "base-100": "#ffffff", // Darker for better shadow visibility
          "base-200": "#f9fafb", // Darker for better shadow visibility
          "base-300": "#f3f4f6", // Darker for better shadow visibility
          "base-content": "#1f2937",

          "info": "#2094f3",
          "success": "#009485",
          "warning": "#ff9900",
          "error": "#ff5724"
        }
      }
    ]
  }
}

