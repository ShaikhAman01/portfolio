"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const [currentActive, setCurrentActive] = useState(active);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  useEffect(() => {
    if (active) {
      setCurrentActive(active);
      return;
    }

    if (pathname !== "/") {
      setCurrentActive("");
      return;
    }

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
      if (window.scrollY < 100) {
        setCurrentActive("");
        return;
      }

      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isAtBottom) {
        setCurrentActive("Contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active, pathname]); // Added pathname listener rule 

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--outline-variant)] bg-[var(--surface-container-lowest)]/95 backdrop-blur dark:border-[var(--outline-variant)] dark:bg-[var(--surface-container-lowest)]/95">
      <div className="mx-auto flex w-full max-w-[105rem] items-center justify-between gap-4 px-4 py-4 md:gap-6 md:px-8">
        
        <Link href="/" className="text-xl font-black tracking-tight sm:text-2xl md:text-4xl whitespace-nowrap">
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
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition text-blue-700 hover:text-black dark:text-emerald-400 dark:hover:text-white"
          >
            Resume ↓
          </a>
        </nav>
        
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <div className="h-12 flex items-center justify-center text-xs sm:text-sm md:text-base [&_button]:h-full [&_div]:h-full [&_*]:whitespace-nowrap [&_*]:break-keep [&_button]:px-3 sm:[&_button]:px-5">
            <ThemeToggle />
          </div>
          
          <Link
            href="/#contact"
            aria-label="Open contact terminal"
            className="hidden border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] px-5 h-12 flex items-center justify-center text-lg font-black text-[var(--on-surface)] transition hover:bg-black hover:text-white dark:border-[var(--outline-variant)] dark:hover:bg-white dark:hover:text-black sm:flex"
          >
            &gt;_
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="flex items-center justify-center border border-[var(--outline-variant)] h-12 w-12 text-[var(--on-surface)] transition-colors hover:bg-[var(--outline-variant)]/20 lg:hidden flex-shrink-0"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="w-full border-t border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] px-5 py-6 flex flex-col gap-6 text-base font-black text-[var(--outline)] dark:text-[var(--on-surface-variant)] lg:hidden shadow-[0_8px_16px_rgba(0,0,0,0.06)] animate-in fade-in slide-in-from-top-2 duration-200">
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
          
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="w-full py-2 transition text-blue-700 hover:text-black dark:text-emerald-400 dark:hover:text-white"
          >
            Resume ↓
          </a>

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
