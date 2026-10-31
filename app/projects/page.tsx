import type { Metadata } from "next";
import Link from "next/link";
import { Server } from "lucide-react";
import { MiniProjectCard } from "@/components/mini-project-card";
import { moreProjects, profile, projects } from "@/lib/data";

const description = `Every project by ${profile.name}: featured case studies first, then smaller builds and experiments.`;

export const metadata: Metadata = {
  title: "All projects",
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `All projects | ${profile.name}`,
    description,
    url: "/projects",
    type: "website",
  },
};

function GroupHeading({ children, count }: { children: React.ReactNode; count: number }) {
  return (
    <h2 className="mb-6 flex items-center gap-2 text-sm font-black tracking-[0.18em] text-[var(--outline)]">
      <span aria-hidden="true" className="text-blue-700 dark:text-emerald-400">
        //
      </span>
      {children}
      <span className="font-mono">[{count}]</span>
    </h2>
  );
}

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[var(--bg)] text-[var(--on-surface)]">
      <main id="main-content" className="w-full flex-1">
        <nav className="mx-auto max-w-[105rem] px-5 pt-24 md:px-8 md:pt-32">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm font-black tracking-widest text-[var(--outline)]">
            <Link href="/" className="transition hover:text-blue-700 dark:hover:text-emerald-400">
              [ ROOT ]
            </Link>
            <span>/</span>
            <span className="text-[var(--on-surface)]">PROJECTS</span>
          </div>
        </nav>

        <section className="mx-auto max-w-[105rem] px-4 pb-24 pt-8 sm:px-6 md:px-8 md:pt-12">
          <h1 className="mb-10 flex items-start gap-3 text-2xl font-black tracking-[0.16em] sm:items-center sm:gap-4 sm:text-3xl md:text-5xl md:tracking-[0.25em] break-words">
            <span aria-hidden="true" className="mt-1 flex-shrink-0 text-blue-700 dark:text-emerald-400 sm:mt-0">
              <Server className="h-6 w-6 sm:h-8 sm:w-8 md:h-12 md:w-12" strokeWidth={3} />
            </span>
            <span className="min-w-0">/DEV/PROJECTS/ALL</span>
          </h1>

          <GroupHeading count={projects.length}>FEATURED</GroupHeading>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {projects.map((project, index) => (
              <MiniProjectCard
                key={project.slug}
                project={project}
                index={index}
                caseStudyHref={`/projects/${project.slug}`}
              />
            ))}
          </div>

          {moreProjects.length > 0 && (
            <div className="mt-16">
              <GroupHeading count={moreProjects.length}>MORE_PROJECTS</GroupHeading>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {moreProjects.map((project, index) => (
                  <MiniProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
