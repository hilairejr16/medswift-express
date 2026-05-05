import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: {
    default: "MEDSWIFT EXPRESS | Medical Courier – Atlanta, GA",
    template: "%s | MEDSWIFT EXPRESS",
  },
  description:
    "MEDSWIFT EXPRESS delivers prescriptions and medical supplies from pharmacies directly to patients across the Atlanta metro area. Fast, reliable, and HIPAA-aware.",
  keywords:
    "medical courier Atlanta, pharmacy delivery Atlanta, prescription delivery, medical supply delivery, same-day medical courier GA, HIPAA courier, healthcare delivery Atlanta",
  authors: [{ name: "MEDSWIFT EXPRESS" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "MEDSWIFT EXPRESS | Medical Courier Services – Atlanta, GA",
    description:
      "Fast, reliable prescription and medical supply delivery for pharmacies and healthcare providers in Atlanta, GA.",
    type: "website",
    locale: "en_US",
    siteName: "MEDSWIFT EXPRESS",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEDSWIFT EXPRESS | Medical Courier – Atlanta, GA",
    description: "Fast, reliable medical courier services for pharmacies and healthcare providers in Atlanta, GA.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MEDSWIFT EXPRESS",
  description: "Medical courier service delivering prescriptions and medical supplies from pharmacies to patients in Atlanta, GA.",
  url: "https://medswiftexpress.com",
  telephone: "+17579408468",
  email: "beatricenatasha99@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Atlanta",
    addressRegion: "GA",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "State",
    name: "Georgia",
  },
  serviceType: "Medical Courier Service",
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
  sameAs: [
    "https://facebook.com/medswiftexpress",
    "https://instagram.com/medswiftexpress",
    "https://x.com/medswiftexpress",
    "https://linkedin.com/company/medswiftexpress",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1B3C6E" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
