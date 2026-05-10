"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  ["Projects", "/#projects"],
  ["Skills", "/#skills"],
  ["History", "/#history"],
  ["Contact", "/#contact"]
];

export function Header({ active = "" }: { active?: string }) {
  const [currentActive, setCurrentActive] = useState(active);

  useEffect(() => {
    if (active) return;

    // 1. The standard Intersection Observer for normal scrolling
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const label = id.charAt(0).toUpperCase() + id.slice(1);
            setCurrentActive(label);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    // 2. The "Bottom of Page" fallback for the short Contact section
    const handleScroll = () => {
      // If the user scrolls within 50px of the absolute bottom of the document...
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        setCurrentActive("Contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup both the observer and the scroll listener
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--outline-variant)] bg-[rgba(248,249,250,0.95)] backdrop-blur dark:border-[var(--outline-variant)] dark:bg-[rgba(5,5,5,0.95)]">
      <div className="mx-auto flex w-full max-w-[105rem] items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link href="/" className="text-2xl font-black tracking-tight md:text-4xl">
          {profile.brand}
        </Link>
        <nav className="hidden items-center gap-10 text-lg font-black text-[var(--outline)] dark:text-[var(--on-surface-variant)] lg:flex">
          {nav.map(([label, href]) => {
            const isActive = currentActive === label;
            return (
              <Link
                key={label}
                href={href}
                className={`transition hover:text-black dark:hover:text-white ${isActive ? "text-black dark:text-white" : ""}`}
              >
                {isActive ? (
                  <span className="flex items-center gap-2">
                    <span className="text-blue-700 dark:text-emerald-400">[</span>
                    {label.toUpperCase()}
                    <span className="text-blue-700 dark:text-emerald-400">]</span>
                  </span>
                ) : (
                  label
                )}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/#contact"
            aria-label="Open contact terminal"
            className="hidden border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] px-4 py-3 text-lg font-black text-[var(--on-surface)] transition hover:bg-black hover:text-white dark:border-[var(--outline-variant)] dark:bg-[var(--surface-container-lowest)] dark:hover:bg-white dark:hover:text-black sm:block"
          >
            &gt;_
          </Link>
        </div>
      </div>
    </header>
  );
}