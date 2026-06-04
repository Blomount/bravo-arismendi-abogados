import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Color institucional: azul pizarra profundo
        primary: {
          DEFAULT: "#16293b",
          50: "#f1f5f8",
          100: "#dde7ef",
          200: "#bccfdd",
          300: "#8eabc2",
          400: "#5e84a4",
          500: "#3f6688",
          600: "#2f5172",
          700: "#26425d",
          800: "#1d3349",
          900: "#16293b",
          950: "#0d1b29",
        },
        // Acento metálico discreto: bronce / champagne tenue
        accent: {
          DEFAULT: "#b08d57",
          soft: "#c9ad82",
          dark: "#8f7142",
        },
        // Neutros cálidos
        surface: "#faf8f4",
        sand: "#efe9e0",
        ink: "#1a1d1f",
        muted: "#5b6770",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: { DEFAULT: "1.25rem", lg: "2rem" },
        screens: { "2xl": "1200px" },
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
