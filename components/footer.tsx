import Link from "next/link";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--outline-variant)] py-10 dark:border-[var(--outline-variant)]">
      <div className="mx-auto flex w-full max-w-[105rem] flex-col gap-6 px-5 text-lg font-black tracking-[0.12em] text-[var(--outline)] dark:text-[var(--on-surface-variant)] md:flex-row md:items-center md:justify-between md:px-8">
        <Link href="/" className="text-2xl text-black dark:text-white">
          {profile.brand}
        </Link>
        
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
          <p>©2026 @{profile.handle}.</p>
          <div className="flex items-center gap-3 text-sm font-black tracking-[0.18em]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>SYS_UPTIME: <span className="text-[var(--on-surface)]">99.9%</span></span>
          </div>
        </div>

        <div className="flex gap-8">
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition hover:text-black dark:hover:text-white">GITHUB</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-black dark:hover:text-white">LINKEDIN</a>
          <a href={profile.x} target="_blank" rel="noreferrer" className="transition hover:text-black dark:hover:text-white">X</a>
        </div>
      </div>
    </footer>
  );
}