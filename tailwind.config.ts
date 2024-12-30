import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ff014f",
        secondary: "#c4cfde",
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(to right bottom, #212428, #16181c)",
      },
      boxShadow: {
        "custom-shadow-1": "10px 10px 20px #1c1e22, -10px -10px 20px #262a2e",
        "custom-shadow-2": "21px 21px 19px #181a1d, -21px -21px 19px #202225;",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: { colors: { background: "#212428", foreground: "#c4cfde" } },
      },
    }),
  ],
};
export default config;
