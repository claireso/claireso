const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["-apple-system", "sans-serif"],
    },
    screens: {
      xs: "385px",
      ...defaultTheme.screens,
    },
    extend: {
      borderWidth: {
        12: "12px",
        24: "24px",
      },
    },
  },
  plugins: [],
};
