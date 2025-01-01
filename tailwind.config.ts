import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#f78300",
          "primary-content": "#ffffff",
          "secondary": "#ffd700",
          "secondary-content": "#1f1f1f",
          "accent": "#007bff",
          "accent-content": "#ffffff",
          "neutral": "#cccccc",
          "neutral-content": "#1f1f1f",
          "base-100": "#ffffff",
          "base-200": "#e0e0e0",
          "base-300": "#cccccc",
          "base-content": "#1f1f1f",
          "info": "#007bff",
          "info-content": "#ffffff",
          "success": "#28a745",
          "success-content": "#ffffff",
          "warning": "#ffd700",
          "warning-content": "#1f1f1f",
          "error": "#ff0000",
          "error-content": "#ffffff",
        },
      },
    ],
  },
  plugins: [daisyui],
} satisfies Config;
