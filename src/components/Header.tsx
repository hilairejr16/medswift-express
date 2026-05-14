"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LanguageContext";

export default function Header() {
  const { tx, lang, toggle } = useLang();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const navLinks = [
    { href: "/", label: tx.nav.home },
    { href: "/about/", label: tx.nav.about },
    { href: "/contact/", label: tx.nav.contact },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-slate-100"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container-lg">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            {/* Brand image logo — shown when image exists */}
            <img
              src="/medswift-brand.jpg"
              alt="MedSwift Courier"
              className="h-10 w-auto object-contain hidden sm:block"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            {/* Fallback text logo */}
            <div className="items-center gap-2 sm:hidden" style={{ display: "flex" }}>
              <div className="w-9 h-9 bg-brand-navy rounded-xl flex items-center justify-center">
                <span className="text-white text-lg font-black leading-none">M</span>
              </div>
              <div>
                <div className="text-brand-navy font-black text-sm tracking-tight leading-tight">
                  MED<span className="text-brand-red">SWIFT</span>
                </div>
                <div className="text-brand-navy font-semibold text-[10px] tracking-[0.15em] uppercase leading-tight">
                  COURIER
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  isActive(href)
                    ? "text-brand-red bg-brand-redlt"
                    : "text-slate-600 hover:text-brand-navy hover:bg-slate-50"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle language"
              className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:border-brand-navy hover:text-brand-navy transition-colors"
            >
              <span>{lang === "en" ? "🇺🇸" : "🇪🇸"}</span>
              <span>{lang === "en" ? "ES" : "EN"}</span>
            </button>

            {/* CTA */}
            <Link
              href="/contact/"
              className="hidden md:inline-flex items-center gap-1.5 btn-red text-sm px-4 py-2"
            >
              {tx.nav.contact} →
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 bg-current rounded-full transition-transform duration-200 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current rounded-full transition-opacity duration-200 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-current rounded-full transition-transform duration-200 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-slate-100 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-lg py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                isActive(href)
                  ? "text-brand-red bg-brand-redlt"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-3">
            <Link href="/contact/" className="btn-red flex-1 justify-center text-sm py-2.5">
              {tx.nav.contact} →
            </Link>
            <button
              onClick={toggle}
              className="flex items-center gap-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600"
            >
              {lang === "en" ? "🇪🇸 ES" : "🇺🇸 EN"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
