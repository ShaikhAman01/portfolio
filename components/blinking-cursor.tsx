"use client";

import { motion } from "framer-motion";

export function BlinkingCursor() {
  return (
    <motion.span
      // We map 4 distinct states...
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{ 
        repeat: Infinity, 
        duration: 0.9, 
        // ...and map them to exact percentages of the duration (0%, 50%, 50%, 100%)
        // This forces an instant jump between 1 and 0 with no smooth fading.
        times: [0, 0.5, 0.5, 1] 
      }}
      className="inline-block text-blue-700 dark:text-emerald-400"
    >
      _
    </motion.span>
  );
}