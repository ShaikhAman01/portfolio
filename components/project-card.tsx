import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { Reveal } from "./motion";
import { ArrowUpRight, Terminal } from "lucide-react";

type Project = (typeof projects)[number];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <article className="group border border-black bg-[var(--surface-container-lowest)] shadow-[6px_6px_0_rgba(0,0,0,0.08)] transition duration-200 hover:-translate-y-1 hover:-translate-x-1 hover:border-black hover:shadow-[10px_10px_0_rgba(0,0,0,0.16)] dark:border-white dark:bg-[var(--surface-container-lowest)] dark:hover:border-white">
        <Link href={`/projects/${project.slug}`} className="block">
          {/* Changed aspect ratio to standard 16:9 and added the grayscale hover reveal */}
          <div className="relative aspect-video overflow-hidden border-b border-[var(--outline-variant)] bg-zinc-200 grayscale transition duration-500 group-hover:grayscale-0 dark:border-[var(--outline-variant)] dark:bg-zinc-900 dark:grayscale-0">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
          
          <div className="p-7 md:p-10">
            <div className="mb-6 flex items-start justify-between gap-4">
              <h3 className="flex items-center gap-3 text-3xl font-black tracking-[0.08em]">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 border-2 border-black px-3 py-1 dark:border-white">
                {/* Pulsating status dot */}
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                <span className="text-xs font-black tracking-widest">{project.version}</span>
              </div>
            </div>
            
            <p className="mb-8 max-w-3xl text-lg leading-8 text-[var(--on-surface-variant)]">
              {project.description}
            </p>
            
            <div className="mb-10 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="border border-[var(--outline-variant)] bg-[var(--surface-container-low)] px-4 py-2 text-sm font-bold transition-colors group-hover:border-black dark:group-hover:border-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-2 text-lg font-black tracking-[0.12em] text-blue-700 dark:text-emerald-400">
              <Terminal className="h-5 w-5" strokeWidth={3} />
              <span>{project.action}</span>
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" strokeWidth={3} />
            </div>
          </div>
        </Link>
      </article>
    </Reveal>
  );
}