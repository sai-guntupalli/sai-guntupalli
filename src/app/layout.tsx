import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/content";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
});

// When exporting for GitHub Pages project hosting, URLs and assets live
// under /<repo-name>; otherwise the custom domain serves from root.
const isPagesExport = process.env.EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = isPagesExport
  ? `https://sai-guntupalli.github.io/sai-guntupalli/`
  : "https://saiguntupalli.com";

export const metadata: Metadata = {
  title: {
    default: `${site.name}, ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(siteUrl),
  icons: {
    icon: basePath ? `${basePath}/favicon.svg` : "/favicon.svg",
  },
  openGraph: {
    title: `${site.name}, ${site.role}`,
    description: site.description,
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#0d151d" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} antialiased`}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}