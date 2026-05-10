import Link from "next/link";
import { profile } from "@/lib/data";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  ["Projects", "/#projects"],
  ["Skills", "/#skills"],
  ["History", "/#history"],
  ["Contact", "/#contact"]
];

export function Header({ active = "" }: { active?: string }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--outline-variant)] bg-[rgba(248,249,250,0.95)] backdrop-blur dark:border-[var(--outline-variant)] dark:bg-[rgba(5,5,5,0.95)]">
      <div className="mx-auto flex w-full max-w-[1680px] items-center justify-between gap-6 px-5 py-4 md:px-8 lg:w-[67%]">
        <Link href="/" className="text-2xl font-black tracking-tight md:text-4xl">
          {profile.brand}
        </Link>
        <nav className="hidden items-center gap-10 text-lg font-black text-[var(--outline)] dark:text-[var(--on-surface-variant)] lg:flex">
          {nav.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className={`transition hover:text-black dark:hover:text-white ${active === label ? "border-b-4 border-black text-black dark:border-white dark:text-white" : ""}`}
            >
              {label}
            </Link>
          ))}
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