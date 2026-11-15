import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true
  },
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "monospace"
        ]
      }
    }
  },
  plugins: []
};

export default config;
