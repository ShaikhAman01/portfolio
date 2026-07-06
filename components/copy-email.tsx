"use client";

import { useEffect, useRef, useState } from "react";

export function CopyEmailChip({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard unavailable (permissions, old browser): fall back to mail client
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      title={email}
      aria-label={`Copy email address ${email}`}
      aria-live="polite"
      className="inline-flex items-center gap-1.5 border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-[var(--on-surface-variant)] transition hover:border-blue-700 hover:text-blue-700 dark:hover:border-emerald-400 dark:hover:text-emerald-400 hover:shadow-[2px_2px_0_rgba(0,0,0,0.05)]"
    >
      <span className="text-blue-700 dark:text-emerald-400">&gt;</span>
      {copied ? (
        <span className="font-black text-blue-700 dark:text-emerald-400">[COPIED]</span>
      ) : (
        <span className="underline decoration-dotted underline-offset-4">EMAIL</span>
      )}
    </button>
  );
}
