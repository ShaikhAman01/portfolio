"use client";

import { Binary, History as HistoryIcon, Mail, Server } from "lucide-react";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { MotionDiv, Reveal } from "@/components/motion";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { history, profile, projects, skills } from "@/lib/data";
import { HeroCode } from "@/components/hero-code";
import { BlinkingCursor } from "@/components/blinking-cursor";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <main className="flex-1 bg-[var(--bg)] text-[var(--on-surface)] w-full">
        {/* HERO SECTION */}
        <section className="mx-auto max-w-[105rem] px-4 py-8 sm:px-6 md:px-8 md:py-24">
          <Reveal>
            <div className="border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] p-5 sm:p-7 md:p-12">
              {/* Window UI Top Controls */}
              <div className="mb-8 md:mb-12 flex gap-3">
                <span className="h-3.5 w-3.5 rounded-full bg-red-500" />
                <span className="h-3.5 w-3.5 rounded-full bg-blue-400" />
                <span className="h-3.5 w-3.5 rounded-full bg-emerald-400" />
              </div>

              <div className="w-full overflow-x-auto scrollbar-none">
                <HeroCode />
              </div>

              {/* Terminal Panel Split Grid Frame */}
              <div className="mt-10 border border-[var(--outline-variant)]">
                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.9fr]">
                  {/* LEFT PANE: Typography & Action Handles */}
                  <MotionDiv
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-5 sm:p-8 md:p-14"
                  >
                    <div className="mb-6 font-mono text-sm tracking-wider text-blue-700 dark:text-emerald-400">
                      aman@system:~$
                    </div>

                    <h1 className="max-w-5xl text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-black leading-[0.95] md:leading-[0.92] tracking-[-0.05em] break-words">
                      Building reliable
                      <br />
                      web systems.
                      <BlinkingCursor />
                    </h1>

                    <p className="mt-6 md:mt-8 max-w-2xl text-md leading-7 sm:text-lg sm:leading-8 text-[var(--on-surface-variant)] md:text-xl">
                      Backend-first engineer focused on scalable APIs, realtime
                      applications, databases, and production-ready fullstack
                      products.
                    </p>

                    {/* Streamlined UI Action Layout */}
                    <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4">
                      {/* Primary Solid Action Option */}
                      <a
                        href="#projects"
                        className="bg-black px-6 py-4 md:px-8 md:py-5 text-center text-md font-black tracking-[0.14em] text-white transition hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-emerald-400 w-full sm:w-auto"
                      >
                        VIEW_PROJECTS →
                      </a>

                      {/* Secondary Outline Action Option */}
                      <a
                        href={profile.resumeUrl}
                        className="border border-black bg-[var(--surface-container-lowest)] px-6 py-4 md:px-8 md:py-5 text-center text-md font-black tracking-[0.14em] text-black transition hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black w-full sm:w-auto"
                      >
                        DOWNLOAD_CV.PDF
                      </a>
                    </div>
                  </MotionDiv>

                  {/* RIGHT PANE: Interactive Terminal Render Frame */}
                  <MotionDiv
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="
                      group
                      border-t
                      border-[var(--outline-variant)]
                      lg:border-l
                      lg:border-t-0
                      flex
                      flex-col
                      items-center
                      justify-center
                      p-6
                      sm:p-8
                      md:p-12
                    "
                  >
                    <div className="w-full max-w-[320px]">
                      <div className="mb-4 md:mb-6 font-mono text-xs tracking-widest text-[var(--outline)] transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-emerald-400">
                        engineer.render()
                      </div>

                      {/* Image container layout frame */}
                      <div className="relative w-full overflow-hidden border border-transparent transition-colors duration-300 group-hover:border-[var(--outline-variant)] bg-black dark:bg-zinc-200">
                        {/* Hover-Activated Adaptive Scanline overlay */}
                        <div className="animate-terminal-scan" />

                        {/* RETRO DITHERING MATRIX OVERLAY */}
                        <div
                          className="absolute inset-0 z-10 pointer-events-none mix-blend-multiply opacity-40 dark:opacity-20"
                          style={{
                            backgroundImage: `radial-gradient(circle, #000 25%, transparent 26%), radial-gradient(circle, #000 25%, transparent 26%)`,
                            backgroundSize: "4px 4px",
                            backgroundPosition: "0 0, 2px 2px",
                          }}
                        />

                        <Image
                          src="/images/image1.png"
                          alt="Shaikh Aman"
                          width={400}
                          height={400}
                          priority
                          className="w-full object-contain grayscale transition-all duration-700 ease-out contrast-[1.10] brightness-[0.95] saturate-[0.75] group-hover:grayscale-0 group-hover:contrast-[1.15] group-hover:brightness-[1.00] dark:contrast-[1.05] dark:brightness-[0.90]"
                          style={{
                            imageRendering: "pixelated",
                          }}
                        />
                      </div>

                      <div className="mt-6 space-y-2 font-mono text-xs">
                        <div className="flex justify-between border-t border-[var(--outline-variant)] pt-3">
                          <span>STATUS</span>
                          <span className="text-blue-700 dark:text-emerald-400">
                            ONLINE
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <span>FOCUS</span>
                          <span>BACKEND</span>
                        </div>

                        <div className="flex justify-between">
                          <span>LOCATION</span>
                          <span>HYDERABAD</span>
                        </div>
                      </div>
                    </div>
                  </MotionDiv>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="mx-auto max-w-[105rem] px-4 py-12 sm:px-6 md:px-8">
          <SectionTitle icon={Server}>/DEV/PROJECTS</SectionTitle>
          <div className="grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="mx-auto max-w-[105rem] px-4 py-12 sm:px-6 md:px-8">
          <SectionTitle icon={Binary}>/BIN/SKILLS</SectionTitle>
          <div className="grid gap-4 pt-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {skills.map(([label, value], index) => (
              <Reveal key={`${label}-${value}`} delay={index * 0.025}>
                <div className="group relative border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] p-6 sm:p-8 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-blue-700 hover:shadow-[6px_6px_0_rgba(0,0,0,0.1)] dark:hover:border-emerald-400">
                  <div className="absolute right-6 top-6 h-2 w-2 bg-[var(--outline-variant)] transition-colors duration-300 group-hover:bg-blue-700 dark:group-hover:bg-emerald-400" />
                  <p className="mb-5 flex items-center gap-2 text-sm font-black tracking-[0.18em] text-[var(--outline)] transition-colors duration-300 group-hover:text-[var(--on-surface)]">
                    <span className="text-blue-700 dark:text-emerald-400">
                      //
                    </span>
                    {label}
                  </p>
                  <p className="text-2xl sm:text-3xl font-black text-[var(--on-surface)]">
                    {value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* HISTORY SECTION */}
        <section id="history" className="mx-auto max-w-[105rem] px-4 py-12 sm:px-6 md:px-8">
          <SectionTitle icon={HistoryIcon}>/VAR/LOG/HISTORY</SectionTitle>
          <div className="space-y-0 border-l-4 border-[var(--outline-variant)]">
            {history.map((item, index) => (
              <Reveal key={item.role} delay={index * 0.08}>
                <article className="grid gap-4 border-l border-[var(--outline-variant)] px-4 sm:px-8 py-8 md:py-10 grid-cols-1 md:grid-cols-[1fr_auto]">
                  <div className="min-w-0">
                    <h3 className="text-2xl sm:text-3xl font-black tracking-[0.08em] break-words">
                      {item.role}
                    </h3>
                    <p className="mt-2 sm:mt-3 text-lg sm:text-xl font-black tracking-[0.12em] text-blue-700 dark:text-emerald-400">
                      {item.org}
                    </p>
                    <p className="mt-4 sm:mt-5 text-md sm:text-xl leading-7 sm:leading-8 text-[var(--on-surface-variant)]">
                      {item.body}
                    </p>
                    {"highlights" in item && (
                      <ul className="mt-6 max-w-5xl space-y-3 text-md sm:text-lg leading-7 sm:leading-8 text-[var(--on-surface-variant)]">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="break-words">→ {highlight}</li>
                        ))}
                      </ul>
                    )}

                    {"links" in item && item.links && item.links.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-3 font-mono text-xs">
                        {item.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] px-3 py-1.5 font-bold uppercase tracking-wider text-[var(--on-surface-variant)] transition hover:border-blue-700 hover:text-blue-700 dark:hover:border-emerald-400 dark:hover:text-emerald-400 hover:shadow-[2px_2px_0_rgba(0,0,0,0.05)]"
                          >
                            <span>ls</span>
                            <span className="text-[var(--outline)]">../</span>
                            <span className="underline decoration-dotted">{link.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-md md:text-xl font-bold tracking-[0.12em] text-[var(--outline)] md:text-right shrink-0 mt-2 md:mt-0">
                    {item.date}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="mx-auto max-w-[105rem] px-4 py-12 sm:px-6 md:px-8 pb-24 md:pb-32">
          <SectionTitle icon={Mail}>/DEV/TTY_CONTACT</SectionTitle>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}