export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fea928",
        secondary: "#ed8900",

        /* 🔥 Premium deep black palette */
        blackish: {
          DEFAULT: "#0A0A0A",
          soft: "#0F0F0F",
          card: "#121212",
          border: "#1F1F1F",
        },
      },
    },
  },
  plugins: [],
};
