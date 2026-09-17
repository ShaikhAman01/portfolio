import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { SectionTitle } from "@/components/section-title";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "A privacy policy for a portfolio site, which is about as thrilling as it sounds. Short version: a contact form, cookieless analytics, and nothing else.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: `Privacy | ${profile.name}`,
    description:
      "A privacy policy for a portfolio site. Short version: a contact form and cookieless analytics.",
    url: "/privacy",
    type: "article",
  },
};

const LAST_UPDATED = "18 SEP 2026";

/** Em dash carrying the footnote marker. See the note at the bottom of the page. */
function Em() {
  return (
    <>
      {"—"}
      <sup className="text-blue-700 dark:text-emerald-400">*</sup>
    </>
  );
}

function Block({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-l-2 border-[var(--outline-variant)] pl-5 sm:pl-8">
      <h2 className="text-lg font-black tracking-[0.14em] text-[var(--on-surface)] sm:text-xl">
        <span aria-hidden="true" className="text-blue-700 dark:text-emerald-400">
          [{id}]{" "}
        </span>
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-7 text-[var(--on-surface-variant)] sm:text-lg sm:leading-8">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col bg-[var(--bg)] text-[var(--on-surface)]"
    >
      <div className="mx-auto w-full max-w-[85rem] px-5 pb-24 pt-24 md:px-8 md:pt-32">
        <nav className="mb-10 flex flex-wrap items-center gap-2 font-mono text-xs font-black tracking-widest text-[var(--outline)] sm:text-sm">
          <Link
            href="/"
            className="transition hover:text-blue-700 dark:hover:text-emerald-400"
          >
            [ ROOT ]
          </Link>
          <span>/</span>
          <span className="text-[var(--on-surface)]">PRIVACY</span>
        </nav>

        <SectionTitle icon={ShieldCheck}>PRIVACY_POLICY</SectionTitle>

        <p className="-mt-4 mb-12 font-mono text-xs font-black tracking-[0.18em] text-[var(--outline)] sm:text-sm">
          LAST_UPDATED: {LAST_UPDATED} <Em /> READ_TIME: 90s
        </p>

        <div className="mb-12 border border-[var(--outline-variant)] bg-[var(--surface-container-lowest)] p-6 shadow-[6px_6px_0_rgba(0,0,0,0.04)] sm:p-8">
          <p className="text-base leading-7 text-[var(--on-surface-variant)] sm:text-lg sm:leading-8">
            <span className="font-black text-[var(--on-surface)]">
              TL;DR <Em />
            </span>{" "}
            it&rsquo;s a portfolio. There is no growth team here, no data
            warehouse, and nobody A/B testing the colour of a button at you. If
            you email me, I get the email. That is genuinely the whole story.
            The seven sections below exist because I got curious about what a
            privacy policy would even say for a site like this, so I just made
            one.
          </p>
        </div>

        <div className="space-y-12">
          <Block id="01" title="WHAT_I_COLLECT">
            <p>
              <span className="font-bold text-[var(--on-surface)]">
                The contact form.
              </span>{" "}
              Your email address and whatever you type into the message box. If
              you type your deepest secrets in there, I will have those too, so
              maybe use the box for its intended purpose.
            </p>
            <p>
              <span className="font-bold text-[var(--on-surface)]">
                Analytics.
              </span>{" "}
              Page views, load times, and roughly which country a visit came
              from. It is cookieless and anonymous, which means I can see that
              someone looked at the PixelPlayground page for eleven seconds. I
              cannot see that it was you. Frankly, I mostly check whether the
              number is above zero.
            </p>
          </Block>

          <Block id="02" title="WHAT_I_DO_NOT_COLLECT">
            <p>
              No accounts, no passwords, no ad trackers, no fingerprinting, no
              newsletter you did not ask for, and no creepy profile stitched
              together across visits. I am not selling your data, mostly on
              principle but also because &ldquo;one guy&rsquo;s portfolio
              traffic&rdquo; is not a compelling product.
            </p>
          </Block>

          <Block id="03" title="COOKIES_AND_LOCAL_STORAGE">
            <p>
              This site sets zero cookies. It writes exactly one thing to your
              browser&rsquo;s local storage <Em />{" "}
              <code className="font-mono text-[var(--on-surface)]">
                dev-core-theme
              </code>{" "}
              <Em /> so that if you picked dark mode, it stays picked. It never
              leaves your machine. Clear your site data and it is gone, along
              with my one attempt to remember anything about you.
            </p>
            <p>
              This is also why there is no cookie banner nagging you. There is
              genuinely nothing to consent to, and I refuse to add a popup just
              to prove I read the regulations.
            </p>
          </Block>

          <Block id="04" title="WHO_ELSE_TOUCHES_IT">
            <p>
              <span className="font-bold text-[var(--on-surface)]">
                Web3Forms
              </span>{" "}
              carries the contact form to my inbox. Your message hitches a ride
              through their servers, because I would rather not run a mail
              server for six emails a month.
            </p>
            <p>
              <span className="font-bold text-[var(--on-surface)]">Vercel</span>{" "}
              hosts the site and does the analytics above. Like every web host
              since 1993, it sees your IP address in order to send you the page.
            </p>
            <p>
              Fonts are self-hosted, so your browser does not phone a font CDN on
              the way in. Small thing. I was pleased with it.
            </p>
          </Block>

          <Block id="05" title="HOW_LONG_I_KEEP_IT">
            <p>
              Contact emails stay in my inbox for as long as the conversation is
              alive, and get deleted when it obviously is not. Analytics are
              aggregate, kept on a rolling window by the platform, and cannot be
              traced back to you even if I wanted to <Em /> which, again, I do
              not.
            </p>
          </Block>

          <Block id="06" title="YOUR_REQUESTS">
            <p>
              Want me to delete your message? Email me and it is gone. Want to
              know what I hold on you? Also email me, and the answer will be
              &ldquo;one email thread, this one.&rdquo; No forms, no support
              ticket, no account to create first.
            </p>
          </Block>

          <Block id="07" title="CONTACT">
            <p>
              <a
                href={`mailto:${profile.email}`}
                className="font-bold text-blue-700 underline underline-offset-4 transition hover:text-black dark:text-emerald-400 dark:hover:text-white"
              >
                {profile.email}
              </a>
              <br />
              {profile.name} <Em /> {profile.location}, India
            </p>
            <p className="text-sm text-[var(--outline)]">
              // If you read this far, you are the first. Mention it and I will
              assume you are very thorough.
            </p>
          </Block>
        </div>

        <div className="mt-16 border-t border-[var(--outline-variant)] pt-8">
          <p className="max-w-3xl text-sm leading-6 text-[var(--outline)]">
            <span
              aria-hidden="true"
              className="font-black text-blue-700 dark:text-emerald-400"
            >
              *{" "}
            </span>
            Every em dash on this page was typed by a human. Me. I am told this
            is now considered suspicious, so each one has been individually
            labelled for your peace of mind.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="border border-black bg-[var(--surface-container-lowest)] px-6 py-4 text-center text-sm font-black tracking-[0.18em] text-black transition hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            RETURN_TO_INDEX
          </Link>
          <Link
            href="/#contact"
            className="bg-black px-6 py-4 text-center text-sm font-black tracking-[0.18em] text-white transition hover:bg-blue-700 dark:bg-white dark:text-black dark:hover:bg-emerald-400"
          >
            INITIALIZE_DISCUSSION →
          </Link>
        </div>
      </div>
    </main>
  );
}
