import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070C",
          900: "#080B12",
          800: "#0A0E17",
          700: "#0F1420",
          600: "#151B2A",
          card: "#0D121E",
          border: "#1B2333",
        },
        brand: {
          300: "#6BB4FF",
          400: "#3B9EFF",
          500: "#1D6FF2",
          600: "#155BD0",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px -10px rgba(29,111,242,0.55)",
        "glow-sm": "0 0 30px -8px rgba(29,111,242,0.5)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #1D6FF2 0%, #3B9EFF 100%)",
        "radial-glow":
          "radial-gradient(60% 60% at 50% 40%, rgba(29,111,242,0.18) 0%, rgba(8,11,18,0) 100%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
