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
      scaleHeight: {
        "0%, 80%, 100%": {
          boxShadow: "0 0",
          height: "64px",
        },
        "40%": {
          boxShadow: "0 -32px",
          height: "80px",
        },
      },
      fadeIn: {
        from: {
          opacity: "0%",
        },
        to: {
          opacity: "100%",
        },
      },
      fadeOut: {
        from: {
          opacity: "100%",
        },
        to: {
          opacity: "0%",
        },
      },
      bar: {
        "0%, 80%, 100%": {
          "box-shadow": "0 0",
          height: "4em",
        },
        "40%": {
          "box-shadow": "0 -2em",
          height: "6em",
        },
      },
      barSide: {
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
      scaleHeight: "scaleHeight 1s infinite ease-in-out",
      fadeIn: "fadeIn 1s",
      fadeOut: "fadeOut 1s",
      roundSpin: "roundSpin 1.1s infinite ease",
      bar: "bar 1s infinite ease-in-out",
      barSide: "barSide 1s infinite ease-in-out",
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
        gray: "#D9D9D9",
        black: "#373737",
        error: "#D80000",
        invalid: "#909090",
        invalidLight: "#F7F7F7",
        shadow: "#00000064",
        shadowLight: "#0000004D",
        shadowModal: "#37373773",
        paletteColor01: "#898CFF",
        paletteColor02: "#FF89B5",
        paletteColor03: "#FFC53D",
        paletteColor04: "#90D4F7",
        paletteColor05: "#71E096",
        paletteColor06: "#F5A26F",
        paletteColor07: "#668DE5",
        paletteColor08: "#ED6D79",
        paletteColor09: "#21B7D1",
        paletteColor10: "#DA97E0",
        paletteColor11: "#B4EC3B",
        paletteColor12: "#FF96E3",
        paletteColor13: "#BB96FF",
        paletteColor14: "#22E69F",
        paletteSubColor01: "#B8BAFF",
        paletteSubColor02: "#FFB8D2",
        paletteSubColor03: "#FFDC89",
        paletteSubColor04: "#BCE5FA",
        paletteSubColor05: "#A9ECC0",
        paletteSubColor06: "#F9C7A8",
        paletteSubColor07: "#A3BAEF",
        paletteSubColor08: "#F4A7AE",
        paletteSubColor09: "#5AD0E5",
        paletteSubColor10: "#E8C0EC",
        paletteSubColor11: "#CFF381",
        paletteSubColor12: "#FFC0EE",
        paletteSubColor13: "#D6C0FF",
        paletteSubColor14: "#67EEBD",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-paletteSubColor(01|02|03|04|05|06|07|08|09|10|11|12|13|14|)/,
    },
  ],
};
