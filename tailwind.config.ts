import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./mdx-components.tsx",
    "./rehype-filename-plugin.mjs",
    "./rehype-table-plugin.mjs",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "15": "3.75rem",     // 60px
        "50": "12.5rem",     // 200px
        "71": "17.75rem",    // 284px
        "87.5": "21.875rem", // 350px
        "88": "22rem",       // 360px
        "150": "37.5rem"     // 600px
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /^(min|max|w|h|text)-/
    },
  ],
};
export default config;
