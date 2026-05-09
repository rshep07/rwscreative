import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://rwscreative.ca"),
  title: { default: "RWS Creative — Graphic Design", template: "%s — RWS Creative" },
  description: "RWS Creative. Independent graphic design studio. Brand identity, editorial, packaging, motion, web design.",
  openGraph: { type: "website", url: "https://rwscreative.ca", siteName: "RWS Creative", locale: "en_CA" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/*
          Archivo Black  — display / hero type
          Archivo        — body text
          Space Mono     — labels, tags, UI
        */}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 nav-pt">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
