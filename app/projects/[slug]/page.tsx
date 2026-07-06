import { Info, Layers, AlertTriangle, Lightbulb } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MetricBar } from "@/components/metric-bar";
import { Reveal } from "@/components/motion";
import { SectionTitle } from "@/components/section-title";
import { profile, projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} — ${project.status.replaceAll("_", " ")}`,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | ${profile.name}`,
      description: project.description,
      url: `/projects/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const hasLiveLink = "liveUrl" in project && project.liveUrl;
  const hasDocsLink = project.docsUrl.startsWith("http");

  return (
    <div className="w-full max-w-full overflow-x-hidden flex min-h-screen flex-col bg-[var(--bg)] text-[var(--on-surface)]">
      <main id="main-content" className="w-full flex-1">
        
        {/* TERMINAL BREADCRUMB NAVIGATION */}
        <nav className="mx-auto max-w-[105rem] px-5 pt-24 md:px-8 md:pt-32">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm font-black tracking-widest text-[var(--outline)]">
            <Link
              href="/"
              className="transition hover:text-blue-700 dark:hover:text-emerald-400"
            >
              [ ROOT ]
            </Link>
            <span>/</span>
            <Link
              href="/#projects"
              className="transition hover:text-blue-700 dark:hover:text-emerald-400"
            >
              PROJECTS
            </Link>
            <span>/</span>
            <span className="text-[var(--on-surface)] break-all">
              {project.slug.toUpperCase()}
            </span>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section className="mx-auto grid max-w-[105rem] gap-8 px-5 pb-12 pt-8 md:px-8 md:pb-24 md:pt-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-12">
          <Reveal>
            <div className="mb-6 flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="bg-[var(--on-surface)] px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-lg font-bold tracking-[0.16em] text-[var(--surface-container-lowest)]">
                VERSION {project.version.replace("v", "")}
              </span>
              <span className="text-sm sm:text-lg font-bold tracking-[0.18em] text-[var(--outline)]">
                STATUS: {project.status}
              </span>
            </div>
            <h1 className="break-words text-4xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-[0.95]">
              {project.title}
            </h1>
            <p className="mt-6 sm:mt-10 max-w-5xl text-lg sm:text-2xl xl:text-3xl leading-[1.6] sm:leading-[1.75] text-[var(--on-surface-variant)]">
              {project.longDescription}
            </p>
            
            <div className="mt-8 sm:mt-12 flex flex-col gap-4 sm:flex-row">
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-black px-6 py-4 sm:px-8 sm:py-4 text-center text-sm font-black tracking-[0.18em] text-white transition hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-emerald-400"
              >
                VIEW_SOURCE &lt;/&gt;
              </a>
              {hasLiveLink && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-black bg-[var(--surface-container-lowest)] px-6 py-4 sm:px-8 sm:py-4 text-center text-sm font-black tracking-[0.18em] text-black transition hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  LAUNCH_LIVE_APP →
                </a>
              )}
              {hasDocsLink && (
                <a
                  href={project.docsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-dashed border-blue-700 bg-blue-50/50 px-6 py-4 sm:px-8 sm:py-4 text-center text-sm font-black tracking-[0.18em] text-blue-700 transition hover:bg-blue-700 hover:text-white dark:border-emerald-400 dark:bg-emerald-950/20 dark:text-emerald-400 dark:hover:bg-emerald-400 dark:hover:text-black"
                >
                  EXPLORE_DOCS ▤
                </a>
              )}
            </div>
          </Reveal>
          
          <Reveal delay={0.1}>
            <div className="relative aspect-video w-full overflow-hidden border border-[var(--outline-variant)] bg-zinc-950 p-1 sm:p-2 shadow-[6px_6px_0_rgba(0,0,0,0.06)] sm:shadow-[10px_10px_0_rgba(0,0,0,0.1)] dark:border-zinc-800 dark:shadow-[6px_6px_0_rgba(255,255,255,0.05)] dark:sm:shadow-[10px_10px_0_rgba(255,255,255,0.08)]">
              <Image
                src={project.heroImage}
                alt={`${project.title} system preview`}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-contain p-2 dark:hidden"
                priority
              />
              <Image
                src={project.heroDarkImage}
                alt={`${project.title} system preview in dark mode`}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="hidden object-contain p-2 dark:block"
                priority
              />
            </div>
          </Reveal>
        </section>

        {/* METRICS SECTION: SYSTEM DIAGNOSTICS */}
        <section className="mx-auto grid max-w-[105rem] gap-4 sm:gap-6 px-5 py-6 md:grid-cols-2 md:px-8 xl:grid-cols-4">
          {project.metrics.map(([label, value], index) => (
            <Reveal key={label} delay={index * 0.05} className="h-full">
              <div className="group relative flex h-full min-w-0 flex-col overflow-hidden border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] p-6 sm:p-8 transition-colors hover:border-blue-700 dark:hover:border-emerald-400">
                <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-[var(--outline-variant)] transition-colors group-hover:border-blue-700 dark:group-hover:border-emerald-400" />
                <p className="mb-4 sm:mb-6 break-words text-xs font-black tracking-[0.2em] text-[var(--outline)]">
                  {label}
                </p>
                <p
                  className="flex-1 break-words text-2xl sm:text-3xl font-black leading-tight md:text-4xl"
                >
                  {value}
                </p>
                <MetricBar delay={index * 0.1 + 0.5} />
              </div>
            </Reveal>
          ))}
        </section>

        {/* ABOUT & DETAILED OVERVIEW SECTION */}
        <section className="mx-auto max-w-[105rem] px-5 py-8 md:px-8">
          <Reveal>
            <div className="w-full border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] p-5 sm:p-8 md:p-12 shadow-[4px_4px_0_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="max-w-full break-words truncate-normal">
                <SectionTitle icon={Info}>ABOUT_THE_PROJECT</SectionTitle>
              </div>
              <div className="mt-6 sm:mt-8 max-w-6xl space-y-6 sm:space-y-8 text-lg sm:text-2xl leading-[1.65] sm:leading-[1.8] text-[var(--on-surface-variant)]">
                {project.about.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* SYSTEM TECH STACK MATRIX GRID */}
        <section className="mx-auto max-w-[105rem] px-5 py-8 md:px-8">
          <Reveal>
            <div className="max-w-full break-words text-xs sm:text-sm">
              <SectionTitle icon={Layers}>SYSTEM_ENVIRONMENT_MATRIX</SectionTitle>
            </div>
            <div className="mt-6 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {project.stack.map((item, index) => {
                const [key, val] = item.includes(":") ? item.split(":") : ["DEP", item];
                return (
                  <div
                    key={index}
                    className="group relative border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] p-5 sm:p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-700 dark:hover:border-emerald-400"
                  >
                    <div className="flex flex-col font-mono">
                      <span className="text-[10px] font-bold tracking-widest text-[var(--outline)] uppercase group-hover:text-blue-700 dark:group-hover:text-emerald-400">
                        // {key.trim()}
                      </span>
                      <span className="mt-1 sm:mt-2 text-base sm:text-lg font-black tracking-wide uppercase break-words text-[var(--on-surface)]">
                        {val.trim()}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </section>

        {/* LOG ARCHIVES SECTION: BALANCED DUAL COLUMNS */}
        <section className="mx-auto max-w-[105rem] px-5 py-8 md:px-8">
          <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-2">
            
            {/* COLUMN A: CHALLENGES REGISTER */}
            <Reveal>
              <div className="h-full border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] p-5 sm:p-8 shadow-[6px_6px_0_rgba(0,0,0,0.04)] dark:border-zinc-800 overflow-hidden">
                <div className="flex items-center gap-3 border-b border-[var(--outline-variant)] pb-4 sm:pb-6">
                  <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500 flex-shrink-0" />
                  <h2 className="text-xl sm:text-3xl font-black tracking-[0.08em] uppercase break-words">
                    Key_Challenges
                  </h2>
                </div>

                <ul className="mt-6 sm:mt-8 space-y-6 sm:space-y-8 text-[var(--on-surface-variant)]">
                  {project.challenges.map((item, i) => (
                    <li key={i} className="grid grid-cols-[85px_1fr] sm:grid-cols-[110px_1fr] gap-3 sm:gap-4 items-start break-words">
                      <div className="font-mono text-[9px] sm:text-[10px] font-black text-blue-700 dark:text-emerald-400 pt-1">
                        <span>[ ERR_0{i + 1} ]</span>
                      </div>
                      <span className="text-sm sm:text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* COLUMN B: LEARNINGS LOG */}
            <Reveal delay={0.05}>
              <div className="h-full border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] p-5 sm:p-8 shadow-[6px_6px_0_rgba(0,0,0,0.04)] dark:border-zinc-800 overflow-hidden">
                <div className="flex items-center gap-3 border-b border-[var(--outline-variant)] pb-4 sm:pb-6">
                  <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 flex-shrink-0" />
                  <h2 className="text-xl sm:text-3xl font-black tracking-[0.08em] uppercase break-words">
                    Key_Learnings
                  </h2>
                </div>

                <ul className="mt-6 sm:mt-8 space-y-6 sm:space-y-8 text-[var(--on-surface-variant)]">
                  {project.learnings.map((item, i) => (
                    <li key={i} className="grid grid-cols-[85px_1fr] sm:grid-cols-[110px_1fr] gap-3 sm:gap-4 items-start break-words">
                      <div className="font-mono text-[9px] sm:text-[10px] font-black text-blue-700 dark:text-emerald-400 pt-1">
                        <span>[ LN_0{i + 1} ]</span>
                      </div>
                      <span className="text-sm sm:text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="mx-auto max-w-[105rem] px-5 py-12 md:px-8 md:py-20">
          <Reveal>
            <div className="flex flex-col gap-6 border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] p-6 shadow-[6px_6px_0_rgba(0,0,0,0.06)] sm:shadow-[8px_8px_0_rgba(0,0,0,0.08)] md:flex-row md:items-center md:justify-between md:p-14 md:gap-8 overflow-hidden">
              <div className="min-w-0">
                <p className="break-words text-xl sm:text-3xl font-black tracking-[0.08em]">
                  //SYSTEM_COMPILE_COMPLETE
                </p>
                <p className="mt-2 sm:mt-4 text-base sm:text-xl text-[var(--on-surface-variant)]">
                  Have questions about this framework implementation or structural logic?
                </p>
              </div>
              
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-shrink-0 w-full md:w-auto">
                <Link
                  href="/#contact"
                  className="bg-black px-6 py-4 sm:px-8 sm:py-4 text-center text-sm font-black tracking-[0.18em] text-white transition hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-emerald-400 w-full sm:w-auto"
                >
                  INITIALIZE_DISCUSSION →
                </Link>

                <Link
                  href="/#projects"
                  className="border border-black bg-[var(--surface-container-lowest)] px-6 py-4 sm:px-8 sm:py-4 text-center text-sm font-black tracking-[0.18em] text-black transition hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black w-full sm:w-auto"
                >
                  RETURN_TO_INDEX
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
        
      </main>
    </div>
  );
}