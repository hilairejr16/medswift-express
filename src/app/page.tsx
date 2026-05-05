"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

export default function HomePage() {
  const { tx } = useLang();

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-brand-navy via-[#1e4a85] to-[#1a3c7a] min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-lg relative z-10 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — Text content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-blue-100 text-xs font-semibold px-4 py-2 rounded-full border border-white/20 mb-6">
                <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
                {tx.hero.badge}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                {tx.hero.headline}
              </h1>

              <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                {tx.hero.sub}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote/" className="btn-red text-base px-7 py-3.5">
                  {tx.hero.cta1} →
                </Link>
                <Link href="/how-it-works/" className="btn-outline-white text-base px-7 py-3.5">
                  {tx.hero.cta2}
                </Link>
              </div>

              {/* Quick trust signals */}
              <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-5">
                {[
                  { icon: "⚡", text: "Same-Day Available" },
                  { icon: "🔒", text: "HIPAA-Aware" },
                  { icon: "📍", text: "Atlanta Metro" },
                ].map((t) => (
                  <div key={t.text} className="flex items-center gap-2 text-sm text-blue-200">
                    <span>{t.icon}</span>
                    <span>{t.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Brand image */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                {/* Glow ring behind image */}
                <div className="absolute inset-0 bg-white/10 rounded-3xl blur-2xl scale-110" />
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-3 border border-white/20 shadow-2xl">
                  <img
                    src="/medswift-brand.jpg"
                    alt="MedSwift Courier — branded van and driver"
                    className="rounded-2xl w-full max-w-md object-cover"
                    style={{ maxHeight: "420px", objectPosition: "center top" }}
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-brand-red text-white text-sm font-bold px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2">
                  <span>🚗</span> On the road in Atlanta
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── Trust Strip ──────────────────────────────────── */}
      <section className="bg-white py-6 shadow-sm border-b border-slate-100">
        <div className="container-lg">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {tx.trust.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Overview ─────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="container-lg">
          <div className="text-center mb-12">
            <span className="section-badge">{tx.servicesSection.badge}</span>
            <h2 className="section-title mb-4">{tx.servicesSection.title}</h2>
            <p className="section-sub mx-auto">{tx.servicesSection.sub}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tx.services.map((svc, i) => (
              <div key={svc.title} className="card group relative overflow-hidden">
                {/* Red top accent bar on first card */}
                {i === 0 && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red rounded-t-2xl" />
                )}
                <div className="text-3xl mb-3">{svc.icon}</div>
                <h3 className="font-bold text-brand-navy text-lg mb-2 group-hover:text-brand-red transition-colors">
                  {svc.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services/" className="btn-secondary">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── How It Works Teaser ───────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-lg">
          <div className="text-center mb-14">
            <span className="section-badge">{tx.howSection.badge}</span>
            <h2 className="section-title mb-4">{tx.howSection.title}</h2>
            <p className="section-sub mx-auto">{tx.howSection.sub}</p>
          </div>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-light via-brand-blue to-brand-light" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {tx.steps.map((step, i) => (
                <div key={step.number} className="relative flex flex-col items-center text-center">
                  <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg ${i === 0 || i === 2 ? "bg-brand-red" : "bg-brand-navy"}`}>
                    <span className="text-white font-black text-xl">{step.number}</span>
                  </div>
                  <h3 className="font-bold text-brand-navy text-base mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/how-it-works/" className="btn-secondary">
              See Full Process →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────── */}
      <section className="py-20 bg-brand-light">
        <div className="container-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-badge-red">Why MEDSWIFT</span>
              <h2 className="section-title mb-6 mt-2">
                Healthcare Delivery Done Right
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                We&apos;re not a general delivery app. Every driver, every process, and every decision we make is built around the unique requirements of medical delivery{" — "}discretion, speed, and accuracy.
              </p>
              <ul className="space-y-4">
                {[
                  "Dedicated medical courier — not a side feature",
                  "Trained drivers who understand healthcare protocols",
                  "Serving pharmacies, clinics, and hospitals in Atlanta",
                  "Billing via check or PO for business clients",
                  "Real-time delivery confirmation for every order",
                ].map((point, i) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${i % 2 === 0 ? "bg-brand-red" : "bg-brand-green"}`}>
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "Same-Day", label: "Delivery Available", icon: "⚡", color: "bg-brand-red" },
                { value: "Atlanta", label: "Metro Area Coverage", icon: "📍", color: "bg-brand-navy" },
                { value: "Pharmacy", label: "Pickup Specialists", icon: "💊", color: "bg-brand-navy" },
                { value: "PO / Check", label: "Business Billing", icon: "📄", color: "bg-brand-red" },
              ].map((stat) => (
                <div key={stat.label} className="card text-center group hover:border-brand-red transition-colors">
                  <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center text-xl mb-3 mx-auto`}>
                    <span>{stat.icon}</span>
                  </div>
                  <div className="font-bold text-brand-navy text-lg leading-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Brand showcase strip ──────────────────────────── */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container-lg">
          <div className="grid md:grid-cols-3 gap-6 items-center text-center">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-brand-redlt rounded-2xl flex items-center justify-center text-3xl">🚐</div>
              <div>
                <p className="font-bold text-brand-navy">Branded Fleet</p>
                <p className="text-slate-500 text-sm">Professional vehicles you can recognize</p>
              </div>
            </div>
            <div className="md:border-x border-slate-200 flex flex-col items-center gap-3 md:py-4">
              <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-3xl">👔</div>
              <div>
                <p className="font-bold text-brand-navy">Uniformed Drivers</p>
                <p className="text-slate-500 text-sm">Trained, courteous, and professional</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-brand-greenlt rounded-2xl flex items-center justify-center text-3xl">✅</div>
              <div>
                <p className="font-bold text-brand-navy">Confirmed Delivery</p>
                <p className="text-slate-500 text-sm">Every order tracked and confirmed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-brand-navy via-[#1e4a85] to-brand-red">
        <div className="container-md text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            {tx.ctaBanner.title}
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            {tx.ctaBanner.sub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote/" className="btn-red text-base px-8 py-3.5">
              {tx.ctaBanner.btn} →
            </Link>
            <a href="tel:7579408468" className="btn-outline-white text-base px-8 py-3.5">
              📞 (757) 940-8468
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
