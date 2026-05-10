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
    <div className="mt-8 border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] p-8 shadow-[8px_8px_0_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0_rgba(255,255,255,0.05)] md:p-12">
      <div className="mb-12">
        <p className="text-2xl font-black tracking-[0.15em] text-[var(--on-surface)]">
          INITIATE_CONNECTION
        </p>
        <p className="mt-2 text-sm font-black tracking-widest text-[var(--outline)]">
          STATUS: {isSubmitting ? "TRANSMITTING_PACKETS..." : result === "SUCCESS" ? "UPLOAD_COMPLETE" : "AWAITING_INPUT..."}
        </p>
      </div>

      {result === "SUCCESS" ? (
        <div className="border border-emerald-500 bg-emerald-500/10 p-8 font-black text-emerald-500">
          <p className="text-xl">&gt; MESSAGE_RECEIVED. THE_OPERATOR_HAS_BEEN_NOTIFIED.</p>
          <button 
            onClick={() => setResult("IDLE")} 
            className="mt-6 block text-xs underline underline-offset-8 decoration-dotted hover:text-emerald-400 transition-colors"
          >
            [ SEND_ANOTHER_PAYLOAD ]
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <div className="group flex flex-col gap-3">
            <label className="text-sm font-black tracking-[0.1em] text-[var(--outline)] transition-colors group-focus-within:text-blue-700 dark:group-focus-within:text-emerald-400">
              [01] RETURN_ADDRESS (EMAIL)
            </label>
            <input
              type="email"
              name="email"
              required
              disabled={isSubmitting}
              className="w-full border-b border-[var(--outline-variant)] bg-transparent py-2 text-xl outline-none transition focus:border-blue-700 dark:focus:border-emerald-400 disabled:opacity-50"
              placeholder="jane@company.com"
            />
          </div>

          <div className="group flex flex-col gap-3">
            <label className="text-sm font-black tracking-[0.1em] text-[var(--outline)] transition-colors group-focus-within:text-blue-700 dark:group-focus-within:text-emerald-400">
              [02] PAYLOAD_DATA (MESSAGE)
            </label>
            <textarea
              name="message"
              required
              rows={5}
              disabled={isSubmitting}
              className="w-full resize-none border-b border-[var(--outline-variant)] bg-transparent py-2 text-xl outline-none transition focus:border-blue-700 dark:focus:border-emerald-400 disabled:opacity-50"
              placeholder="System integration request..."
            />
          </div>

          <div className="flex items-center gap-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative self-start border border-[var(--outline-variant)] bg-transparent px-10 py-4 text-lg font-black tracking-[0.15em] transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black disabled:opacity-50"
            >
              {isSubmitting ? "[ TRANSMITTING... ]" : "[ TRANSMIT ]"}
            </button>

            {result === "ERROR" && (
              <p className="font-black text-red-500 animate-pulse text-sm tracking-widest">
                ! UPLINK_FAILURE: RETRY_TRANSMISSION
              </p>
            )}
          </div>
        </form>
      )}
    </div>
  );
}