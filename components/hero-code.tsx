"use client";

import { motion } from "framer-motion";
import { heroStack, profile } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const line = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.2 } }
};

export function HeroCode() {
  return (
    <motion.pre
      variants={container}
      initial="hidden"
      animate="show"
      className="mb-20 overflow-x-auto text-base leading-8 md:text-2xl"
    >
      <code>
        <motion.div variants={line}>
          <span className="text-blue-700 dark:text-sky-400">export const</span> Engineer = {"{"}
        </motion.div>
        
        <motion.div variants={line}>
          {"  "}<span className="text-zinc-500">name:</span> <span className="text-emerald-600">'{profile.name}'</span>,
        </motion.div>
        
        <motion.div variants={line}>
          {"  "}<span className="text-zinc-500">role:</span> <span className="text-emerald-600">'{profile.role}'</span>,
        </motion.div>
        
        <motion.div variants={line}>
          {"  "}<span className="text-zinc-500">focus:</span> <span className="text-emerald-600">'{profile.focus}'</span>,
        </motion.div>
        
        <motion.div variants={line}>
          {"  "}<span className="text-zinc-500">stack:</span> [{heroStack.map((item, index) => (
            <span key={item}>
              <span className="text-emerald-600">'{item}'</span>{index < heroStack.length - 1 ? ", " : ""}
            </span>
          ))}],
        </motion.div>
        
        <motion.div variants={line}>
          {"  "}<span className="text-zinc-500">location:</span> <span className="text-emerald-600">'{profile.location}'</span>,
        </motion.div>
        
        <motion.div variants={line}>
          {"  "}<span className="text-zinc-500">status:</span> <span className="text-emerald-600">'{profile.status}'</span>
        </motion.div>
        
        <motion.div variants={line}>
          {"};"}
        </motion.div>
      </code>
    </motion.pre>
  );
}