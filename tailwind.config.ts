import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        syne:  ["Syne", "system-ui", "sans-serif"],
        space: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      colors: {
        teal:  { DEFAULT: "#00B4A6", dark: "#008F83", light: "#33C5B9" },
        coral: { DEFAULT: "#F25240" },
      },
      animation: {
        marquee: "marquee 36s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
