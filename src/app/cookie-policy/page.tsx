import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Information about how MEDSWIFT EXPRESS uses cookies on its website.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-navy to-[#1e4a85] pt-32 pb-16">
        <div className="container-lg text-center">
          <span className="inline-block bg-white/10 text-blue-100 text-xs font-semibold px-4 py-2 rounded-full border border-white/20 mb-4">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Cookie Policy</h1>
          <p className="text-blue-200 text-sm">Last Updated: May 2026</p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">

          <div className="bg-brand-redlt border border-brand-red/20 rounded-2xl p-6">
            <p className="text-slate-700 text-sm leading-relaxed">
              <strong className="text-brand-navy">We keep it simple.</strong> MEDSWIFT EXPRESS uses only essential cookies — no advertising trackers, no third-party profiling. This policy explains exactly what we use and why.
            </p>
          </div>

          {[
            {
              title: "What Are Cookies?",
              body: `Cookies are small text files stored in your browser when you visit a website. They help the site remember your preferences and function correctly across visits.`,
            },
            {
              title: "Cookies We Use",
              body: null,
              table: [
                { name: "lang", purpose: "Remembers your chosen language (English or Spanish)", type: "Preference", duration: "1 year" },
                { name: "cookie-consent", purpose: "Remembers your cookie consent decision", type: "Essential", duration: "1 year" },
                { name: "__cf_bm", purpose: "Cloudflare bot management and security", type: "Security", duration: "30 minutes" },
              ],
            },
            {
              title: "What We Do NOT Use",
              body: `We do not use:
• Advertising or retargeting cookies
• Social media tracking pixels
• Google Analytics or third-party analytics cookies
• Session recording tools

Your browsing behavior on this site is not tracked or shared with advertisers.`,
            },
            {
              title: "Third-Party Services",
              body: `Our website uses the following third-party services that may set their own cookies:

• Cloudflare (security & performance) — sets essential security cookies
• Google Fonts (typography) — loaded from Google servers; may set preference cookies

We do not control the cookies set by these providers. Please refer to their respective privacy policies for details.`,
            },
            {
              title: "Managing Cookies",
              body: `You can control cookies through your browser settings. Most browsers allow you to:
• View what cookies are stored
• Delete individual or all cookies
• Block cookies from specific websites
• Set preferences for future cookie acceptance

Note: Disabling cookies may affect some functionality, such as the language preference feature.`,
            },
            {
              title: "Your Consent",
              body: `When you first visit our website, we display a cookie banner asking for your consent. You can accept or decline. Essential security cookies may be set regardless of your choice, as they are required for the website to function securely.`,
            },
            {
              title: "Contact",
              body: `Questions about our use of cookies?\n\nPhone: (757) 940-8468\nEmail: beatricenatasha99@gmail.com`,
            },
          ].map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-brand-navy mb-4">{s.title}</h2>
              {s.body && (
                <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">{s.body}</p>
              )}
              {s.table && (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-2 pr-4 text-brand-navy font-semibold">Cookie</th>
                        <th className="text-left py-2 pr-4 text-brand-navy font-semibold">Purpose</th>
                        <th className="text-left py-2 pr-4 text-brand-navy font-semibold">Type</th>
                        <th className="text-left py-2 text-brand-navy font-semibold">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.map((row) => (
                        <tr key={row.name} className="border-b border-slate-100">
                          <td className="py-3 pr-4 font-mono text-brand-navy text-xs">{row.name}</td>
                          <td className="py-3 pr-4 text-slate-600">{row.purpose}</td>
                          <td className="py-3 pr-4 text-slate-500">{row.type}</td>
                          <td className="py-3 text-slate-500">{row.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}

          <div className="text-center pt-4">
            <Link href="/privacy-policy/" className="text-brand-navy text-sm hover:underline">
              ← Also read our Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
