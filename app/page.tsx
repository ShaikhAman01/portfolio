import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MotionDiv, Reveal } from "@/components/motion";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { heroStack, history, profile, projects, skills } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-zinc-100 text-zinc-950 dark:bg-black dark:text-zinc-50">
        <section className="mx-auto max-w-[1680px] px-5 py-12 md:px-8 md:py-24">
          <Reveal>
            <div className="border border-zinc-300 bg-white p-7 shadow-[8px_8px_0_rgba(0,0,0,0.08)] dark:border-zinc-800 dark:bg-zinc-950 md:p-16">
              <div className="mb-16 flex gap-3">
                <span className="h-4 w-4 rounded-full bg-red-700" />
                <span className="h-4 w-4 rounded-full bg-blue-300" />
                <span className="h-4 w-4 rounded-full bg-emerald-400" />
              </div>
              <pre className="mb-20 overflow-x-auto text-base leading-8 md:text-2xl">
                <code>
                  <span className="text-blue-700 dark:text-sky-400">export const</span> Engineer = {"{"}
                  {"\n"}  <span className="text-zinc-500">name:</span> <span className="text-emerald-600">'{profile.name}'</span>,
                  {"\n"}  <span className="text-zinc-500">role:</span> <span className="text-emerald-600">'{profile.role}'</span>,
                  {"\n"}  <span className="text-zinc-500">focus:</span> <span className="text-emerald-600">'{profile.focus}'</span>,
                  {"\n"}  <span className="text-zinc-500">stack:</span> [{heroStack.map((item, index) => (
                    <span key={item}>
                      <span className="text-emerald-600">'{item}'</span>{index < heroStack.length - 1 ? ", " : ""}
                    </span>
                  ))}],
                  {"\n"}  <span className="text-zinc-500">location:</span> <span className="text-emerald-600">'{profile.location}'</span>,
                  {"\n"}  <span className="text-zinc-500">status:</span> <span className="text-emerald-600">'{profile.status}'</span>
                  {"\n"}{"};"}
                </code>
              </pre>
              <MotionDiv
                initial={false}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="max-w-6xl text-5xl font-black leading-tight tracking-tight md:text-7xl xl:text-8xl">
                  Building backend-minded fullstack systems with mechanical precision._
                </h1>
                <p className="mt-8 max-w-4xl text-xl leading-9 text-zinc-600 dark:text-zinc-300 md:text-2xl">
                  {profile.heroDescription}
                </p>
                <div className="mt-12 flex flex-col gap-5 sm:flex-row">
                  <a href="#contact" className="bg-black px-10 py-6 text-center text-lg font-black tracking-[0.14em] text-white transition hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-emerald-400">
                    INITIALIZE_CONTACT →
                  </a>
                  <a href={profile.resumeUrl} className="border border-zinc-400 px-10 py-6 text-center text-lg font-black tracking-[0.14em] transition hover:border-black hover:bg-white dark:border-zinc-700 dark:hover:border-white dark:hover:bg-zinc-900">
                    DOWNLOAD_CV.PDF
                  </a>
                </div>
              </MotionDiv>
            </div>
          </Reveal>
        </section>

        <section id="projects" className="mx-auto max-w-[1680px] px-5 py-16 md:px-8">
          <SectionTitle icon="▰">/DEV/PROJECTS</SectionTitle>
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-[1680px] px-5 py-16 md:px-8">
          <SectionTitle icon="▥">/BIN/SKILLS</SectionTitle>
          <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4">
            {skills.map(([label, value], index) => (
              <Reveal key={`${label}-${value}`} delay={index * 0.025}>
                <div className="border border-zinc-300 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
                  <p className="mb-5 text-sm font-bold tracking-[0.18em] text-zinc-500">{label}</p>
                  <p className="text-3xl font-black">{value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="history" className="mx-auto max-w-[1680px] px-5 py-16 md:px-8">
          <SectionTitle icon="↺">/VAR/LOG/HISTORY</SectionTitle>
          <div className="space-y-0 border-l-4 border-black dark:border-white">
            {history.map((item, index) => (
              <Reveal key={item.role} delay={index * 0.08}>
                <article className="grid gap-4 border-l border-zinc-300 px-8 py-10 md:grid-cols-[1fr_auto] dark:border-zinc-800">
                  <div>
                    <h3 className="text-3xl font-black tracking-[0.08em]">{item.role}</h3>
                    <p className="mt-3 text-xl font-black tracking-[0.12em] text-blue-700 dark:text-emerald-400">{item.org}</p>
                    <p className="mt-5 max-w-5xl text-xl leading-8 text-zinc-600 dark:text-zinc-300">{item.body}</p>
                    {"highlights" in item && (
                      <ul className="mt-6 max-w-5xl space-y-3 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                        {item.highlights.map((highlight) => (
                          <li key={highlight}>→ {highlight}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <p className="text-xl font-bold tracking-[0.12em] text-zinc-500">{item.date}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto grid max-w-[1680px] gap-10 px-5 py-20 md:px-8 lg:grid-cols-2">
          <Reveal>
            <SectionTitle icon="@">/DEV/NULL/CONTACT</SectionTitle>
            <p className="max-w-3xl text-2xl leading-10 text-zinc-600 dark:text-zinc-300">
              {profile.contactDescription}
            </p>
            <div className="mt-20 space-y-8 text-xl">
              <p className="flex items-center gap-8"><span className="border border-zinc-300 px-5 py-4 dark:border-zinc-800">✉</span> {profile.email}</p>
              <p className="flex items-center gap-8"><span className="border border-zinc-300 px-5 py-4 dark:border-zinc-800">&gt;_</span> {profile.terminal}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
