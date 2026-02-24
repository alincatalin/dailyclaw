import type { Metadata } from "next";
import { Space_Mono, Bebas_Neue, DM_Serif_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NoiseOverlay from "@/components/effects/NoiseOverlay";
import MixpanelProvider from "@/components/analytics/MixpanelProvider";

const spaceMono = Space_Mono({
  variable: "--font-body-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "DailyClaw — The Systems Library for OpenClaw Builders",
    template: "%s | DailyClaw",
  },
  description: "The systems library for people using OpenClaw to design, build, and ship agent architectures. Systems, patterns, stack, and field notes.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://dailyclaw.dev"),
  openGraph: {
    title: "DailyClaw — The Systems Library for OpenClaw Builders",
    description: "Reference systems, architecture patterns, and the stack that powers OpenClaw builders. Field notes from people who ship.",
    type: "website",
    locale: "en_US",
    siteName: "DailyClaw",
  },
  twitter: {
    card: "summary_large_image",
    title: "DailyClaw",
    description: "The Systems Library for OpenClaw Builders",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} ${bebasNeue.variable} ${dmSerifDisplay.variable} ${ibmPlexMono.variable}`}
        style={{ fontFamily: "var(--font-body-mono), monospace" }}>
        <MixpanelProvider />
        <NoiseOverlay />
        <div className="siteWrapper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
