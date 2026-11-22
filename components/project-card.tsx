import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { Reveal } from "./motion";
import { ArrowUpRight, Terminal } from "lucide-react";

type Project = (typeof projects)[number];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <article className="h-full flex flex-col group border border-black bg-[var(--surface-container-lowest)] shadow-[6px_6px_0_rgba(0,0,0,0.08)] transition duration-200 hover:-translate-y-1 hover:-translate-x-1 hover:border-black hover:shadow-[10px_10px_0_rgba(0,0,0,0.16)] dark:border-white dark:bg-[var(--surface-container-lowest)] dark:hover:border-white dark:shadow-[6px_6px_0_rgba(255,255,255,0.06)] dark:hover:shadow-[10px_10px_0_rgba(255,255,255,0.12)] relative">
        
        <div aria-hidden="true" className="flex items-center gap-2 border-b border-[var(--outline-variant)] px-4 py-2.5 text-xs text-[var(--outline)]">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 truncate transition-colors group-hover:text-[var(--on-surface)]">~/projects/{project.slug}</span>
        </div>

        <Link href={`/projects/${project.slug}`} className="block">
          <div className="relative aspect-video overflow-hidden border-b border-[var(--outline-variant)] bg-zinc-200 grayscale transition duration-300 group-hover:grayscale-0 dark:border-[var(--outline-variant)] dark:bg-zinc-900 dark:grayscale group-hover:dark:grayscale-0">
  <Image
    src={project.image}
    alt={`${project.title} preview`}
    fill
    sizes="(min-width: 1024px) 50vw, 100vw"
    className="object-cover transition duration-300 group-hover:scale-105"
  />
  <div className="animate-terminal-scan" />
</div>
        </Link>
          
        <div className="p-7 md:p-10 flex-1 flex flex-col">
          
          {/* Header Block */}
          <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <Link href={`/projects/${project.slug}`} className="block">
              <h3 className="flex items-center gap-3 text-3xl font-black tracking-[0.08em] hover:text-blue-700 dark:hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
            </Link>

            <div className="flex items-center gap-3 relative z-20">
              <div className="flex items-center gap-2 border-2 border-black px-3 py-1 dark:border-white bg-[var(--surface-container-lowest)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                <span className="text-xs font-black tracking-widest">{project.status}</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col">
            <Link href={`/projects/${project.slug}`} className="block flex-1">
              <p className="mb-8 max-w-3xl text-lg leading-8 text-[var(--on-surface-variant)]">
                {project.description}
              </p>
            </Link>
            
            <div className="mb-10 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="border border-[var(--outline-variant)] px-4 py-2 text-sm font-bold transition-colors group-hover:border-black dark:group-hover:border-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
            <Link href={`/projects/${project.slug}`} className="flex items-center gap-2 text-lg font-black tracking-[0.12em] text-blue-700 dark:text-emerald-400">
              <Terminal className="h-5 w-5" strokeWidth={3} aria-hidden="true" />
              <span>{project.action}</span>
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" strokeWidth={3} aria-hidden="true" />
            </Link>

            {"liveUrl" in project && project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 border border-dashed border-blue-700 bg-blue-50/50 px-3 py-1.5 text-sm font-black tracking-widest text-blue-700 transition-colors hover:bg-blue-700 hover:text-white dark:border-emerald-400 dark:bg-emerald-950/20 dark:text-emerald-400 dark:hover:bg-emerald-400 dark:hover:text-black"
                title="Launch Production Application Deployment"
              >
                LIVE_TARGET
                <ArrowUpRight className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

      </article>
    </Reveal>
  );
}