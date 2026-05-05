import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal",
  description: "Legal documents, policies, and terms for MEDSWIFT EXPRESS.",
};

const docs = [
  {
    icon: "🔒",
    title: "Privacy Policy",
    desc: "How we collect, use, and protect your personal information.",
    href: "/privacy-policy/",
    color: "bg-brand-light border-brand-blue/20",
    textColor: "text-brand-blue",
  },
  {
    icon: "📋",
    title: "Terms of Use",
    desc: "The rules and conditions governing use of our website and services.",
    href: "/terms-of-use/",
    color: "bg-slate-50 border-slate-200",
    textColor: "text-brand-navy",
  },
  {
    icon: "🍪",
    title: "Cookie Policy",
    desc: "What cookies we use, why, and how you can manage them.",
    href: "/cookie-policy/",
    color: "bg-amber-50 border-amber-200",
    textColor: "text-amber-700",
  },
  {
    icon: "⚠️",
    title: "Disclaimer",
    desc: "Important liability disclaimers and copyright notices.",
    href: "/disclaimer/",
    color: "bg-brand-redlt border-brand-red/20",
    textColor: "text-brand-red",
  },
];

export default function LegalPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-navy to-[#1e4a85] pt-32 pb-16">
        <div className="container-lg text-center">
          <span className="inline-block bg-white/10 text-blue-100 text-xs font-semibold px-4 py-2 rounded-full border border-white/20 mb-4">
            Legal Center
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Legal Documents</h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            All policies, terms, and legal notices for MEDSWIFT EXPRESS in one place.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {docs.map((d) => (
              <Link
                key={d.title}
                href={d.href}
                className={`block rounded-2xl border p-7 ${d.color} hover:shadow-md transition-shadow`}
              >
                <div className="text-4xl mb-4">{d.icon}</div>
                <h2 className={`text-xl font-bold mb-2 ${d.textColor}`}>{d.title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{d.desc}</p>
                <span className={`text-sm font-semibold ${d.textColor}`}>Read document →</span>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 border border-slate-100 shadow-sm text-center">
            <div className="text-4xl mb-3">📬</div>
            <h3 className="font-bold text-brand-navy text-xl mb-2">Legal Questions?</h3>
            <p className="text-slate-500 text-sm mb-5">
              If you have questions about any of our legal documents or need to report a concern, contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:7579408468" className="btn-secondary text-sm px-5 py-2.5">📞 (757) 940-8468</a>
              <a href="mailto:beatricenatasha99@gmail.com" className="btn-secondary text-sm px-5 py-2.5">✉️ Email Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
