/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ['"Space Grotesk"', "sans-serif"],
      },
      perspective: {
        1000: "1000px",
      },

      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(40px) rotateX(10deg) scale(0.95)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0) rotateX(0) scale(1)",
          },
          "fade-slide-down": {
            "0%": { opacity: "0", transform: "translateY(-10%)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
          },
        },
      },
      animation: {
        "fade-up": "fade-in-up 1s ease-out forwards",
        "fade-up-delay-1": "fade-in-up 1s ease-out forwards 0.2s",
        "fade-up-delay-2": "fade-in-up 1s ease-out forwards 0.4s",
        "fade-up-delay-3": "fade-in-up 1s ease-out forwards 0.6s",
        "fade-slide-down": "fade-slide-down 0.3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
