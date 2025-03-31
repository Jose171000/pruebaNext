module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4361ee",
          dark: "#3a56d4",
        },
        secondary: {
          DEFAULT: "#3f37c9",
          dark: "#3831b5",
        },
      },
    },
  },
  plugins: [],
};