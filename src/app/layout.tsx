import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://rwscreative.ca"),
  title: {
    default: "RWS Creative — Graphic Design",
    template: "%s — RWS Creative",
  },
  description:
    "RWS Creative is an independent graphic design studio. Brand identity, editorial design, packaging, motion, and web design.",
  keywords: ["graphic design", "brand identity", "editorial design", "packaging", "motion design", "portfolio", "RWS Creative"],
  authors: [{ name: "RWS Creative" }],
  openGraph: {
    type: "website",
    url: "https://rwscreative.ca",
    siteName: "RWS Creative",
    title: "RWS Creative — Graphic Design",
    description: "Independent graphic design studio. Brand identity, editorial, packaging, motion, and web design.",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "RWS Creative — Graphic Design",
    description: "Independent graphic design studio.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts — loaded at runtime to avoid build-time network dependency */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main className="flex-1 nav-offset">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
