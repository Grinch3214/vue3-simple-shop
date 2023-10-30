/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
		screens: {
      sm: '600px',
      md: '860px',
      lg: '1024px',
      xl: '1410px',
    },
    extend: {
			boxShadow: {
        'border-custom': '0 0 5px 0 rgba(71, 85, 105, 1)',
      }
		},
  },
  plugins: [],
}