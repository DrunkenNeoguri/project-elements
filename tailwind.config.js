/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "2xs": ["10px", "14px"],
      "1xs": ["12px", "16px"],
      xs: ["14px", "18px"],
      sm: ["16px", "20px"],
      base: ["18px", "24px"],
      lg: ["20px", "26px"],
      xl: ["24px", "32px"],
      "1xl": ["28px", "36px"],
      "2xl": ["32px", "40px"],
    },
    extend: {
      fontFamily: {
        gmarketSans: ["var(--font-gmarket-sans)"],
      },
      colors: {
        primary: "#1E90FF",
        primaryDeep: "#0F4A84",
        primarySemiLight: "#4E95FF",
        primaryLight: "#A6CAFF",
        secondary: "#008D18",
        white: "#FFFFFF",
        black: "#373737",
        error: "#D80000",
        invalid: "#909090",
        invalidLight: "#F7F7F7",
        shadow: "#00000064",
        shadowLight: "#0000004D",
        shadowModal: "#37373773",
      },
    },
  },
  plugins: [],
};

// "scripts": {
//   "dev": "vite",
//   "build": "tsc && vite build",
//   "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
//   "preview": "vite preview"
// },
