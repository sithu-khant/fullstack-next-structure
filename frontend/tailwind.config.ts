import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        "primary-color": "#0061F2", // Blue
        "secondary-color": "#0056D6", // Soft Blue
        "background-color": "#F4F5F7", // Light Gray
        "dark-background": "2A2F3B", // Charcoal
        "accent-color": "#48C78E", // Light Green
        "alert-color": "#F23A55", // Warm Red
        "text-color": "#333333", // Dark Gray
        "muted-gray": "#A0A9B3", // Soft Gray
        "input-field-background": "#E5E7EB", // Light Grayish White
        "hover-color": "#E2F1FF", // Subtle Blue
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
} satisfies Config;
