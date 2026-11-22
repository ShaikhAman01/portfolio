"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const CELLS = 10;

export function ScrollLine() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: scrollYProgress }}
      className="absolute inset-x-0 -bottom-px h-[2px] origin-left bg-blue-700 dark:bg-emerald-400 xl:hidden"
    />
  );
}

export function ScrollReadout() {
  const { scrollYProgress } = useScroll();
  const [percent, setPercent] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setPercent(Math.round(Math.min(Math.max(v, 0), 1) * 100));
  });

  const filled = Math.round((percent / 100) * CELLS);

  return (
    <span aria-hidden="true" className="hidden select-none items-center whitespace-nowrap text-sm font-bold tabular-nums text-[var(--outline)] xl:flex">
      [<span className="text-blue-700 dark:text-emerald-400">{"█".repeat(filled)}</span>
      {"░".repeat(CELLS - filled)}]
      <span className="ml-2 w-[4ch] text-right text-[var(--on-surface)]">{percent}%</span>
    </span>
  );
}
