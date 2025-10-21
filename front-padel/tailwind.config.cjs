/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--geist-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
