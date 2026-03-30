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
        background: "#F2EBE1",
        foreground: "#2D3728",
        primary: {
          DEFAULT: "#4F634B",
          foreground: "#F2EBE1",
        },
        secondary: {
          DEFAULT: "#D8E1D3",
          foreground: "#2D3728",
        },
        muted: {
          DEFAULT: "#E5ECE0",
          foreground: "#5B6C54",
        },
        accent: {
          DEFAULT: "#A8B89F",
          foreground: "#2D3728",
        },
        stone: {
          DEFAULT: "#C5D0BC",
          foreground: "#2D3728",
        },
        forest: {
          DEFAULT: "#3E4F39",
          foreground: "#F2EBE1",
        },
        olive: {
          DEFAULT: "#768A6A",
          foreground: "#F2EBE1",
        },
        border: "#C5D0BC",
        card: "#E8EFE5",
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
