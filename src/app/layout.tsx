import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://rwscreative.ca"),
  title: { default: "RWS Creative — Graphic Design Studio", template: "%s — RWS Creative" },
  description: "RWS Creative is an independent graphic design studio. Brand identity, editorial, packaging, motion, and web design.",
  authors: [{ name: "RWS Creative" }],
  openGraph: { type: "website", url: "https://rwscreative.ca", siteName: "RWS Creative", locale: "en_CA" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Raleway: ultra-light to medium for wide-tracked display */}
        {/* Inter: UI, body, labels */}
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main className="flex-1 nav-pt">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
