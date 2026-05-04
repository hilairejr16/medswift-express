import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MEDSWIFT EXPRESS | Medical Courier Services – Atlanta, GA",
  description:
    "MEDSWIFT EXPRESS delivers prescriptions and medical supplies from pharmacies directly to patients across the Atlanta metro area. Fast, reliable, and HIPAA-aware.",
  keywords:
    "medical courier Atlanta, pharmacy delivery Atlanta, prescription delivery, medical supply delivery, same-day medical courier GA",
  openGraph: {
    title: "MEDSWIFT EXPRESS | Medical Courier Services – Atlanta, GA",
    description:
      "Fast, reliable prescription and medical supply delivery for pharmacies and healthcare providers in Atlanta, GA.",
    type: "website",
    locale: "en_US",
  },
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
      </head>
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
