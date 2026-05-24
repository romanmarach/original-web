/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0f',
        paper: '#f2f0eb',
        gold: '#c8a96e',
        'gold-dim': '#7a5f34',
        rust: '#9b3a1e',
        cream: '#e8e4db',
        'muted-fg': '#6b6860',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
        body: ['Syne', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'ink-base': 'linear-gradient(135deg, #0a0a0f 0%, #0f0f18 100%)',
      },
    },
  },
  plugins: [],
}
