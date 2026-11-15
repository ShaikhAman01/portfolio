"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CRTBoot() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (document.documentElement.hasAttribute("data-booted")) {
      setShow(false);
      return;
    }
    try {
      sessionStorage.setItem("dev-core-booted", "1");
    } catch {}
  }, []);

  if (!show) return null;

  return (
    <motion.div
      className="crt-boot pointer-events-none fixed inset-0 z-[99999] flex flex-col justify-end bg-[var(--bg)] p-6 md:p-12"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.45, duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
      onAnimationComplete={() => setShow(false)}
    >
      <div className="font-mono text-sm font-black tracking-widest text-[var(--outline)] md:text-base">
        <p>&gt; Mounting userspace...</p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.1 }}
          className="mt-1"
        >
          &gt; INIT_SYSTEM: <span className="text-blue-700 dark:text-emerald-400">[ OK ]</span>
        </motion.p>

        <motion.span
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{ repeat: Infinity, duration: 0.6, times: [0, 0.5, 0.5, 1] }}
          className="mt-2 inline-block text-[var(--on-surface)]"
        >
          █
        </motion.span>
      </div>
    </motion.div>
  );
}
