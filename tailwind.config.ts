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
    },
    colors: {
      transparent: "transparent",
      "bg-primary": "#F0DBAF",
      "bg-secondary": "#88AB8E",
      "text-primary": "#404040",
      "text-secondary": "#a0a0a0",
      "border-peach": "#DC8686",
      "custom-maroon": "#B06161",
      success: "#00cc66",
      error: "#ff8080",
    },
  },
  plugins: [],
};
export default config;
