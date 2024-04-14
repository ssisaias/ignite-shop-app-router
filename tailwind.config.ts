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
      /* Whatever he did using stitches we can do here */
      colors: {
        "isaias": "#eb4034"
      },
      fontSize: {
        md: '1.125rem', // 18px
        lg: '1.25rem', // 20px
        xl: '1.5rem', // 24px
        xxl: '1.75rem', // 32px
      }
    },
  },
  plugins: [],
};
export default config;
