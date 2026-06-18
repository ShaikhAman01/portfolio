"use client";

import { useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<"IDLE" | "SUCCESS" | "ERROR">("IDLE");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget; 
    
    setIsSubmitting(true);
    setResult("IDLE");

    const formData = new FormData(form);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    if (!accessKey) {
      console.error("CRITICAL_ERROR: UPLINK_KEY_MISSING");
      setResult("ERROR");
      setIsSubmitting(false);
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });

      const json = await response.json();

      if (response.status === 200 && json.success) {
        setResult("SUCCESS");
        form.reset(); 
      } else {
        setResult("ERROR");
      }
    } catch (err) {
      console.error("Transmission Error:", err);
      setResult("ERROR");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-8 border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] p-5 sm:p-8 md:p-12 shadow-[8px_8px_0_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0_rgba(255,255,255,0.05)] overflow-hidden">
      <div className="mb-8 sm:mb-12">
        <p className="text-xl sm:text-2xl font-black tracking-[0.15em] text-[var(--on-surface)] break-words">
          INITIATE_CONNECTION
        </p>
        <p className="mt-2 text-xs sm:text-sm font-black tracking-widest text-[var(--outline)] break-words">
          STATUS: {isSubmitting ? "TRANSMITTING_PACKETS..." : result === "SUCCESS" ? "UPLOAD_COMPLETE" : "AWAITING_INPUT..."}
        </p>
      </div>

      {result === "SUCCESS" ? (
        <div className="border border-emerald-500 bg-emerald-500/10 p-6 sm:p-8 font-black text-emerald-500 break-words">
          <p className="text-base sm:text-xl">&gt; MESSAGE_RECEIVED. THE_OPERATOR_HAS_BEEN_NOTIFIED.</p>
          <button 
            onClick={() => setResult("IDLE")} 
            className="mt-6 block text-xs underline underline-offset-8 decoration-dotted hover:text-emerald-400 transition-colors"
          >
            [ SEND_ANOTHER_PAYLOAD ]
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 sm:gap-10">
          <div className="group flex flex-col gap-2 sm:gap-3">
            <label className="text-xs sm:text-sm font-black tracking-[0.1em] text-[var(--outline)] transition-colors group-focus-within:text-blue-700 dark:group-focus-within:text-emerald-400 break-words">
              [01] RETURN_ADDRESS (EMAIL)
            </label>
            <input
              type="email"
              name="email"
              required
              disabled={isSubmitting}
              className="w-full border-b border-[var(--outline-variant)] bg-transparent py-2 text-base sm:text-xl outline-none transition focus:border-blue-700 dark:focus:border-emerald-400 disabled:opacity-50 rounded-none placeholder:text-zinc-400/50"
              placeholder="jane@company.com"
            />
          </div>

          <div className="group flex flex-col gap-2 sm:gap-3">
            <label className="text-xs sm:text-sm font-black tracking-[0.1em] text-[var(--outline)] transition-colors group-focus-within:text-blue-700 dark:group-focus-within:text-emerald-400 break-words">
              [02] PAYLOAD_DATA (MESSAGE)
            </label>
            <textarea
              name="message"
              required
              rows={5}
              disabled={isSubmitting}
              className="w-full resize-none border-b border-[var(--outline-variant)] bg-transparent py-2 text-base sm:text-xl outline-none transition focus:border-blue-700 dark:focus:border-emerald-400 disabled:opacity-50 rounded-none placeholder:text-zinc-400/50"
              placeholder="System integration request..."
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto border border-black px-8 py-4 text-sm sm:text-base font-black tracking-[0.18em] bg-black text-white transition hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-emerald-400 disabled:opacity-50"
            >
              {isSubmitting ? "TRANSMITTING..." : "TRANSMIT"}
            </button>

            {result === "ERROR" && (
              <p className="font-black text-red-500 animate-pulse text-xs sm:text-sm tracking-widest break-words">
                ! UPLINK_FAILURE: RETRY_TRANSMISSION
              </p>
            )}
          </div>
        </form>
      )}
    </div>
  );
}