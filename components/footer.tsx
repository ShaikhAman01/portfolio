import Link from "next/link";
import { profile } from "@/lib/data";

const social = [
  ["GITHUB", profile.github],
  ["LINKEDIN", profile.linkedin],
  ["X", profile.x],
];

export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--outline-variant)] py-10">
      <div className="mx-auto flex w-full max-w-[105rem] flex-col gap-8 px-5 md:px-8">
        {/* Identity row: brand on the left, handle tree on the right */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <Link
            href="/"
            className="text-xl font-black tracking-tight text-black dark:text-white sm:text-2xl md:text-4xl"
          >
            {profile.brand}
          </Link>

          {/* Left-aligned inside a right-positioned block, so the tree lines up under the handle */}
          <div className="flex flex-col gap-2">
            <p className="text-base font-black tracking-[0.18em] text-[var(--on-surface)]">
              @{profile.handle}
            </p>

            <div className="flex items-center gap-4 text-sm font-black tracking-[0.18em] text-[var(--outline)] dark:text-[var(--on-surface-variant)]">
              <span aria-hidden="true" className="text-[var(--outline-variant)]">
                └─
              </span>
              {social.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-black dark:hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Meta row */}
        <div className="flex flex-col gap-4 border-t border-[var(--outline-variant)] pt-6 text-sm font-black tracking-[0.18em] text-[var(--outline)] dark:text-[var(--on-surface-variant)] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <p>
              ©{new Date().getFullYear()} {profile.name}.
            </p>

            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>
                SYS_UPTIME:{" "}
                <span className="text-[var(--on-surface)]">99.9%</span>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="transition hover:text-black dark:hover:text-white"
            >
              EMAIL
            </a>
            <Link
              href="/privacy"
              className="transition hover:text-black dark:hover:text-white"
            >
              PRIVACY
            </Link>
          </div>
        </div>

        <p className="text-xs tracking-wider text-[var(--outline)] dark:text-[var(--on-surface-variant)]">
          // made with{" "}
          <span className="text-blue-700 dark:text-emerald-400">&hearts;</span>,
          caffeine, and a second opinion from Claude
        </p>
      </div>
    </footer>
  );
}
