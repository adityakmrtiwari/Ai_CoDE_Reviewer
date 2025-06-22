// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // adjust based on your project structure
    './public/index.html',             // if you're using an HTML entry point
  ],
  theme: {
    extend: {
      animation: {
    gradient: "gradient 10s ease infinite",
  },
  keyframes: {
    gradient: {
      '0%, 100%': {
        backgroundPosition: '0% 50%',
      },
      '50%': {
        backgroundPosition: '100% 50%',
      },
    },
  },
    },
  },
  plugins: [],
}
