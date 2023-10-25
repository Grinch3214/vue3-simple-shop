/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
		screens: {
      sm: '520px',
      md: '768px',
      lg: '992px',
      xl: '1310px',
    },
    extend: {
			boxShadow: {
        'border-custom': '0 0 5px 0 rgba(71, 85, 105, 1)',
      }
		},
  },
  plugins: [],
}