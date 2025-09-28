/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto"],
        mono: ["JetBrains Mono"],
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
