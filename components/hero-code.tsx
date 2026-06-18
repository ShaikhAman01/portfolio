"use client";

import { motion } from "framer-motion";
import { heroStack, profile } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const line = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.25, ease: "easeOut" } }
};

export function HeroCode() {
  return (
    <motion.pre
      variants={container}
      initial="hidden"
      animate="show"
      className="mb-12 w-full overflow-x-hidden rounded-lg bg-zinc-50/50 p-6 font-mono text-base font-semibold leading-8 sm:text-lg sm:leading-9 md:text-xl md:leading-10 tracking-normal text-[var(--on-surface)] dark:bg-zinc-900/30 border border-[var(--outline-variant)]/30"
    >
      <code className="block select-text">
        {/* Declaration Line */}
        <motion.div variants={line} className="whitespace-nowrap">
          <span className="text-blue-600 dark:text-sky-400 font-bold">const</span>{" "}
          <span className="text-zinc-800 dark:text-zinc-200">Engineer</span>{" "}
          <span className="text-zinc-400 dark:text-zinc-500">=</span>{" "}
          <span className="text-zinc-400 dark:text-zinc-500">{"{"}</span>
        </motion.div>
        
        {/* String Values */}
        <motion.div variants={line} className="pl-6 sm:pl-8 whitespace-nowrap">
          <span className="text-zinc-600 dark:text-zinc-400">name</span>
          <span className="text-zinc-400 dark:text-zinc-500">:</span>{" "}
          <span className="text-emerald-600 dark:text-emerald-400">'{profile.name}'</span>
          <span className="text-zinc-400 dark:text-zinc-500">,</span>
        </motion.div>
        
        <motion.div variants={line} className="pl-6 sm:pl-8 whitespace-nowrap">
          <span className="text-zinc-600 dark:text-zinc-400">role</span>
          <span className="text-zinc-400 dark:text-zinc-500">:</span>{" "}
          <span className="text-emerald-600 dark:text-emerald-400">'{profile.role}'</span>
          <span className="text-zinc-400 dark:text-zinc-500">,</span>
        </motion.div>
        
        <motion.div variants={line} className="pl-6 sm:pl-8 whitespace-nowrap">
          <span className="text-zinc-600 dark:text-zinc-400">focus</span>
          <span className="text-zinc-400 dark:text-zinc-500">:</span>{" "}
          <span className="text-emerald-600 dark:text-emerald-400">'{profile.focus}'</span>
          <span className="text-zinc-400 dark:text-zinc-500">,</span>
        </motion.div>
        
        {/* Responsive Mobile Array Stack Block */}
        <motion.div variants={line} className="pl-6 sm:pl-8 flex flex-wrap items-start">
          <span className="text-zinc-600 dark:text-zinc-400 flex-shrink-0">stack</span>
          <span className="text-zinc-400 dark:text-zinc-500 flex-shrink-0">:</span>{" "}
          <div className="flex flex-wrap items-center text-emerald-600 dark:text-emerald-400 pl-1">
            <span className="text-zinc-400 dark:text-zinc-500 mr-1">[</span>
            {heroStack.map((item, index) => (
              <span key={item} className="inline-flex items-center whitespace-nowrap">
                <span>'{item}'</span>
                {index < heroStack.length - 1 && (
                  <span className="text-zinc-400 dark:text-zinc-500 mr-2">,</span>
                )}
              </span>
            ))}
            <span className="text-zinc-400 dark:text-zinc-500">]</span>
            <span className="text-zinc-400 dark:text-zinc-500">,</span>
          </div>
        </motion.div>
        
        <motion.div variants={line} className="pl-6 sm:pl-8 whitespace-nowrap">
          <span className="text-zinc-600 dark:text-zinc-400">location</span>
          <span className="text-zinc-400 dark:text-zinc-500">:</span>{" "}
          <span className="text-emerald-600 dark:text-emerald-400">'{profile.location}'</span>
          <span className="text-zinc-400 dark:text-zinc-500">,</span>
        </motion.div>
        
        <motion.div variants={line} className="pl-6 sm:pl-8 whitespace-nowrap">
          <span className="text-zinc-600 dark:text-zinc-400">status</span>
          <span className="text-zinc-400 dark:text-zinc-500">:</span>{" "}
          <span className="text-emerald-600 dark:text-emerald-400">'{profile.status}'</span>
        </motion.div>
        
        {/* Closing Tag Line */}
        <motion.div variants={line} className="whitespace-nowrap">
          <span className="text-zinc-400 dark:text-zinc-500">{"};"}</span>
        </motion.div>
      </code>
    </motion.pre>
  );
}