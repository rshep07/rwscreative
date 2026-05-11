import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Archivo Black"', "system-ui", "sans-serif"],
        body:    ['"Archivo"',       "system-ui", "sans-serif"],
        mono:    ['"Space Mono"',    "monospace"],
      },
      colors: {
        ink:     "#0A0A0A",
        canvas:  "#E8E4DC",
        mid:     "#8A867E",
        dim:     "#1A1816",
        raised:  "#222018",
        rule:    "#2A2724",
        accent:  "#00BFFF",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
