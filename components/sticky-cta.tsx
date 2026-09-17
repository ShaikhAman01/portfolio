"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { MotionDiv } from "./motion";
import { profile } from "@/lib/data";

export function StickyCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const contact = document.querySelector("#contact");

    let pastHero = false;
    let atContact = false;

    const sync = () => setVisible(pastHero && !atContact);

    const onScroll = () => {
      pastHero = window.scrollY > window.innerHeight * 0.6;
      sync();
    };

    // Retract the bar once the contact section is near, so it never covers
    // the form it points at — or the footer that follows it.
    const observer = new IntersectionObserver(
      ([entry]) => {
        atContact = entry.isIntersecting;
        sync();
      },
      { rootMargin: "0px 0px 160px 0px" }
    );

    if (contact) observer.observe(contact);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <MotionDiv
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-[var(--outline-variant)] bg-[var(--surface-container-lowest)]/95 pb-[env(safe-area-inset-bottom)] backdrop-blur sm:hidden"
        >
          <div className="flex items-stretch gap-3 px-4 py-3">
            <Link
              href="/#contact"
              className="flex-1 bg-black px-4 py-4 text-center text-sm font-black tracking-[0.14em] text-white transition hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-emerald-400"
            >
              INITIALIZE_CONNECTION &gt;_
            </Link>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume as PDF"
              className="flex items-center justify-center border border-black bg-[var(--surface-container-lowest)] px-4 text-sm font-black tracking-[0.14em] text-black transition hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              CV ↓
            </a>
          </div>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
}
