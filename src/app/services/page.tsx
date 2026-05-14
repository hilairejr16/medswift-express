"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { tx } = useLang();
  const sp = tx.servicesPage;

  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-brand-navy to-[#1e4a85] pt-32 pb-20">
        <div className="container-lg text-center">
          <span className="inline-block bg-white/10 text-blue-100 text-xs font-semibold px-4 py-2 rounded-full border border-white/20 mb-4">
            {sp.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            {sp.title}
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">{sp.sub}</p>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sp.services.map((svc) => (
              <div
                key={svc.title}
                className="rounded-2xl border border-slate-100 p-8 hover:border-brand-red hover:shadow-lg transition-all duration-200 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-brand-navy/8 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl group-hover:bg-brand-red group-hover:text-white transition-all duration-200">
                    {svc.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-brand-navy text-xl mb-3 group-hover:text-brand-red transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {svc.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-brand-navy bg-brand-navy/10 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Info ──────────────────────────────────── */}
      <section className="py-16 bg-brand-redlt">
        <div className="container-md text-center">
          <div className="text-4xl mb-4">💳</div>
          <h2 className="section-title mb-4">{sp.pricing.title}</h2>
          <p className="text-slate-500 text-base leading-relaxed mb-3 max-w-xl mx-auto">
            {sp.pricing.sub}
          </p>
          <p className="text-brand-navy text-sm font-medium mb-8">{sp.pricing.note}</p>
          <Link href="/quote/" className="btn-primary text-base px-8 py-3.5">
            {sp.pricing.cta} →
          </Link>
        </div>
      </section>

      {/* ── Process teaser ────────────────────────────────── */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container-md">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: "📋", title: "Submit Your Request", desc: "Fill out our simple quote form online or call us directly." },
              { icon: "🚗", title: "We Pick Up & Deliver", desc: "A trained MEDSWIFT driver handles your items from pickup to doorstep." },
              { icon: "✅", title: "You Get Confirmation", desc: "Receive delivery confirmation for every completed order." },
            ].map((step) => (
              <div key={step.title} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-lg">
                  <span>{step.icon}</span>
                </div>
                <h3 className="font-bold text-brand-navy mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
