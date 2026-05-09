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
        raleway: ["Raleway", "system-ui", "sans-serif"],
        inter:   ["Inter",   "system-ui", "sans-serif"],
      },
      colors: {
        coral: { DEFAULT: "#FF4D6D", dark: "#D93055", light: "#FF8099", glow: "rgba(255,77,109,0.15)" },
      },
      transitionDuration: { DEFAULT: "180ms" },
      animation: {
        marquee: "marquee 36s linear infinite",
        "fade-in": "fadeIn 0.2s ease-out both",
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0%)" }, "100%": { transform: "translateX(-50%)" } },
        fadeIn:  { "0%": { opacity: "0", transform: "translateY(8px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
    },
  },
  plugins: [],
};

export default config;
