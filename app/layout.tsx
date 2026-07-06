import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { profile } from "@/lib/data";
import { CRTBoot } from "@/components/crt-boot";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DevToolsConsole } from "@/components/devtools-console";
import { SudoMode } from "@/components/sudo-mode";
import { MotionProvider } from "@/components/motion";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.heroDescription,

  metadataBase: new URL("https://www.shaikhaman.dev"),
  alternates: { canonical: "/" },

  keywords: [
    "Shaikh Aman",
    "Fullstack Developer",
    "Backend Developer",
    "Next.js",
    "React",
    "Node.js",
    "PostgreSQL",
    "FastAPI",
    "Cloudflare Workers",
    "Hyderabad",
  ],
  authors: [{ name: profile.name, url: "https://www.shaikhaman.dev" }],
  creator: profile.name,

  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.heroDescription,
    url: "/",
    type: "website",
    siteName: "Shaikh Aman Portfolio",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.role}`,
    description: profile.heroDescription,
    creator: `@${profile.handle}`,
  },

  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  url: "https://www.shaikhaman.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
    addressCountry: "IN",
  },
  sameAs: [profile.github, profile.linkedin, profile.x],
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "FastAPI",
    "Cloudflare Workers",
  ],
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${jetbrainsMono.variable} scroll-smooth`} 
      suppressHydrationWarning
    >
      <body
        className="font-mono bg-[var(--bg)] text-[var(--on-surface)] antialiased"
      >
        {/* Apply stored/system theme before first paint to avoid a light-mode flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("dev-core-theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />

        {/* Structured data for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100000] focus:border focus:border-black focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-black focus:tracking-widest focus:text-black dark:focus:border-white dark:focus:bg-black dark:focus:text-white"
        >
          SKIP_TO_CONTENT
        </a>

        <MotionProvider>
          {/* Invisible System Payloads */}
          <DevToolsConsole />
          <SudoMode />

          {/* Hardware Boot Emulation */}
          <CRTBoot />

          {/* Global Navigation */}
          <Header />

          {children}

          {/* System Diagnostics */}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}