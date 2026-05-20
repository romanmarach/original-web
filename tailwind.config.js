/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#08090D',
        slate: '#111827',
        steel: '#9CA3AF',
        accent: '#22D3EE',
      },
      boxShadow: {
        glow: '0 0 40px rgba(34, 211, 238, 0.18)',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'mesh-dark': 'radial-gradient(circle at 20% 10%, rgba(34,211,238,0.18), transparent 40%), radial-gradient(circle at 80% 20%, rgba(148,163,184,0.15), transparent 35%), linear-gradient(180deg, #05060A 0%, #0B1020 100%)',
      },
    },
  },
  plugins: [],
}
