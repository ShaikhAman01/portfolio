"use client"; // CRITICAL: This fixes the 'motion' undefined error

import { Info, Layers } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react"; // Used to unwrap params in Client Components
import { Reveal } from "@/components/motion";
import { SectionTitle } from "@/components/section-title";
import { projects } from "@/lib/data";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  // In Client Components, we 'use' the params promise
  const { slug } = use(params);
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg)] text-[var(--on-surface)]">
      <main className="flex-1">
        {/* TERMINAL BREADCRUMB NAVIGATION */}
        <nav className="mx-auto max-w-[105rem] px-5 pt-24 md:px-8 md:pt-32">
          <div className="flex items-center gap-3 font-mono text-sm font-black tracking-widest text-[var(--outline)]">
            <Link href="/" className="transition hover:text-blue-700 dark:hover:text-emerald-400">[ ROOT ]</Link>
            <span>/</span>
            <Link href="/#projects" className="transition hover:text-blue-700 dark:hover:text-emerald-400">PROJECTS</Link>
            <span>/</span>
            <span className="text-[var(--on-surface)]">{project.slug.toUpperCase()}</span>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section className="mx-auto grid max-w-[105rem] gap-12 px-5 pb-16 pt-12 md:px-8 md:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <span className="bg-[var(--on-surface)] px-5 py-3 text-lg font-bold tracking-[0.16em] text-[var(--surface-container-lowest)]">VERSION {project.version.replace("v", "")}</span>
              <span className="text-lg font-bold tracking-[0.18em] text-[var(--outline)]">STATUS: {project.status}</span>
            </div>
            <h1 className="break-words text-6xl font-black tracking-tight md:text-8xl xl:text-9xl">{project.title}</h1>
            <p className="mt-10 max-w-5xl text-2xl leading-[1.75] text-[var(--on-surface-variant)] md:text-3xl">{project.longDescription}</p>
            <div className="mt-12 flex flex-col gap-5 sm:flex-row">
              <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="bg-black px-10 py-6 text-center text-lg font-black tracking-[0.14em] text-white transition hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-emerald-400">
                VIEW_SOURCE &lt;/&gt;
              </a>
              <a href={project.docsUrl} className="border border-[var(--outline-variant)] px-10 py-6 text-center text-lg font-black tracking-[0.14em] transition hover:bg-[var(--on-surface)] hover:text-[var(--surface-container-lowest)]">
                EXPLORE_DOCS ▤
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-square overflow-hidden border border-[var(--outline-variant)] bg-zinc-950 p-2 shadow-[10px_10px_0_rgba(0,0,0,0.1)] dark:border-zinc-800">
              <Image src={project.heroImage} alt={`${project.title} system preview`} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover dark:hidden" priority />
              <Image src={project.heroDarkImage} alt={`${project.title} system preview in dark mode`} fill sizes="(min-width: 1024px) 45vw, 100vw" className="hidden object-cover dark:block" priority />
            </div>
          </Reveal>
        </section>

        {/* METRICS SECTION: SYSTEM DIAGNOSTICS */}
        <section className="mx-auto grid max-w-[105rem] gap-6 px-5 py-8 md:grid-cols-2 md:px-8 xl:grid-cols-4">
          {project.metrics.map(([label, value], index) => (
            <Reveal key={label} delay={index * 0.05}>
              <div className="group relative min-w-0 overflow-hidden border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] p-8 transition-colors hover:border-blue-700 dark:hover:border-emerald-400">
                <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-[var(--outline-variant)] transition-colors group-hover:border-blue-700 dark:group-hover:border-emerald-400" />
                <p className="mb-6 break-words text-xs font-black tracking-[0.2em] text-[var(--outline)] md:text-sm">{label}</p>
                <p className={`break-words text-3xl font-black leading-tight md:text-4xl ${label === "AVAILABILITY" ? "text-emerald-400" : ""}`}>{value}</p>
                <div className="mt-8 h-[2px] w-full bg-[var(--outline-variant)]/30">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "70%" }} 
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "circOut" }}
                    className="h-full bg-blue-700 dark:bg-emerald-400"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </section>

        {/* DETAILS SECTION */}
        <section id="docs" className="mx-auto grid max-w-[105rem] gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <Reveal>
              <SectionTitle icon={Info}>ABOUT_THE_PROJECT</SectionTitle>
              <div className="max-w-5xl space-y-10 text-2xl leading-[1.75] text-[var(--on-surface-variant)]">
                {project.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.08} className="mt-20">
              <SectionTitle icon={Layers}>TECH_STACK</SectionTitle>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {project.stack.map((item) => (
                  <div key={item} className="min-w-0 break-words border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] px-5 py-5 text-center text-base font-black tracking-[0.1em] md:text-lg">
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* SIDEBAR: SYSTEM LOG ENTRIES */}
          {/* SIDEBAR: SYSTEM LOG ENTRIES */}
          <aside className="space-y-10">
            {["KEY_CHALLENGES", "KEY_LEARNINGS"].map((title, index) => (
              <Reveal key={title} delay={index * 0.08}>
                <div className="min-w-0 border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] p-8 shadow-[6px_6px_0_rgba(0,0,0,0.08)] dark:border-zinc-800">
                  <h2 className="break-words border-b border-[var(--outline-variant)] pb-6 text-2xl font-black tracking-[0.08em] md:text-3xl">{title}</h2>
                  
                  <ul className="mt-8 space-y-8 text-lg leading-relaxed text-[var(--on-surface-variant)]">
                    {(title === "KEY_CHALLENGES" ? project.challenges : project.learnings).map((item, i) => (
                      <li key={item} className="grid grid-cols-[100px_1fr] gap-4 items-start break-words">
                        {/* THE TIMESTAMP: Now locked to 100px width to prevent wrapping */}
                        <div className="flex flex-col font-mono text-[10px] font-black leading-none text-blue-700 dark:text-emerald-400 pt-1.5">
                          <span>[ 0{i + 1}:00:00 ]</span>
                        </div>
                        
                        {/* THE CONTENT */}
                        <span className="text-base md:text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </aside>
        </section>

        {/* CALL TO ACTION */}
        <section className="mx-auto max-w-[105rem] px-5 py-20 md:px-8">
          <Reveal>
            <div className="flex min-w-0 flex-col gap-8 border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] p-8 shadow-[8px_8px_0_rgba(0,0,0,0.08)] md:flex-row md:items-center md:justify-between md:p-14">
              <div className="min-w-0">
                <p className="break-words text-2xl font-black tracking-[0.08em] md:text-3xl">SYSTEM_OPERATOR_ONLINE</p>
                <p className="mt-4 text-xl text-[var(--on-surface-variant)]">Interested in the technical implementation details?</p>
              </div>
              <div className="flex min-w-0 flex-col gap-4 sm:flex-row">
                <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="border border-black bg-black px-8 py-5 text-center text-base font-black tracking-[0.12em] text-white transition hover:bg-blue-700 dark:border-white dark:bg-white dark:text-black dark:hover:bg-emerald-400 md:text-lg">VIEW_SOURCE</a>
                <Link href="/#contact" className="border border-[var(--outline-variant)] px-8 py-5 text-center text-base font-black tracking-[0.12em] transition hover:bg-[var(--on-surface)] hover:text-[var(--surface-container-lowest)] md:text-lg">CONTACT_ENGINEER</Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}