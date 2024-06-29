import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        firacode: ["Fira Code", "monospace"],
      },
      colors: {
        primary: "#C778DD",
        gray: {
          "light-1": "#FCFCFD",
          "light-2": "#F9FAFB",
          "light-3": "#F2F4F7",
          "light-4": "#EAECF0",
          "light-5": "#D0D5DD",
          "medium-1": "#98A2B3",
          "medium-2": "#667085",
          "medium-3": "#475467",
          "medium-4": "#344054",
          "medium-5": "#ABB2BF",
          dark: "#1D2939",
        },
        alert: {
          error: "#F04438",
          success: "#12B76A",
        },
        background: "#282C33",
        white: "#FFFFFF",
      },
      fontSize: {
        "4.5xl": ["40px", { lineHeight: "50px" }],
      },
    },
  },
  plugins: [],
};
export default config;
