import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true
  },
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        xs: ["max(0.75rem, 11px)", { lineHeight: "max(1rem, 16px)" }],
        sm: ["max(0.875rem, 12px)", { lineHeight: "max(1.25rem, 18px)" }],
        base: ["max(1rem, 13px)", { lineHeight: "max(1.5rem, 20px)" }]
      },
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
