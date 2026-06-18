import { ElementType } from "react";

export function SectionTitle({ icon: Icon, children }: { icon: ElementType | string; children: React.ReactNode }) {
  return (
    <h2 className="mb-10 flex items-start gap-3 text-2xl font-black tracking-[0.16em] sm:items-center sm:gap-4 sm:text-3xl md:text-5xl md:tracking-[0.25em] break-words [word-break:break-word] overflow-wrap-break-word">
      <span aria-hidden="true" className="text-blue-700 dark:text-emerald-400 flex-shrink-0 mt-1 sm:mt-0">
        {typeof Icon === "string" ? (
          Icon
        ) : (
          <Icon className="h-6 w-6 sm:h-8 w-8 md:h-12 md:w-12" strokeWidth={3} />
        )}
      </span>
      <span className="min-w-0 break-words">{children}</span>
    </h2>
  );
}