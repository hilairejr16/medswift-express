"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#fleet",    label: "Our Fleet" },
    { href: "#contact",  label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-slate-100"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container-lg">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <img
              src="/logos/logo-horizontal.svg"
              alt="MEDSWIFT EXPRESS"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-brand-navy hover:bg-slate-50 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 btn-red text-sm px-5 py-2"
            >
              📞 Call Us
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-current rounded-full transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-current rounded-full transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-current rounded-full transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-slate-100 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-lg py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="mt-3 pt-3 border-t border-slate-100">
            <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-red w-full justify-center text-sm py-2.5 flex items-center gap-1.5">
              📞 Call Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
