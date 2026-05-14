import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "MEDSWIFT EXPRESS | Medical Courier – Atlanta, GA",
  description:
    "Fast, reliable prescription and medical supply delivery for pharmacies and healthcare providers across Atlanta, GA. Contact us today.",
  robots: { index: true, follow: true },
  openGraph: {
    title: "MEDSWIFT EXPRESS | Medical Courier – Atlanta, GA",
    description:
      "Fast, reliable prescription and medical supply delivery for pharmacies and healthcare providers across Atlanta, GA.",
    type: "website",
    siteName: "MEDSWIFT EXPRESS",
  },
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#1B3C6E" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
