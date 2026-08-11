import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rosalyn Amondi Ajigoh | Full-Stack Software Engineer",
    template: "%s | Rosalyn Amondi Ajigoh",
  },
  description:
    "Portfolio of Rosalyn Amondi Ajigoh, a full-stack software engineer building reliable, scalable and thoughtful digital products.",
  keywords: [
    "Rosalyn Amondi Ajigoh",
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Rosalyn Amondi Ajigoh" }],
  creator: "Rosalyn Amondi Ajigoh",
  metadataBase: new URL("https://rosalynamondi.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Rosalyn Amondi Ajigoh | Full-Stack Software Engineer",
    description:
      "Building reliable, scalable and thoughtful digital products across web, mobile and backend systems.",
    siteName: "Rosalyn Amondi Ajigoh",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rosalyn Amondi Ajigoh | Full-Stack Software Engineer",
    description:
      "Full-stack software engineer building reliable, scalable and thoughtful digital products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}