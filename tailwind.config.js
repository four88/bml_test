/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      light: "#ffffff",
      dark: "#333333",
      primary: "#ED2E7C",
      secondary: "#FF8BBB",
    },

    extend: {
      fontSize: {
        "heading-1": "28px",
        "heading-2": "24px",
        "heading-3": "18px",
        "heading-4": "16px",
        paragraph: "14px",
      },
      fontWeight: {
        heading: "700",
        paragraph: "400",
      },
      fontFamily: {
        sans: ["bai-jamjuree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
