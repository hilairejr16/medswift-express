"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

export default function AboutPage() {
  const { tx } = useLang();
  const a = tx.about;

  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-brand-navy to-[#1e4a85] pt-32 pb-20">
        <div className="container-lg text-center">
          <span className="inline-block bg-white/10 text-blue-100 text-xs font-semibold px-4 py-2 rounded-full border border-white/20 mb-4">
            {a.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            {a.title}
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            Atlanta-based medical courier service dedicated to getting the right medications and supplies to patients{" — "}safely and on time.
          </p>
        </div>
      </section>

      {/* ── Story ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-md">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">{a.body1}</p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">{a.body2}</p>
              {/* Mission card */}
              <div className="bg-brand-light rounded-2xl p-6 border-l-4 border-brand-red">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-bold text-brand-navy text-lg mb-2">{a.mission.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  &ldquo;{a.mission.text}&rdquo;
                </p>
              </div>
            </div>
            {/* Brand image */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-brand-navy/20 to-brand-red/20 rounded-3xl blur-xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/medswift-brand.jpg"
                  alt="MedSwift Courier — fleet and team"
                  className="w-full object-cover"
                  style={{ maxHeight: "420px", objectPosition: "center top" }}
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-brand-navy/90 backdrop-blur-sm text-white rounded-xl px-5 py-3 flex items-center gap-3">
                  <span className="text-2xl">🚗</span>
                  <div>
                    <p className="font-bold text-sm">Professional Fleet & Team</p>
                    <p className="text-blue-200 text-xs">Serving Atlanta, GA Metro Area</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="container-lg">
          <div className="text-center mb-12">
            <span className="section-badge-red">Our Values</span>
            <h2 className="section-title mt-2">What Drives Every Delivery</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {a.values.map((v, i) => (
              <div key={v.title} className="card text-center group hover:border-brand-red transition-colors">
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center text-2xl ${i % 2 === 0 ? "bg-brand-redlt" : "bg-brand-light"}`}>
                  {v.icon}
                </div>
                <h3 className={`font-bold text-lg mb-2 ${i % 2 === 0 ? "text-brand-red" : "text-brand-navy"}`}>{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose MEDSWIFT ───────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-md">
          <div className="text-center mb-12">
            <span className="section-badge">Why Choose Us</span>
            <h2 className="section-title">{a.whyUs.title}</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {a.whyUs.points.map((point) => (
              <div key={point} className="flex items-start gap-3 p-4 rounded-xl bg-brand-light">
                <div className="mt-0.5 w-5 h-5 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-700 text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-r from-brand-navy to-brand-red">
        <div className="container-md text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">
            Tell us about your delivery needs and we&apos;ll put together a solution that works for your pharmacy or healthcare practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote/" className="btn-red text-base px-7 py-3.5 bg-white !text-brand-red hover:!bg-slate-100">
              {tx.nav.quote} →
            </Link>
            <Link href="/contact/" className="btn-outline-white text-base px-7 py-3.5">
              {tx.nav.contact}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
