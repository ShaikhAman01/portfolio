"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/lib/data";

export function SudoMode() {
  const [isRoot, setIsRoot] = useState(false);

  useEffect(() => {
    let sequence = "";
    const handleKeyDown = (e: KeyboardEvent) => {
      sequence = (sequence + e.key.toLowerCase()).slice(-4);
      if (sequence === "sudo") {
        setIsRoot(true);
        sequence = ""; // reset
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {isRoot && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-black/95 font-mono text-emerald-500 backdrop-blur-sm"
        >
          <div className="w-full max-w-2xl border border-emerald-500/30 bg-black p-8 md:p-12">
            <p className="mb-4 animate-pulse text-2xl font-black tracking-widest md:text-4xl">
              &gt; ROOT_PRIVILEGES_GRANTED
            </p>
            <p className="mb-12 text-lg tracking-widest text-emerald-500/70">
              Accessing classified personnel databanks...
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              {/* Replace # with your actual resume PDF link */}
              <a 
                href={profile.resumeUrl}
                target="_blank"
                className="border border-emerald-500 bg-transparent px-8 py-4 text-center font-black tracking-[0.15em] transition hover:bg-emerald-500 hover:text-black"
              >
                [ DECRYPT_RESUME ]
              </a>
              <button 
                onClick={() => setIsRoot(false)}
                className="border border-emerald-500/30 text-emerald-500/50 px-8 py-4 font-black tracking-[0.15em] transition hover:bg-emerald-500/10 hover:text-emerald-500"
              >
                EXIT_SYSTEM
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}