import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./motion";

type MiniProject = {
  title: string;
  description: string;
  tags: readonly string[];
  sourceUrl: string;
  liveUrl?: string;
};

const linkClass = "flex items-center gap-1 hover:underline";

export function MiniProjectCard({
  project,
  index,
  caseStudyHref,
}: {
  project: MiniProject;
  index: number;
  caseStudyHref?: string;
}) {
  return (
    <Reveal delay={index * 0.05} className="h-full">
      <article className="group flex h-full flex-col border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] p-6 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-blue-700 hover:shadow-[6px_6px_0_rgba(0,0,0,0.1)] dark:hover:border-emerald-400 dark:hover:shadow-[6px_6px_0_rgba(255,255,255,0.08)]">
        <h4 className="text-xl font-black tracking-[0.08em] break-words">
          {caseStudyHref ? (
            <Link href={caseStudyHref} className="transition-colors hover:text-blue-700 dark:hover:text-emerald-400">
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h4>
        <p className="mt-3 flex-1 text-base leading-7 text-[var(--on-surface-variant)]">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-[var(--outline-variant)] bg-[var(--surface-container-low)] px-3 py-1 text-xs font-bold"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-5 text-sm font-black tracking-[0.12em] text-blue-700 dark:text-emerald-400">
          {caseStudyHref && (
            <Link href={caseStudyHref} className={linkClass}>
              CASE_STUDY
              <ArrowUpRight className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
            </Link>
          )}
          <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
            SOURCE
            <ArrowUpRight className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              LIVE
              <ArrowUpRight className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
            </a>
          )}
        </div>
      </article>
    </Reveal>
  );
}
