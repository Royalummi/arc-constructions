// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Manrope",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        brand: {
          DEFAULT: "#002F70", // Indigo-800
          light: "#3b82f6", // Indigo-500
          dark: "#1e3a8a", // Indigo-900
        },
        text: {
          primary: "#1f2937", // Gray-800
          secondary: "#4b5563", // Gray-600
        },
        neutral: {
          background: "#f8f8f8", // Light Gray
          card: "#ffffff", // White
        },
      },
      spacing: {
        section: "6rem",
        gutter: "2rem",
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.5rem",
      },
      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
