import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { profile } from "@/lib/data";
import { CRTBoot } from "@/components/crt-boot";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DevToolsConsole } from "@/components/devtools-console";
import { SudoMode } from "@/components/sudo-mode";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.heroDescription,
  
  metadataBase: new URL("https://www.shaikhaman.dev"),

  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: "Backend-first engineer specializing in scalable APIs, realtime distributed systems, robust database management, and production-ready architectures.",
    type: "website",
    siteName: "Shaikh Aman Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.role}`,
    description: "Backend-first engineer specializing in scalable APIs, realtime distributed systems, robust database management, and production-ready architectures.",
  },
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
        {/* Invisible System Payloads */}
        <DevToolsConsole />
        <SudoMode />
        
        {/* Hardware Boot Emulation */}
        <CRTBoot />
        
        {/* Global Navigation */}
        <Header />
        
        {/* Main Process Thread */}
        <main>
          {children}
        </main>
        
        {/* System Diagnostics */}
        <Footer />
        
      </body>
    </html>
  );
}