"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  {
    label: "General",
    icon: "💬",
    items: [
      { q: "What is MEDSWIFT EXPRESS?", a: "MEDSWIFT EXPRESS is a professional medical courier service based in Atlanta, GA. We specialize in delivering prescriptions and medical supplies from pharmacies and healthcare facilities directly to patients and care destinations." },
      { q: "Who do you serve?", a: "We serve pharmacies, clinics, outpatient facilities, specialty practices, and smaller hospital facilities across the Atlanta metro area." },
      { q: "What areas do you cover?", a: "We primarily serve the Atlanta, GA metro area and surrounding communities. Contact us to confirm coverage for your specific pickup and delivery locations." },
      { q: "Are you licensed and insured?", a: "Yes. MEDSWIFT EXPRESS operates as a licensed courier service. We carry commercial auto insurance and general liability coverage appropriate for medical delivery operations." },
    ],
  },
  {
    label: "Services",
    icon: "🚗",
    items: [
      { q: "What types of items do you deliver?", a: "We deliver prescriptions, over-the-counter medications, medical supplies, specimen kits, diagnostic tools, and other healthcare-related materials. We do not transport controlled substances requiring special DEA licensing unless agreed in writing." },
      { q: "Do you offer same-day delivery?", a: "Yes — same-day and rush delivery options are available depending on driver availability and the distance involved. Contact us directly for urgent requests." },
      { q: "Can I set up recurring deliveries?", a: "Absolutely. We offer scheduled and recurring route options — daily, weekly, or custom — to support pharmacies with a regular patient delivery base." },
      { q: "Do you handle temperature-sensitive medications?", a: "We offer temperature-aware handling for medications such as insulin and injectables that require specific conditions. Please indicate this when submitting your quote request." },
      { q: "Do you deliver to patients' homes?", a: "Yes. We deliver directly to patient residences, care facilities, assisted living communities, and other destinations as directed by the pharmacy or healthcare provider." },
    ],
  },
  {
    label: "Billing & Payments",
    icon: "💳",
    items: [
      { q: "How does billing work?", a: "We bill business clients via invoice after service is completed. Payment is accepted by check or purchase order (PO number). We do not require upfront payment for established accounts." },
      { q: "Do you charge per delivery or have a monthly rate?", a: "Pricing is discussed when you submit a quote request. We offer per-delivery pricing and can discuss volume or route-based pricing for high-frequency accounts." },
      { q: "Are there hidden fees?", a: "No. We provide clear pricing upfront. If any additional charges apply (e.g., distance surcharges or rush fees), these are disclosed before service begins." },
    ],
  },
  {
    label: "Process",
    icon: "📋",
    items: [
      { q: "How do I place a delivery order?", a: "Use the Request a Quote form on our website, or call us directly at (757) 940-8468. Once we confirm your details and pricing, we schedule the pickup." },
      { q: "How much notice do I need to give?", a: "For standard deliveries, 2–4 hours notice is ideal. For same-day rush, call us directly as soon as possible to confirm availability." },
      { q: "Will I receive delivery confirmation?", a: "Yes. We provide delivery confirmation for every completed order so you and your patients always know the status of a delivery." },
      { q: "What happens if a delivery is missed?", a: "If no one is available to receive a delivery, our driver will follow the protocol agreed upon during setup — this may include leaving with a neighbor, returning for a second attempt, or contacting the pharmacy." },
    ],
  },
  {
    label: "Privacy & Compliance",
    icon: "🔒",
    items: [
      { q: "Are your deliveries HIPAA-compliant?", a: "We operate with full awareness of HIPAA privacy requirements. Our drivers are trained to handle patient information and deliveries with discretion and confidentiality. Business Associate Agreement (BAA) execution is available upon request." },
      { q: "Who has access to patient delivery information?", a: "Only the assigned driver and relevant MEDSWIFT staff involved in fulfilling the delivery have access to delivery details. We do not share patient information with third parties." },
    ],
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (key: string) => setOpen(open === key ? null : key);

  return (
    <>
      <section className="bg-gradient-to-br from-brand-navy to-[#1e4a85] pt-32 pb-16">
        <div className="container-lg text-center">
          <span className="inline-block bg-white/10 text-blue-100 text-xs font-semibold px-4 py-2 rounded-full border border-white/20 mb-4">
            Frequently Asked Questions
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Got Questions? We&apos;ve Got Answers.
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            Everything pharmacies and healthcare providers ask us before getting started.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-10">
          {categories.map((cat) => (
            <div key={cat.label}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cat.icon}</span>
                <h2 className="text-xl font-bold text-brand-navy">{cat.label}</h2>
              </div>
              <div className="space-y-2">
                {cat.items.map((item) => {
                  const key = `${cat.label}-${item.q}`;
                  const isOpen = open === key;
                  return (
                    <div key={key} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                      <button
                        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
                        onClick={() => toggle(key)}
                      >
                        <span className="font-semibold text-brand-navy text-sm pr-4">{item.q}</span>
                        <span className={`text-brand-red text-xl font-light flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>
                          +
                        </span>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-64" : "max-h-0"}`}>
                        <p className="px-6 py-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-brand-light">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Still have questions CTA */}
          <div className="bg-brand-navy text-white rounded-2xl p-8 text-center">
            <div className="text-4xl mb-3">🤙</div>
            <h3 className="font-bold text-xl mb-2">Still have a question?</h3>
            <p className="text-blue-200 text-sm mb-6">
              We&apos;re happy to answer anything before you get started. Call or send us a message.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:7579408468" className="btn-red text-sm px-5 py-2.5">📞 (757) 940-8468</a>
              <Link href="/contact/" className="btn-outline-white text-sm px-5 py-2.5">Send a Message</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
