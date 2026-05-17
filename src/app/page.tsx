"use client";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-brand-navy via-[#1e4a85] to-[#1a3c7a] min-h-screen flex items-center pt-16 overflow-hidden"
      >
        {/* Grid texture */}
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

            {/* Left — Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-blue-100 text-xs font-semibold px-4 py-2 rounded-full border border-white/20 mb-6">
                <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
                Atlanta Metro Medical Courier
              </div>

              {/* Logo on hero */}
              <div className="mb-6">
                <img
                  src="/logos/logo-white.svg"
                  alt="MEDSWIFT EXPRESS"
                  className="h-16 w-auto"
                />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                Fast. Reliable.<br />
                <span className="text-brand-red">Medical Delivery.</span>
              </h1>

              <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-xl">
                MEDSWIFT EXPRESS delivers prescriptions, lab specimens, and medical supplies across Atlanta — on time, every time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-red text-base px-7 py-3.5 text-center">
                  📞 Call Us →
                </a>
                <a href="#services" className="btn-outline-white text-base px-7 py-3.5 text-center">
                  Our Services
                </a>
              </div>

              {/* Trust signals */}
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

            {/* Right — Van photo + logo */}
            <div className="hidden lg:flex flex-col justify-center items-center gap-6">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-white/10 rounded-3xl blur-2xl scale-110" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">

                  <div className="relative">
                    <img
                      src="/medswift-brand.jpg"
                      alt="MedSwift Express — branded van and professional driver"
                      className="w-full object-cover"
                      style={{ maxHeight: "260px", objectPosition: "center center" }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1B3C6E]/60 to-transparent" />
                  </div>

                  <div className="bg-[#1B3C6E] px-5 py-3.5 flex items-center gap-3">
                    <span className="text-xl flex-shrink-0">🚐</span>
                    <div>
                      <p className="text-white font-black text-sm leading-tight">Professional Fleet &amp; Team</p>
                      <p className="text-blue-200 text-xs mt-0.5">Serving Atlanta, GA Metro Area</p>
                    </div>
                    <div className="ml-auto flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
                      <span className="text-blue-200 text-xs font-medium">Active</span>
                    </div>
                  </div>

                </div>
              </div>

              <img
                src="/logos/logo-white.svg"
                alt="MEDSWIFT EXPRESS logo"
                className="w-full max-w-xs drop-shadow-2xl"
              />
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

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section id="services" className="py-20 bg-white">
        <div className="container-lg">
          <div className="text-center mb-14">
            <span className="section-badge-red">What We Deliver</span>
            <h2 className="section-title mt-2">Built for Healthcare</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed">
              Every courier run is handled with the discretion and accuracy that healthcare demands.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💊",
                title: "Pharmacy Deliveries",
                desc: "Prescription pickup and delivery to patients and facilities across the metro area.",
                color: "bg-brand-red",
              },
              {
                icon: "🏥",
                title: "Clinic & Hospital Runs",
                desc: "Scheduled and on-demand routes for clinics, urgent care, and hospital networks.",
                color: "bg-brand-navy",
              },
              {
                icon: "🧪",
                title: "Lab Specimens",
                desc: "Time-sensitive specimen transport handled with care and chain-of-custody compliance.",
                color: "bg-brand-red",
              },
              {
                icon: "📦",
                title: "Medical Supplies",
                desc: "Equipment, PPE, and supply deliveries for healthcare offices and home health.",
                color: "bg-brand-navy",
              },
            ].map((s) => (
              <div key={s.title} className="card group hover:border-brand-red transition-colors text-center">
                <div className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto`}>
                  {s.icon}
                </div>
                <h3 className="font-bold text-brand-navy text-base mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLEET / WHY US ────────────────────────────────── */}
      <section id="fleet" className="py-20 bg-slate-50">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Photo */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/medswift-brand.jpg"
                  alt="MEDSWIFT EXPRESS branded van and driver"
                  className="w-full object-cover"
                  style={{ maxHeight: "420px", objectPosition: "center" }}
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-4 bg-brand-navy text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                <span className="text-2xl">🚐</span>
                <div>
                  <p className="font-black text-sm">Professional Fleet</p>
                  <p className="text-blue-200 text-xs">Atlanta, GA</p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="section-badge-red">Why MEDSWIFT</span>
              <h2 className="section-title mt-2 mb-6">
                Healthcare Delivery Done Right
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                We&apos;re not a general delivery app. Every driver, every process, and every decision is built around the unique requirements of medical delivery — discretion, speed, and accuracy.
              </p>

              <ul className="space-y-4">
                {[
                  "Dedicated medical courier — not a side feature",
                  "Trained drivers who understand healthcare protocols",
                  "Serving pharmacies, clinics, and hospitals in Atlanta",
                  "Billing via check or PO for business clients",
                  "Real-time delivery confirmation on every order",
                ].map((point, i) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${i % 2 === 0 ? "bg-brand-red" : "bg-brand-navy"}`}>
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-700 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────── */}
      <section id="contact" className="py-20 bg-gradient-to-br from-brand-navy via-[#1e4a85] to-[#1a3c7a]">
        <div className="container-md text-center">

          <span className="inline-flex items-center gap-2 bg-white/10 text-blue-100 text-xs font-semibold px-4 py-2 rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
            Get In Touch
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Schedule a Delivery?
          </h2>
          <p className="text-blue-100 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Contact us today to set up your account or request a same-day pickup in the Atlanta metro area.
          </p>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            <a
              href="tel:PHONENUMBER"
              className="bg-white/10 border border-white/20 rounded-2xl p-5 hover:bg-white/20 transition-colors group"
            >
              <div className="text-3xl mb-2">📞</div>
              <p className="text-white font-bold text-sm">Phone</p>
              <p className="text-blue-200 text-xs mt-1">Coming Soon</p>
            </a>

            <a
              href="mailto:EMAIL@DOMAIN.COM"
              className="bg-white/10 border border-white/20 rounded-2xl p-5 hover:bg-white/20 transition-colors group"
            >
              <div className="text-3xl mb-2">✉️</div>
              <p className="text-white font-bold text-sm">Email</p>
              <p className="text-blue-200 text-xs mt-1">Coming Soon</p>
            </a>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-5">
              <div className="text-3xl mb-2">📍</div>
              <p className="text-white font-bold text-sm">Location</p>
              <p className="text-blue-200 text-xs mt-1">Atlanta, GA Metro</p>
            </div>
          </div>

          {/* Hours */}
          <p className="text-blue-200 text-sm mb-12">
            🕐 Mon – Fri &nbsp;8 am – 6 pm &nbsp;·&nbsp; Sat &nbsp;9 am – 2 pm
          </p>

          {/* Social icons */}
          <div>
            <p className="text-blue-100 text-xs font-semibold uppercase tracking-widest mb-5">
              Follow Us
            </p>
            <div className="flex justify-center gap-4">
              {[
                { label: "Instagram", href: "#", icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                )},
                { label: "Facebook", href: "#", icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                )},
                { label: "X", href: "#", icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                )},
                { label: "LinkedIn", href: "#", icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )},
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer className="bg-brand-navy border-t border-white/10 py-6">
        <div className="container-lg flex flex-col sm:flex-row items-center justify-between gap-3">
          <img src="/logos/logo-white.svg" alt="MEDSWIFT EXPRESS" className="h-8 w-auto" />
          <p className="text-slate-500 text-xs text-center">
            © {new Date().getFullYear()} MEDSWIFT EXPRESS LLC · Atlanta, GA · All rights reserved.
          </p>
          <a href="medswiftexpress.com" className="text-slate-400 text-xs hover:text-white transition-colors">
            medswiftexpress.com
          </a>
        </div>
      </footer>
    </>
  );
}
