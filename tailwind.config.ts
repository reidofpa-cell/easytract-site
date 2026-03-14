import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        easytract: {
          primary: "#2D8B5A",
          secondary: "#3BA564",
          accent: "#4FBF6E",
          light: "#5CD47A",
          dark: "#1E5A3A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "easytract-gradient": "linear-gradient(135deg, #2D8B5A 0%, #4FBF6E 100%)",
        "easytract-dark": "linear-gradient(135deg, #1E5A3A 0%, #2D8B5A 100%)",
      },
      boxShadow: {
        easytract: "0 10px 30px rgba(45, 139, 90, 0.15)",
        "easytract-hover": "0 20px 40px rgba(45, 139, 90, 0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;
