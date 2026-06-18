"use client";

import {
  Binary,
  History as HistoryIcon,
  Mail,
  Server,
} from "lucide-react";
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
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 bg-[var(--bg)] text-[var(--on-surface)]">
        
        {/* HERO SECTION */}
        <section className="mx-auto max-w-[105rem] px-5 py-12 md:px-8 md:py-24">
          <Reveal>
            <div className="border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] p-7 md:p-12">

              {/* Window UI Top Controls */}
              <div className="mb-12 flex gap-3">
                <span className="h-3.5 w-3.5 rounded-full bg-red-500" />
                <span className="h-3.5 w-3.5 rounded-full bg-blue-400" />
                <span className="h-3.5 w-3.5 rounded-full bg-emerald-400" />
              </div>

              <HeroCode />

              {/* Terminal Panel Split Grid Frame */}
              <div className="mt-10 border border-[var(--outline-variant)]">
                <div className="grid lg:grid-cols-[1.4fr_0.9fr]">

                  {/* LEFT PANE: Typography & Action Handles */}
                  <MotionDiv
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-8 md:p-14"
                  >
                    <div className="mb-6 font-mono text-sm tracking-wider text-blue-700 dark:text-emerald-400">
                      aman@system:~$
                    </div>

                    <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.05em] md:text-7xl xl:text-8xl">
                      Building reliable
                      <br />
                      web systems.
                      <BlinkingCursor />
                    </h1>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--on-surface-variant)] md:text-xl">
                      Backend-first engineer focused on scalable APIs,
                      realtime applications, databases, and
                      production-ready fullstack products.
                    </p>

                    {/* Streamlined UI Action Layout */}
                    <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                      {/* Primary Solid Action Option */}
                      <a
                        href="#projects"
                        className="bg-black px-8 py-5 text-center text-md font-black tracking-[0.14em] text-white transition hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-emerald-400"
                      >
                        VIEW_PROJECTS →
                      </a>

                      {/* Secondary Outline Action Option */}
                      <a
                        href={profile.resumeUrl}
                        className="border border-black bg-[var(--surface-container-lowest)] px-8 py-5 text-center text-md font-black tracking-[0.14em] text-black transition hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
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
                      items-center
                      justify-center
                      p-8
                      md:p-12
                    "
                  >
                    <div className="w-full max-w-[320px]">
                      <div className="mb-6 font-mono text-xs tracking-widest text-[var(--outline)] transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-emerald-400">
                        engineer.render()
                      </div>

                      {/* Image container layout frame */}
                      <div className="relative w-full overflow-hidden border border-transparent transition-colors duration-300 group-hover:border-[var(--outline-variant)]">
                        
                        {/* Hover-Activated Adaptive Scanline overlay */}
                        <div className="animate-terminal-scan" />
                        
                        <Image
                          src="/images/pixel-avatar1.png"
                          alt="Shaikh Aman"
                          width={400}
                          height={400}
                          priority
                          className="w-full object-contain transition-all duration-300"
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
        <section id="projects" className="mx-auto max-w-[105rem] px-5 py-16 md:px-8">
          <SectionTitle icon={Server}>/DEV/PROJECTS</SectionTitle>
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="mx-auto max-w-[105rem] px-5 py-16 md:px-8">
          <SectionTitle icon={Binary}>/BIN/SKILLS</SectionTitle>
          <div className="grid gap-4 pt-4 md:grid-cols-2 xl:grid-cols-4">
            {skills.map(([label, value], index) => (
              <Reveal key={`${label}-${value}`} delay={index * 0.025}>
                <div className="group relative border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] p-8 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-blue-700 hover:shadow-[6px_6px_0_rgba(0,0,0,0.1)] dark:hover:border-emerald-400">
                  <div className="absolute right-6 top-6 h-2 w-2 bg-[var(--outline-variant)] transition-colors duration-300 group-hover:bg-blue-700 dark:group-hover:bg-emerald-400" />
                  <p className="mb-5 flex items-center gap-2 text-sm font-black tracking-[0.18em] text-[var(--outline)] transition-colors duration-300 group-hover:text-[var(--on-surface)]">
                    <span className="text-blue-700 dark:text-emerald-400">//</span> 
                    {label}
                  </p>
                  <p className="text-3xl font-black text-[var(--on-surface)]">
                    {value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* HISTORY SECTION */}
        <section id="history" className="mx-auto max-w-[105rem] px-5 py-16 md:px-8">
          <SectionTitle icon={HistoryIcon}>/VAR/LOG/HISTORY</SectionTitle>
          <div className="space-y-0 border-l-4 border-[var(--outline-variant)]">
            {history.map((item, index) => (
              <Reveal key={item.role} delay={index * 0.08}>
                <article className="grid gap-4 border-l border-[var(--outline-variant)] px-8 py-10 md:grid-cols-[1fr_auto]">
                  <div>
                    <h3 className="text-3xl font-black tracking-[0.08em]">
                      {item.role}
                    </h3>
                    <p className="mt-3 text-xl font-black tracking-[0.12em] text-blue-700 dark:text-emerald-400">
                      {item.org}
                    </p>
                    <p className="mt-5 max-w-5xl text-xl leading-8 text-[var(--on-surface-variant)]">
                      {item.body}
                    </p>
                    {"highlights" in item && (
                      <ul className="mt-6 max-w-5xl space-y-3 text-lg leading-8 text-[var(--on-surface-variant)]">
                        {item.highlights.map((highlight) => (
                          <li key={highlight}>→ {highlight}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <p className="text-xl font-bold tracking-[0.12em] text-[var(--outline)]">
                    {item.date}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="mx-auto max-w-[105rem] px-5 py-16 md:px-8 pb-32">
          <SectionTitle icon={Mail}>/DEV/TTY_CONTACT</SectionTitle>
          <ContactForm />
        </section>
        
      </main>
    </div>
  );
}