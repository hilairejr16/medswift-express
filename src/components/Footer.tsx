"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

export default function Footer() {
  const { tx } = useLang();

  const navLinks = [
    { href: "/", label: tx.nav.home },
    { href: "/about/", label: tx.nav.about },
    { href: "/services/", label: tx.nav.services },
    { href: "/how-it-works/", label: tx.nav.howItWorks },
    { href: "/quote/", label: tx.nav.quote },
    { href: "/contact/", label: tx.nav.contact },
  ];

  return (
    <footer className="bg-brand-navy text-white">
      <div className="container-lg py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="text-brand-navy text-xl font-black leading-none">M</span>
              </div>
              <div>
                <div className="font-black text-base tracking-tight leading-tight">MEDSWIFT</div>
                <div className="text-brand-blue font-semibold text-[10px] tracking-[0.2em] uppercase">
                  EXPRESS
                </div>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 max-w-xs">
              {tx.footer.tagline}
            </p>
            <p className="text-brand-blue text-xs font-medium">
              📍 {tx.footer.serving}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">
              {tx.footer.links}
            </h3>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-300 hover:text-white text-sm transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">
              {tx.footer.contact}
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📞</span>
                <a href="tel:7579408468" className="hover:text-white transition-colors">
                  (757) 940-8468
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">✉️</span>
                <a
                  href="mailto:beatricenatasha99@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  beatricenatasha99@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>Atlanta, GA Metro Area</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">🕐</span>
                <span>Mon–Fri: 8am–6pm · Sat: 9am–2pm</span>
              </li>
            </ul>
            <div className="mt-5">
              <Link
                href="/quote/"
                className="inline-flex items-center gap-1.5 bg-brand-green text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-green-700 transition-colors"
              >
                {tx.nav.cta} →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-400 text-xs">{tx.footer.legal}</p>
          <p className="text-slate-400 text-xs">
            Medical Courier · Atlanta, GA · Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
}
