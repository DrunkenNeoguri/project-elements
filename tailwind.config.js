/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    keyframes: {
      bar: {
        "0%, 80%, 100%": {
          "box-shadow": "0 0",
          height: "4em",
        },
        "40%": {
          "box-shadow": "0 -2em",
          height: "5em",
        },
      },
      roundSpin: {
        "0%, 100%": {
          "box-shadow":
            "0em -2.6em 0em 0em #A6CAFF, 1.8em -1.8em 0 0em #D4E4FF, 2.5em 0em 0 0em #D4E4FF, 1.75em 1.75em 0 0em #D4E4FF, 0em 2.5em 0 0em #D4E4FF, -1.8em 1.8em 0 0em #D4E4FF, -2.6em 0em 0 0em #C6DBFF, -1.8em -1.8em 0 0em #b6d3ff",
        },
        "12.5%": {
          "box-shadow":
            "0em -2.6em 0em 0em #B6D3FF, 1.8em -1.8em 0 0em #A6CAFF, 2.5em 0em 0 0em #D4E4FF, 1.75em 1.75em 0 0em #D4E4FF, 0em 2.5em 0 0em #D4E4FF, -1.8em 1.8em 0 0em #D4E4FF, -2.6em 0em 0 0em #D4E4FF, -1.8em -1.8em 0 0em #C6DBFF",
        },
        "25%": {
          "box-shadow":
            "0em -2.6em 0em 0em #C6DBFF, 1.8em -1.8em 0 0em #B6D3FF, 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em #D4E4FF, 0em 2.5em 0 0em #D4E4FF, -1.8em 1.8em 0 0em #D4E4FF, -2.6em 0em 0 0em #D4E4FF, -1.8em -1.8em 0 0em #D4E4FF",
        },
        "37.5%": {
          "box-shadow":
            "0em -2.6em 0em 0em #D4E4FF, 1.8em -1.8em 0 0em #C6DBFF, 2.5em 0em 0 0em #B6D3FF, 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em #D4E4FF, -1.8em 1.8em 0 0em #D4E4FF, -2.6em 0em 0 0em #D4E4FF, -1.8em -1.8em 0 0em #D4E4FF",
        },
        "50%": {
          "box-shadow":
            "0em -2.6em 0em 0em #D4E4FF, 1.8em -1.8em 0 0em #D4E4FF, 2.5em 0em 0 0em #C6DBFF, 1.75em 1.75em 0 0em #B6D3FF, 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em #D4E4FF, -2.6em 0em 0 0em #D4E4FF, -1.8em -1.8em 0 0em #D4E4FF",
        },
        "62.5%": {
          "box-shadow":
            "0em -2.6em 0em 0em #D4E4FF, 1.8em -1.8em 0 0em #D4E4FF, 2.5em 0em 0 0em #D4E4FF, 1.75em 1.75em 0 0em #C6DBFF, 0em 2.5em 0 0em #B6D3FF, -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em #D4E4FF, -1.8em -1.8em 0 0em #D4E4FF",
        },
        "75%": {
          "box-shadow":
            "0em -2.6em 0em 0em #D4E4FF, 1.8em -1.8em 0 0em #D4E4FF, 2.5em 0em 0 0em #D4E4FF, 1.75em 1.75em 0 0em #D4E4FF, 0em 2.5em 0 0em #C6DBFF, -1.8em 1.8em 0 0em #B6D3FF, -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em #D4E4FF",
        },
        "87.5%": {
          "box-shadow":
            "0em -2.6em 0em 0em #D4E4FF, 1.8em -1.8em 0 0em #D4E4FF, 2.5em 0em 0 0em #D4E4FF, 1.75em 1.75em 0 0em #D4E4FF, 0em 2.5em 0 0em #D4E4FF, -1.8em 1.8em 0 0em #C6DBFF, -2.6em 0em 0 0em #B6D3FF, -1.8em -1.8em 0 0em #ffffff",
        },
      },
    },
    animation: {
      roundSpin: "roundSpin 1.1s infinite ease",
      bar: "bar 1s infinite ease-in-out",
    },
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
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "translate-z": (value) => ({
            "--tw-translate-z": value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme("translate"), supportsNegativeValues: true }
      );
    }),
  ],
};

// "scripts": {
//   "dev": "vite",
//   "build": "tsc && vite build",
//   "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
//   "preview": "vite preview"
// },
