/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    fontFamily: {
      display: ['Spectral', 'serif'],
      serif:   ['Spectral', 'serif'],
      sans:    ['DM Sans', 'system-ui', 'sans-serif'],
      mono:    ['JetBrains Mono', 'ui-monospace', 'monospace'],
    },
    extend: {
      colors: {
        base:    'var(--color-bg)',
        text:    'var(--color-text)',
        surface: 'var(--color-surface)',
        border:  'var(--color-border)',
        accent:  'var(--color-accent)',
      },
      boxShadow: {
        theme: 'var(--shadow-main)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm:  'calc(var(--radius) * 0.5)',
        md:  'var(--radius)',
        lg:  'calc(var(--radius) * 1.5)',
        xl:  'calc(var(--radius) * 2)',
        full: '9999px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
