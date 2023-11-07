/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#FCFFE7",
        secondary: "#BAD7E9",
        accent: "#EB455F",
        dark: "#2B3467",
      },
    },
  },
  plugins: [],
};
