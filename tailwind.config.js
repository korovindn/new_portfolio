/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Manrope"],
    },
    extend: {
      fontSize: {
        h1: [
          "3rem",
          {
            lineHeight: "2.5rem",
            fontWeight: "200",
          },
        ],
        h2: [
          "2rem",
          {
            lineHeight: "2.25rem",
            fontWeight: "200",
          },
        ],
        h3: [
          "1.5rem",
          {
            lineHeight: "1.75rem",
            fontWeight: "200",
          },
        ],
        h4: [
          "1.125rem",
          {
            lineHeight: "1.5rem",
            fontWeight: "200",
          },
        ],
        h5: [
          "0.9375rem",
          {
            lineHeight: "1.25rem",
            fontWeight: "200",
          },
        ],
        h6: [
          "0.75rem",
          {
            lineHeight: "1rem",
            fontWeight: "200",
          },
        ],
      },
    },
  },
  plugins: [],
};
