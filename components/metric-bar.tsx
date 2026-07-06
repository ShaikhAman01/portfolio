"use client";

import { motion } from "framer-motion";

export function MetricBar({ delay = 0 }: { delay?: number }) {
  return (
    <div className="mt-6 sm:mt-8 h-[2px] w-full bg-[var(--outline-variant)]/30">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "70%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay, ease: "circOut" }}
        className="h-full bg-blue-700 dark:bg-emerald-400"
      />
    </div>
  );
}
