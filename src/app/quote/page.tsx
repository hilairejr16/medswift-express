"use client";

import { useState, FormEvent } from "react";
import { useLang } from "@/context/LanguageContext";

// ── Replace this ID after signing up at formspree.io ──────
const FORMSPREE_ID = "YOUR_FORMSPREE_FORM_ID";

export default function QuotePage() {
  const { tx } = useLang();
  const f = tx.quotePage;
  const form = f.form;

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-brand-navy to-[#1e4a85] pt-32 pb-16">
        <div className="container-lg text-center">
          <span className="inline-block bg-white/10 text-blue-100 text-xs font-semibold px-4 py-2 rounded-full border border-white/20 mb-4">
            {f.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            {f.title}
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto leading-relaxed">{f.sub}</p>
        </div>
      </section>

      {/* ── Form ──────────────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="container-md">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Sidebar info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="card">
                <h3 className="font-bold text-brand-navy text-lg mb-4">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    "We receive your request",
                    "We review and prepare a quote",
                    "A team member contacts you within 1 business day",
                    "We confirm pickup schedule and pricing",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-brand-navy text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-slate-600 text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="card bg-brand-light border-brand-blue/20">
                <h3 className="font-bold text-brand-navy mb-3">Need Help Now?</h3>
                <p className="text-slate-600 text-sm mb-4">
                  For urgent or same-day requests, call us directly.
                </p>
                <a
                  href="tel:7579408468"
                  className="flex items-center gap-2 text-brand-blue font-semibold text-sm hover:text-brand-navy transition-colors"
                >
                  📞 (757) 940-8468
                </a>
                <a
                  href="mailto:beatricenatasha99@gmail.com"
                  className="flex items-center gap-2 text-brand-blue font-semibold text-sm hover:text-brand-navy transition-colors mt-2"
                >
                  ✉️ beatricenatasha99@gmail.com
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === "success" ? (
                <div className="card text-center py-16">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">Request Sent!</h3>
                  <p className="text-slate-500 max-w-sm mx-auto">{form.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card space-y-5">
                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label" htmlFor="q-name">{form.name} *</label>
                      <input
                        id="q-name"
                        name="name"
                        type="text"
                        required
                        placeholder={form.namePh}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="q-company">{form.company} *</label>
                      <input
                        id="q-company"
                        name="company"
                        type="text"
                        required
                        placeholder={form.companyPh}
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label" htmlFor="q-phone">{form.phone} *</label>
                      <input
                        id="q-phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder={form.phonePh}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="q-email">{form.email} *</label>
                      <input
                        id="q-email"
                        name="email"
                        type="email"
                        required
                        placeholder={form.emailPh}
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Addresses */}
                  <div>
                    <label className="form-label" htmlFor="q-pickup">{form.pickup} *</label>
                    <input
                      id="q-pickup"
                      name="pickup_address"
                      type="text"
                      required
                      placeholder={form.pickupPh}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="q-delivery">{form.delivery} *</label>
                    <input
                      id="q-delivery"
                      name="delivery_address"
                      type="text"
                      required
                      placeholder={form.deliveryPh}
                      className="form-input"
                    />
                  </div>

                  {/* Selects */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label" htmlFor="q-service">{form.serviceType} *</label>
                      <select
                        id="q-service"
                        name="service_type"
                        required
                        defaultValue=""
                        className="form-input"
                      >
                        {form.serviceOptions.map((opt, i) => (
                          <option key={i} value={i === 0 ? "" : opt} disabled={i === 0}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="form-label" htmlFor="q-frequency">{form.frequency}</label>
                      <select
                        id="q-frequency"
                        name="frequency"
                        defaultValue=""
                        className="form-input"
                      >
                        {form.frequencyOptions.map((opt, i) => (
                          <option key={i} value={i === 0 ? "" : opt} disabled={i === 0}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="form-label" htmlFor="q-notes">{form.notes}</label>
                    <textarea
                      id="q-notes"
                      name="notes"
                      rows={4}
                      placeholder={form.notesPh}
                      className="form-input resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                      {form.error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        {form.submitting}
                      </span>
                    ) : (
                      <>{form.submit} →</>
                    )}
                  </button>

                  <p className="text-slate-400 text-xs text-center">
                    * Required fields. We'll respond within 1 business day.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
