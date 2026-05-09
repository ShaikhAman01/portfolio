import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { Reveal } from "./motion";

type Project = (typeof projects)[number];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <article className="group border border-zinc-300 bg-white shadow-[6px_6px_0_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:border-black hover:shadow-[10px_10px_0_rgba(0,0,0,0.16)] dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-white">
        <Link href={`/projects/${project.slug}`} className="block">
          <div className="relative aspect-[1198/382] overflow-hidden border-b border-zinc-300 bg-zinc-200 grayscale dark:border-zinc-800 dark:bg-zinc-900 dark:grayscale-0">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-7 md:p-10">
            <div className="mb-6 flex items-start justify-between gap-4">
              <h3 className="text-3xl font-black tracking-[0.08em]">{project.title}</h3>
              <span className="border-2 border-black px-3 py-1 text-sm font-black dark:border-white">{project.version}</span>
            </div>
            <p className="mb-8 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">{project.description}</p>
            <div className="mb-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="border border-zinc-300 bg-zinc-100 px-4 py-2 text-sm font-bold dark:border-zinc-700 dark:bg-zinc-900">
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-lg font-black tracking-[0.12em] text-blue-700 dark:text-emerald-400">
              {project.action}↗
            </span>
          </div>
        </Link>
      </article>
    </Reveal>
  );
}
