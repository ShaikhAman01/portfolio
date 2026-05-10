import {
  Binary,
  History as HistoryIcon,
  Mail,
  Server,
} from "lucide-react";
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
            <div className="border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] p-7 shadow-[8px_8px_0_rgba(0,0,0,0.08)] md:p-16">
              <div className="mb-16 flex gap-3">
                <span className="h-4 w-4 rounded-full bg-red-700" />
                <span className="h-4 w-4 rounded-full bg-blue-300" />
                <span className="h-4 w-4 rounded-full bg-emerald-400" />
              </div>
              
              <HeroCode />
              
              <MotionDiv
                initial={false}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="max-w-6xl text-5xl font-black leading-tight tracking-tight md:text-7xl xl:text-8xl">
                  Building backend-minded fullstack systems with mechanical
                  precision.
                  <BlinkingCursor />
                </h1>
                
                <p className="mt-8 max-w-4xl text-xl leading-9 text-[var(--on-surface-variant)] md:text-2xl">
                  {profile.heroDescription}
                </p>
                
                <div className="mt-12 flex flex-col gap-5 sm:flex-row">
                  <a
                    href="#contact"
                    className="bg-black px-10 py-6 text-center text-lg font-black tracking-[0.14em] text-white transition hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-emerald-400"
                  >
                    INITIALIZE_CONTACT →
                  </a>
                  <a
                    href={profile.resumeUrl}
                    className="border border-black bg-[var(--surface-container-lowest)] px-10 py-6 text-center text-lg font-black tracking-[0.14em] text-black transition hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                  >
                    DOWNLOAD_CV.PDF
                  </a>
                </div>
              </MotionDiv>
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