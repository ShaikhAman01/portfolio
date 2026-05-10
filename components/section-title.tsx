import { ElementType } from "react";

export function SectionTitle({ icon: Icon, children }: { icon: ElementType | string; children: React.ReactNode }) {
  return (
    <h2 className="mb-10 flex items-center gap-4 text-3xl font-black tracking-[0.25em] md:text-5xl">
      <span aria-hidden="true" className="text-blue-700 dark:text-emerald-400">
        {typeof Icon === "string" ? (
          Icon
        ) : (
          <Icon className="h-8 w-8 md:h-12 md:w-12" strokeWidth={3} />
        )}
      </span>
      <span>{children}</span>
    </h2>
  );
}