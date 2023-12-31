/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Bungee", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#FCFFE7",
        "primary-focus": "#E2E5CF",
        "primary-active": "#C9CCB8",
        secondary: "#BAD7E9",
        "secondary-focus": "#A7C1D1",
        "secondary-active": "#94ACBA",
        accent: "#EB455F",
        "accent-focus": "#D33E55",
        "accent-active": "#BC374C",
        dark: "#2B3467",
        "dark-focus": "#555C85",
        "dark-active": "#404876",
      },
    },
  },
  plugins: [],
};
