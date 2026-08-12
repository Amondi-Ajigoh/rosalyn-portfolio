import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://rosalynamondi.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

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

  authors: [
    {
      name: "Rosalyn Amondi Ajigoh",
      url: siteUrl,
    },
  ],

  creator: "Rosalyn Amondi Ajigoh",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
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
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
