"use client";

import { useEffect } from "react";

const IDLE_TITLE = "[ IDLE ] aman@system:~$ awaiting_input...";

export function IdleTitle() {
  useEffect(() => {
    let originalTitle: string | null = null;

    function handleVisibilityChange() {
      if (document.hidden) {
        originalTitle = document.title;
        document.title = IDLE_TITLE;
      } else if (originalTitle !== null) {
        document.title = originalTitle;
        originalTitle = null;
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (originalTitle !== null) {
        document.title = originalTitle;
      }
    };
  }, []);

  return null;
}
