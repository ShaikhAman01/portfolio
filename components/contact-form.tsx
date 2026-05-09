"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="border border-zinc-300 bg-white p-6 shadow-[6px_6px_0_rgba(0,0,0,0.08)] dark:border-zinc-800 dark:bg-zinc-950"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      {[
        ["SENDER_ID", "Your name", "text"],
        ["RETURN_PATH", profile.email, "email"]
      ].map(([label, placeholder, type]) => (
        <label key={label} className="mb-6 block">
          <span className="mb-2 block text-lg font-black tracking-[0.12em]">{label}</span>
          <input
            required
            type={type}
            placeholder={placeholder}
            className="w-full border border-zinc-300 bg-white px-4 py-4 text-lg outline-none transition focus:border-black dark:border-zinc-700 dark:bg-black dark:focus:border-white"
          />
        </label>
      ))}
      <label className="mb-8 block">
        <span className="mb-2 block text-lg font-black tracking-[0.12em]">PAYLOAD_BUFFER</span>
        <textarea
          required
          placeholder="Your message here..."
          rows={7}
          className="w-full resize-none border border-zinc-300 bg-white px-4 py-4 text-lg outline-none transition focus:border-black dark:border-zinc-700 dark:bg-black dark:focus:border-white"
        />
      </label>
      <button type="submit" className="w-full bg-black px-6 py-5 text-lg font-black tracking-[0.16em] text-white transition hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-emerald-400">
        {sent ? "PACKET_SENT" : "EXECUTE_SEND"}
      </button>
    </form>
  );
}
