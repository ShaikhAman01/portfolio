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
    <header className="sticky top-0 z-50 border-b border-zinc-300 bg-zinc-100/95 backdrop-blur dark:border-zinc-800 dark:bg-black/95">
      <div className="mx-auto flex max-w-[1680px] items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link href="/" className="text-2xl font-black tracking-tight md:text-4xl">
          {profile.brand}
        </Link>
        <nav className="hidden items-center gap-10 text-lg font-bold text-zinc-600 dark:text-zinc-300 lg:flex">
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
            className="hidden border border-zinc-400 px-4 py-3 text-lg font-black transition hover:bg-black hover:text-white dark:border-zinc-700 dark:hover:bg-white dark:hover:text-black sm:block"
          >
            &gt;_
          </Link>
        </div>
      </div>
    </header>
  );
}
