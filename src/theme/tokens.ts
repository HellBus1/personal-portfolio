/**
 * Design Tokens System
 * Single source of truth for portfolio styling, colors, typography, spacing, and elevation.
 *
 * Edit this file to customize the visual theme across the entire application.
 */

export const tokens = {
  colors: {
    dark: {
      bg: '#0a0d14', // Deep obsidian navy background
      surface: '#101522', // Card & panel surface
      surfaceHover: '#161d2e', // Elevated hover surface
      surfaceGlass: 'rgba(16, 21, 34, 0.75)', // Glassmorphism backdrop
      border: 'rgba(255, 255, 255, 0.08)', // Subtle border
      borderHover: 'rgba(45, 212, 191, 0.4)', // Accent-illuminated border on hover
      borderStrong: 'rgba(255, 255, 255, 0.16)',

      text: '#f1f5f9', // Primary high-contrast text
      textMuted: '#94a3b8', // Secondary readable text
      textSubtle: '#64748b', // Muted timestamps & badges

      primary: '#2dd4bf', // Crisp teal accent (high readability)
      primaryHover: '#14b8a6',
      primaryFocus: '#5eead4',
      primaryContent: '#042f2e',

      secondary: '#38bdf8', // Sky cyan secondary
      secondaryContent: '#082f49',

      accent: '#a78bfa', // Lavender accent for select highlights
      accentContent: '#2e1065',

      neutral: '#151b2b',
      neutralContent: '#f1f5f9',

      success: '#34d399',
      warning: '#fbbf24',
      error: '#f87171',
      info: '#38bdf8'
    },
    light: {
      bg: '#fafaf9', // Warm stone paper background
      surface: '#ffffff', // Clean white card surface
      surfaceHover: '#f4f4f5',
      surfaceGlass: 'rgba(255, 255, 255, 0.85)',
      border: 'rgba(0, 0, 0, 0.08)',
      borderHover: 'rgba(13, 148, 136, 0.4)',
      borderStrong: 'rgba(0, 0, 0, 0.16)',

      text: '#0f172a', // Deep slate primary text
      textMuted: '#475569',
      textSubtle: '#94a3b8',

      primary: '#0d9488', // Rich teal
      primaryHover: '#0f766e',
      primaryFocus: '#115e59',
      primaryContent: '#ffffff',

      secondary: '#0284c7',
      secondaryContent: '#ffffff',

      accent: '#7c3aed',
      accentContent: '#ffffff',

      neutral: '#e2e8f0',
      neutralContent: '#0f172a',

      success: '#059669',
      warning: '#d97706',
      error: '#dc2626',
      info: '#0284c7'
    }
  },

  typography: {
    fonts: {
      display:
        '"Plus Jakarta Sans", "Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      sans: '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace'
    },
    sizes: {
      hero: 'clamp(2.5rem, 5vw, 4.25rem)',
      h1: 'clamp(2rem, 4vw, 3rem)',
      h2: 'clamp(1.5rem, 3vw, 2.25rem)',
      h3: 'clamp(1.25rem, 2vw, 1.5rem)',
      bodyLg: '1.125rem',
      body: '0.9375rem',
      small: '0.8125rem',
      tiny: '0.75rem'
    },
    lineHeights: {
      tight: 1.1,
      snug: 1.25,
      normal: 1.6,
      relaxed: 1.75
    },
    letterSpacing: {
      tighter: '-0.03em',
      tight: '-0.015em',
      normal: '0',
      wide: '0.04em',
      wider: '0.08em'
    }
  },

  spacing: {
    sectionGap: 'clamp(4.5rem, 9vw, 8rem)',
    cardPadding: '1.5rem',
    containerMax: '68rem' // ~1088px - optimal reading & layout containment
  },

  radii: {
    sm: '0.375rem',
    md: '0.625rem',
    lg: '0.875rem',
    xl: '1.25rem',
    full: '9999px'
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    card: '0 4px 20px -2px rgba(0, 0, 0, 0.15)',
    cardHover: '0 12px 30px -4px rgba(0, 0, 0, 0.3)',
    glow: '0 0 25px -5px rgba(45, 212, 191, 0.25)'
  },

  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
    smooth: '350ms cubic-bezier(0.16, 1, 0.3, 1)'
  }
} as const

export type ThemeMode = 'dark' | 'light'
export type DesignTokens = typeof tokens
