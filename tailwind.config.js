/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scaleInOut: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0' },
          '16.67%': { transform: 'scale(1.5)', opacity: '1' }, // 1 second
          '33.33%': { transform: 'scale(1)', opacity: '1' },  // 2 seconds
          '50%': { transform: 'scale(0.5)', opacity: '1' },   // 3 seconds
          '66.67%': { transform: 'scale(1.5)', opacity: '1' },// 4 seconds
          '83.33%': { transform: 'scale(1)', opacity: '1' },  // 5 seconds
        },
      },
      animation: {
        scaleInOut: 'scaleInOut 6s ease-in-out',
      },
    },
  },
  plugins: [],
}