"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; 
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
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  useEffect(() => {
    if (active) return;

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

    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        setCurrentActive("Contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--outline-variant)] bg-[var(--surface-container-lowest)]/95 backdrop-blur dark:border-[var(--outline-variant)] dark:bg-[var(--surface-container-lowest)]/95">
      <div className="mx-auto flex w-full max-w-[105rem] items-center justify-between gap-4 px-4 py-4 md:gap-6 md:px-8">
        
        {/* BRAND TITLE */}
        <Link href="/" className="text-xl font-black tracking-tight sm:text-2xl md:text-4xl whitespace-nowrap">
          {profile.brand}
        </Link>
        
        {/* DESKTOP NAVIGATION INTERFACE */}
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
        
        {/* ACTION PANEL CONTROL LAYER */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          
          {/* CRITICAL MOBILE ALIGNMENT OVERRIDE LAYER:
            Forces anything inside ThemeToggle to behave, stay on a single line,
            and dynamically pull down inner text/padding spaces on small mobile devices.
          */}
          <div className="h-12 flex items-center justify-center text-xs sm:text-sm md:text-base [&_button]:h-full [&_div]:h-full [&_*]:whitespace-nowrap [&_*]:break-keep [&_button]:px-3 sm:[&_button]:px-5">
            <ThemeToggle />
          </div>
          
          {/* Terminal Button */}
          <Link
            href="/#contact"
            aria-label="Open contact terminal"
            className="hidden border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] px-5 h-12 flex items-center justify-center text-lg font-black text-[var(--on-surface)] transition hover:bg-black hover:text-white dark:border-[var(--outline-variant)] dark:hover:bg-white dark:hover:text-black sm:flex"
          >
            &gt;_
          </Link>

          {/* Mobile responsive handle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle structural menu tree"
            className="flex items-center justify-center border border-[var(--outline-variant)] h-12 w-12 text-[var(--on-surface)] hover:bg-[var(--outline-variant)]/20 lg:hidden flex-shrink-0"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* DROPDOWN EXPANSION PANEL DRAWER CONTAINER FOR MOBILE SYSTEMS */}
      {isMenuOpen && (
        <nav className="w-full border-t border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] px-5 py-6 flex flex-col gap-6 text-md font-black text-[var(--outline)] dark:text-[var(--on-surface-variant)] lg:hidden shadow-[0_8px_16px_rgba(0,0,0,0.06)] animate-in fade-in slide-in-from-top-2 duration-200">
          {nav.map(([label, href]) => {
            const isActive = currentActive === label;
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setIsMenuOpen(false)} 
                className={`w-full py-2 transition hover:text-black dark:hover:text-white ${isActive ? "text-black dark:text-white" : ""}`}
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
          
          <Link
            href="/#contact"
            onClick={() => setIsMenuOpen(false)}
            className="w-full text-center mt-2 border border-black bg-black text-white dark:bg-white dark:text-black py-4 text-sm font-black tracking-[0.14em]"
          >
            INITIALIZE_CONNECTION &gt;_
          </Link>
        </nav>
      )}
    </header>
  );
}