import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Reveal } from "@/components/motion";
import { SectionTitle } from "@/components/section-title";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header active="Projects" />
      <main className="bg-zinc-100 text-zinc-950 dark:bg-black dark:text-zinc-50">
        <section className="mx-auto grid max-w-[1680px] gap-12 px-5 pb-16 pt-24 md:px-8 md:pb-24 md:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal>
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <span className="bg-black px-5 py-3 text-lg font-bold tracking-[0.16em] text-white dark:bg-white dark:text-black">VERSION {project.version.replace("v", "")}</span>
              <span className="text-lg font-bold tracking-[0.18em] text-zinc-600 dark:text-zinc-400">STATUS: {project.status}</span>
            </div>
            <h1 className="break-words text-6xl font-black tracking-tight md:text-8xl xl:text-9xl">{project.title}</h1>
            <p className="mt-10 max-w-5xl text-2xl leading-[1.75] text-zinc-600 dark:text-zinc-300 md:text-3xl">{project.longDescription}</p>
            <div className="mt-12 flex flex-col gap-5 sm:flex-row">
              <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="bg-black px-10 py-6 text-center text-lg font-black tracking-[0.14em] text-white transition hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-emerald-400">
                VIEW_SOURCE &lt;/&gt;
              </a>
              <a href={project.docsUrl} className="border border-zinc-500 px-10 py-6 text-center text-lg font-black tracking-[0.14em] transition hover:bg-white dark:hover:bg-zinc-900">
                EXPLORE_DOCS ▤
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-square overflow-hidden border border-zinc-300 bg-zinc-950 p-2 shadow-[10px_10px_0_rgba(0,0,0,0.1)] dark:border-zinc-800">
              <Image src={project.heroImage} alt={`${project.title} system preview`} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover dark:hidden" priority />
              <Image src={project.heroDarkImage} alt={`${project.title} system preview in dark mode`} fill sizes="(min-width: 1024px) 45vw, 100vw" className="hidden object-cover dark:block" priority />
            </div>
          </Reveal>
        </section>

        <section className="mx-auto grid max-w-[1680px] gap-6 px-5 py-8 md:grid-cols-2 md:px-8 xl:grid-cols-4">
          {project.metrics.map(([label, value], index) => (
            <Reveal key={label} delay={index * 0.05}>
              <div className="min-w-0 border border-zinc-300 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
                <p className="mb-6 break-words text-base font-bold tracking-[0.14em] text-zinc-500 md:text-lg">{label}</p>
                <p className={`break-words text-3xl font-black leading-tight md:text-4xl ${label === "AVAILABILITY" ? "text-emerald-400" : ""}`}>{value}</p>
              </div>
            </Reveal>
          ))}
        </section>

        <section id="docs" className="mx-auto grid max-w-[1680px] gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <Reveal>
              <SectionTitle icon="ⓘ">ABOUT_THE_PROJECT</SectionTitle>
              <div className="max-w-5xl space-y-10 text-2xl leading-[1.75] text-zinc-600 dark:text-zinc-300">
                {project.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.08} className="mt-20">
              <SectionTitle icon="◇">TECH_STACK</SectionTitle>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {project.stack.map((item) => (
                  <div key={item} className="min-w-0 break-words border border-zinc-300 bg-white px-5 py-5 text-center text-base font-black tracking-[0.1em] dark:border-zinc-800 dark:bg-zinc-950 md:text-lg">
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <aside className="space-y-10">
            {["KEY_CHALLENGES", "KEY_LEARNINGS"].map((title, index) => (
              <Reveal key={title} delay={index * 0.08}>
                <div className="min-w-0 border border-zinc-300 bg-white p-8 shadow-[6px_6px_0_rgba(0,0,0,0.08)] dark:border-zinc-800 dark:bg-zinc-950">
                  <h2 className="break-words border-b border-zinc-300 pb-6 text-2xl font-black tracking-[0.08em] dark:border-zinc-800 md:text-3xl">{title}</h2>
                  <ul className="mt-8 space-y-8 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                    {(title === "KEY_CHALLENGES" ? project.challenges : project.learnings).map((item) => (
                      <li key={item} className="break-words">→ {item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </aside>
        </section>

        <section className="mx-auto max-w-[1680px] px-5 py-20 md:px-8">
          <Reveal>
            <div className="flex min-w-0 flex-col gap-8 border border-zinc-300 bg-white p-8 shadow-[8px_8px_0_rgba(0,0,0,0.08)] dark:border-zinc-800 dark:bg-zinc-950 md:flex-row md:items-center md:justify-between md:p-14">
              <div className="min-w-0">
                <p className="break-words text-2xl font-black tracking-[0.08em] md:text-3xl">SYSTEM_OPERATOR_ONLINE</p>
                <p className="mt-4 text-xl text-zinc-600 dark:text-zinc-400">Interested in the technical implementation details?</p>
              </div>
              <div className="flex min-w-0 flex-col gap-4 sm:flex-row">
                <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="border border-black bg-black px-8 py-5 text-center text-base font-black tracking-[0.12em] text-white transition hover:bg-blue-700 dark:border-white dark:bg-white dark:text-black dark:hover:bg-emerald-400 md:text-lg">VIEW_SOURCE</a>
                <Link href="/#contact" className="border border-zinc-400 px-8 py-5 text-center text-base font-black tracking-[0.12em] transition hover:border-black hover:bg-zinc-100 dark:border-zinc-700 dark:hover:border-white dark:hover:bg-zinc-900 md:text-lg">CONTACT_ENGINEER</Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
