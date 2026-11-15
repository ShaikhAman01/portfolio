"use client";

import { motion } from "framer-motion";

export function MetricBar({ delay = 0 }: { delay?: number }) {
  return (
    <div className="mt-6 sm:mt-8 h-[2px] w-full bg-[var(--outline-variant)]/30">
      <motion.div
        initial={{ transform: "scaleX(0)" }}
        whileInView={{ transform: "scaleX(1)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }}
        className="h-full w-[70%] origin-left bg-blue-700 dark:bg-emerald-400"
      />
    </div>
  );
}
