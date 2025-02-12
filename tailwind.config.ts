import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: {
          100: "#fff7ed",
          300: "#fdba74",
          400: "#fb923c",
        },
      },
      backgroundImage: {
        "gradient-overlay":
          "linear-gradient(to right, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))",
      },
      animation: {
        "slide-in-out": "slideInOut 8s linear infinite",
      },
      keyframes: {
        slideInOut: {
          "0%, 100%": { transform: "translateX(-100%)", opacity: "0" },
          "10%": { opacity: "1" },
          "20%": { transform: "translateX(0)" },
          "80%": { transform: "translateX(0)" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
      },
    },
  },

  plugins: [],

  darkMode: "class",
} satisfies Config;
