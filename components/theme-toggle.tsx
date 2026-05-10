"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("dev-core-theme");
    const nextTheme = stored === "dark" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    window.localStorage.setItem("dev-core-theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] px-5 py-3 text-sm font-black tracking-[0.18em] text-[var(--on-surface)] transition hover:border-black hover:bg-black hover:text-white dark:border-[var(--outline-variant)] dark:bg-[var(--surface-container-lowest)] dark:text-[var(--on-surface)] dark:hover:border-white dark:hover:bg-white dark:hover:text-black md:text-base"
      aria-label="Toggle color mode"
    >
      [MODE: <span className="text-blue-700 dark:text-emerald-400">{theme.toUpperCase()}</span>]
    </button>
  );
}
