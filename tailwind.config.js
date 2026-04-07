/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Instrument Serif'", "serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#FFF9F0",
        foreground: "#111827",
        primary: {
          DEFAULT: "#FF4D4D",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FFD6D6",
          foreground: "#111827",
        },
        muted: {
          DEFAULT: "#F5EBE1",
          foreground: "#4B5563",
        },
        accent: {
          DEFAULT: "#FF7373",
          foreground: "#FFFFFF",
        },
        stone: {
          DEFAULT: "#EADDCF",
          foreground: "#111827",
        },
        forest: {
          DEFAULT: "#991B1B",
          foreground: "#FFFFFF",
        },
        olive: {
          DEFAULT: "#DC2626",
          foreground: "#FFFFFF",
        },
        border: "#EADDCF",
        card: "#FFFFFF",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      },
      boxShadow: {
        premium: "0 25px 80px -12px rgba(79, 99, 75, 0.15)",
        card: "0 4px 24px -4px rgba(79, 99, 75, 0.08)",
        "card-hover": "0 12px 40px -8px rgba(79, 99, 75, 0.2)",
      },
    },
  },
  plugins: [],
}
