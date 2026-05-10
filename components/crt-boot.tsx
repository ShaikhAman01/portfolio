"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function CRTBoot() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !show) return null;

  return (
    <motion.div
      // Starts as the exact same color as your background, so it feels native
      className="pointer-events-none fixed inset-0 z-[99999] flex flex-col justify-end bg-[var(--bg)] p-6 md:p-12"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      // Fades out smoothly after 0.8 seconds
      transition={{ delay: 0.8, duration: 0.4, ease: "easeInOut" }}
      onAnimationComplete={() => setShow(false)}
    >
      <div className="font-mono text-sm font-black tracking-widest text-[var(--outline)] md:text-base">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          &gt; Mounting userspace...
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.1 }}
          className="mt-1"
        >
          &gt; INIT_SYSTEM: <span className="text-blue-700 dark:text-emerald-400">[ OK ]</span>
        </motion.p>
        
        <motion.span
          // 4 explicit states mapped to the timeline below
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 0.6, 
            // Holds at 100% until halfway, instantly drops to 0%, holds until the end
            times: [0, 0.5, 0.5, 1] 
          }}
          className="mt-2 inline-block text-[var(--on-surface)]"
        >
          █
        </motion.span>
      </div>
    </motion.div>
  );
}