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
      className="border border-zinc-400 px-5 py-3 text-sm font-bold tracking-[0.18em] transition hover:border-black hover:bg-black hover:text-white dark:border-zinc-700 dark:hover:border-white dark:hover:bg-white dark:hover:text-black md:text-base"
      aria-label="Toggle color mode"
    >
      [MODE: <span className="text-blue-700 dark:text-emerald-400">{theme.toUpperCase()}</span>]
    </button>
  );
}
