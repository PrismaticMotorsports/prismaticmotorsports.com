import type { Config } from 'tailwindcss'
import colors from "tailwindcss/colors"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      slate: colors.slate,
      peach: "#ff7664",
      cdBurple: {
        300: "#7A7fB4",
        400: "#4953A4",
        500: "#272D64",
        600: "#131633"
      },
      cdSpec: {
        burple: "#272D64",
        pink: "#D51B5F",
        purple: "#904199",
        blue: "#0AA0DB",
        green: "#81BE41",
        yellow: "#FECE0A"
      }
    },
    extend: {
      fontFamily: {
        pp: ['var(--font-pp)'],
      },
    },
  },
  plugins: [],
} satisfies Config
