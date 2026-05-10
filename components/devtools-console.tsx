"use client";

import { useEffect } from "react";

export function DevToolsConsole() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const style = "color: #10b981; font-weight: bold; font-size: 1.1em; font-family: monospace;";
      
      const ascii = `
       █████╗  ██████╗ ██████╗███████╗███████╗███████╗
      ██╔══██╗██╔════╝██╔════╝██╔════╝██╔════╝██╔════╝
      ███████║██║     ██║     █████╗  ███████╗███████╗
      ██╔══██║██║     ██║     ██╔══╝  ╚════██║╚════██║
      ██║  ██║╚██████╗╚██████╗███████╗███████║███████║
      ╚═╝  ╚═╝ ╚═════╝ ╚═════╝╚══════╝╚══════╝╚══════╝
      `;
      
      console.log("%c" + ascii, "color: #10b981; font-family: monospace; font-weight: bold;");
      console.log("%c> ACCESS GRANTED. PERSISTENT CONNECTION ESTABLISHED.", style);
      console.log("%c> SOURCE CODE INSPECTION AUTHORIZED.", style);
      console.log("%c> RECRUITERS: YOU HAVE FOUND THE BACKDOOR. LET'S CONNECT.", style);
    }
  }, []);

  return null;
}