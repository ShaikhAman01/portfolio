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
  
  metadataBase: new URL(
    process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : "http://localhost:3000"
  ),

  openGraph: {
    title: profile.name,
    description: "Building reliable web systems.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: profile.name,
    description: "Building reliable web systems.",
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