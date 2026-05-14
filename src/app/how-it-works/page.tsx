"use client";

import { useState } from "react";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

export default function HowItWorksPage() {
  const { tx } = useLang();
  const hw = tx.howPage;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-brand-navy to-[#1e4a85] pt-32 pb-20">
        <div className="container-lg text-center">
          <span className="inline-block bg-white/10 text-blue-100 text-xs font-semibold px-4 py-2 rounded-full border border-white/20 mb-4">
            {hw.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            {hw.title}
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">{hw.sub}</p>
        </div>
      </section>

      {/* ── Steps ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-md">
          <div className="space-y-10">
            {hw.steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Number + visual */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-brand-navy rounded-3xl flex flex-col items-center justify-center shadow-xl">
                    <span className="text-brand-red text-xs font-bold tracking-widest">STEP</span>
                    <span className="text-white text-3xl font-black leading-tight">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 p-8 rounded-2xl border border-slate-100 ${
                    index % 2 !== 0 ? "bg-brand-redlt" : "bg-slate-50"
                  }`}
                >
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-base leading-relaxed mb-4">{step.desc}</p>
                  <div className="inline-flex items-center gap-2 bg-brand-navy/10 text-brand-navy text-xs font-semibold px-4 py-2 rounded-full">
                    <span>📋</span> {step.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visual flow summary ───────────────────────────── */}
      <section className="py-16 bg-brand-navy">
        <div className="container-lg">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            {[
              { icon: "🏪", label: "Pharmacy / Clinic" },
              { icon: "→", label: "" },
              { icon: "🚗", label: "MEDSWIFT Driver" },
              { icon: "→", label: "" },
              { icon: "🏠", label: "Patient / Destination" },
            ].map((item, i) => (
              <div key={i} className="flex items-center">
                {item.icon === "→" ? (
                  <span className="text-brand-red text-3xl font-bold hidden sm:block mx-2">→</span>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-2xl">
                      {item.icon}
                    </div>
                    <span className="text-blue-100 text-xs font-medium">{item.label}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-md">
          <div className="text-center mb-12">
            <span className="section-badge">FAQ</span>
            <h2 className="section-title">{hw.faq.title}</h2>
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            {hw.faq.items.map((item, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-brand-navy text-sm pr-4">{item.q}</span>
                  <span
                    className={`text-brand-red text-xl font-light flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <p className="px-6 py-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-16 bg-brand-light">
        <div className="container-md text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-500 mb-8 max-w-lg mx-auto">
            Submit a quote request and our team will reach out within one business day.
          </p>
          <Link href="/quote/" className="btn-primary text-base px-8 py-3.5">
            {tx.nav.quote} →
          </Link>
        </div>
      </section>
    </>
  );
}
