import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nordelia: {
          blue: "#002F6C",
          silver: "#C0C0C0",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
export default config;