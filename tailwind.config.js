/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        tech: ["Share Tech Mono", "monospace"],
      },
      colors: {
        background: "#070a12",
        surface: {
          DEFAULT: "rgba(15, 23, 42, 0.65)",
          hover: "rgba(30, 41, 59, 0.75)",
          border: "rgba(255, 255, 255, 0.08)",
        },
        cyber: {
          indigo: "#6366f1",
          violet: "#8b5cf6",
          cyan: "#06b6d4",
          emerald: "#10b981",
          amber: "#f59e0b",
        },
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        glow: "0 0 40px -10px rgba(99, 102, 241, 0.35)",
        "glow-cyan": "0 0 40px -10px rgba(6, 182, 212, 0.35)",
        "glow-emerald": "0 0 40px -10px rgba(16, 185, 129, 0.35)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};
