/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Manrope"],
        mono: ["JetBrains Mono"],
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
