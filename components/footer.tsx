import Link from "next/link";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--outline-variant)] py-10 dark:border-[var(--outline-variant)]">
      <div className="mx-auto flex max-w-[1680px] flex-col gap-6 px-5 text-lg font-black tracking-[0.12em] text-[var(--outline)] dark:text-[var(--on-surface-variant)] md:flex-row md:items-center md:justify-between md:px-8">
        <Link href="/" className="text-2xl text-black dark:text-white">
          {profile.brand}
        </Link>
        <p>©2026 @{profile.handle}. ALL SYSTEMS GREEN.</p>
        <div className="flex gap-8">
          <a href={profile.github} target="_blank" rel="noreferrer">GITHUB</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
          <a href={profile.x} target="_blank" rel="noreferrer">X</a>
        </div>
      </div>
    </footer>
  );
}
