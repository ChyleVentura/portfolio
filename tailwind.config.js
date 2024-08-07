/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        "primary": "rgba(var(--text-primary))",
        "secondary": "rgba(var(--text-secondary))",
        card: "rgba(var(--card))",
        accent: "rgba(var(--accent))",
      },
    },
  },
  plugins: [],
}

