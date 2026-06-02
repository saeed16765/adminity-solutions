import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://adminitysolutions.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Adminity Solutions | Fractional Operations for US Businesses",
  description:
    "Adminity Solutions is a Lahore-based operations consultancy helping US businesses build systems, manage teams, and scale with AI-powered workflows.",
  keywords: [
    "fractional operations",
    "operations consultancy",
    "AI workflow design",
    "SOP development",
    "remote team management",
    "business operations",
  ],
  authors: [{ name: "Adminity Solutions" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Adminity Solutions",
    title: "Adminity Solutions | Fractional Operations for US Businesses",
    description:
      "A Lahore-based operations consultancy helping US businesses build systems, manage teams, and scale with AI-powered workflows.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adminity Solutions | Fractional Operations for US Businesses",
    description:
      "A Lahore-based operations consultancy helping US businesses build systems, manage teams, and scale with AI-powered workflows.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="page-bg" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
