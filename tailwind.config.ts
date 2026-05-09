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
        archivo: ['"Archivo Black"', "system-ui", "sans-serif"],
        mono:    ['"Space Mono"',   "monospace"],
        sans:    ['"Archivo"',      "system-ui", "sans-serif"],
      },
      colors: {
        blue: {
          DEFAULT: "#00BFFF",
          dim:     "rgba(0,191,255,0.1)",
          glow:    "rgba(0,191,255,0.25)",
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
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
