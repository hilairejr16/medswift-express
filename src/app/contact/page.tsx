"use client";

import { useState, FormEvent } from "react";
import { useLang } from "@/context/LanguageContext";

// ── Replace this ID after signing up at formspree.io ──────
const FORMSPREE_ID = "YOUR_FORMSPREE_FORM_ID";

export default function ContactPage() {
  const { tx } = useLang();
  const cp = tx.contactPage;
  const form = cp.form;

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

  const contactItems = [
    { icon: "📞", label: "Phone", value: cp.info.phone, href: "tel:7579408468" },
    { icon: "✉️", label: "Email", value: cp.info.email, href: "mailto:beatricenatasha99@gmail.com" },
    { icon: "📍", label: "Service Area", value: cp.info.location },
    { icon: "🕐", label: "Business Hours", value: cp.info.hours },
  ];

  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-brand-navy to-[#1e4a85] pt-32 pb-16">
        <div className="container-lg text-center">
          <span className="inline-block bg-white/10 text-blue-100 text-xs font-semibold px-4 py-2 rounded-full border border-white/20 mb-4">
            {cp.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            {cp.title}
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto leading-relaxed">{cp.sub}</p>
        </div>
      </section>

      {/* ── Contact Body ──────────────────────────────────── */}
      <section className="py-16 bg-slate-50">
        <div className="container-md">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactItems.map((item) => (
                    <div key={item.label} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
                      <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-brand-navy font-semibold hover:text-brand-blue transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-brand-navy font-semibold">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prompt for quote */}
              <div className="bg-brand-navy text-white rounded-2xl p-6">
                <div className="text-3xl mb-3">💡</div>
                <h3 className="font-bold text-lg mb-2">Need a delivery quote?</h3>
                <p className="text-blue-200 text-sm mb-4 leading-relaxed">
                  Use our dedicated quote request form to give us the details we need to set up your service quickly.
                </p>
                <a
                  href="/quote/"
                  className="inline-flex items-center gap-2 bg-brand-green text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-green-700 transition-colors"
                >
                  {tx.nav.quote} →
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {status === "success" ? (
                <div className="card text-center py-16">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">Message Sent!</h3>
                  <p className="text-slate-500 max-w-sm mx-auto">{form.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card space-y-5">
                  <h2 className="text-xl font-bold text-brand-navy mb-2">Send Us a Message</h2>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label" htmlFor="c-name">{form.name} *</label>
                      <input
                        id="c-name"
                        name="name"
                        type="text"
                        required
                        placeholder={form.namePh}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="c-email">{form.email} *</label>
                      <input
                        id="c-email"
                        name="email"
                        type="email"
                        required
                        placeholder={form.emailPh}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label" htmlFor="c-phone">{form.phone}</label>
                      <input
                        id="c-phone"
                        name="phone"
                        type="tel"
                        placeholder={form.phonePh}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label" htmlFor="c-subject">{form.subject}</label>
                      <input
                        id="c-subject"
                        name="subject"
                        type="text"
                        placeholder={form.subjectPh}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label" htmlFor="c-message">{form.message} *</label>
                    <textarea
                      id="c-message"
                      name="message"
                      rows={5}
                      required
                      placeholder={form.messagePh}
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
                    className="btn-primary w-full justify-center text-base py-3.5 disabled:opacity-60"
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
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
