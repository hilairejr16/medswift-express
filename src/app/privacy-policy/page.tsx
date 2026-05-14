import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how MEDSWIFT EXPRESS collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: `When you use our website or submit a quote or contact request, we may collect the following information:
• Full name and job title
• Business name (pharmacy or healthcare organization)
• Email address and phone number
• Pickup and delivery addresses
• Any notes or special instructions you provide

We do not collect payment card numbers, Social Security numbers, or any sensitive financial data through this website.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `Information you provide is used solely to:
• Respond to your quote or service requests
• Schedule and coordinate delivery services
• Send delivery confirmations and updates
• Contact you regarding your account or service questions
• Improve our website and services

We do not use your information for marketing purposes without your explicit consent.`,
  },
  {
    title: "3. How We Share Your Information",
    content: `We do not sell, trade, or rent your personal information to third parties.

We may share information with:
• Service partners strictly required to fulfill your delivery (e.g., assigned drivers)
• Technology providers that operate our website and form processing (Formspree, Cloudflare)
• Legal authorities when required by law or court order

All third-party partners are required to handle your data in compliance with applicable privacy laws.`,
  },
  {
    title: "4. Data Security",
    content: `We take reasonable technical and organizational measures to protect the information we collect. Our website is served over HTTPS (encrypted connection) via Cloudflare's secure global network.

However, no method of transmission over the internet is 100% secure. We encourage you to contact us directly if you have concerns about the security of your data.`,
  },
  {
    title: "5. Cookies",
    content: `Our website uses a minimal number of cookies. These include:
• A cookie to remember your language preference (English or Spanish)
• A cookie to remember your cookie consent choice
• Essential performance cookies provided by Cloudflare

We do not use advertising or tracking cookies. See our Cookie Policy for full details.`,
  },
  {
    title: "6. Your Rights",
    content: `You have the right to:
• Request access to the personal data we hold about you
• Request correction of inaccurate data
• Request deletion of your personal data
• Withdraw consent at any time (where processing is based on consent)

To exercise any of these rights, contact us at beatricenatasha99@gmail.com.`,
  },
  {
    title: "7. Children's Privacy",
    content: `Our website and services are intended for businesses and healthcare professionals. We do not knowingly collect personal information from individuals under the age of 18. If you believe a minor has submitted information to us, please contact us immediately.`,
  },
  {
    title: "8. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. When we do, we will update the "Last Updated" date at the top of this page. Continued use of our website after changes constitutes your acceptance of the updated policy.`,
  },
  {
    title: "9. Contact Us",
    content: `If you have any questions about this Privacy Policy or how we handle your data, please contact us:

MEDSWIFT EXPRESS
Atlanta, GA Metro Area
Phone: (757) 940-8468
Email: beatricenatasha99@gmail.com`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-navy to-[#1e4a85] pt-32 pb-16">
        <div className="container-lg text-center">
          <span className="inline-block bg-white/10 text-blue-100 text-xs font-semibold px-4 py-2 rounded-full border border-white/20 mb-4">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-blue-200 text-sm">Last Updated: May 2026</p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-brand-redlt border border-brand-red/20 rounded-2xl p-6 mb-10">
            <p className="text-slate-700 text-sm leading-relaxed">
              <strong className="text-brand-navy">Your privacy matters to us.</strong> MEDSWIFT EXPRESS is committed to protecting the personal information of our clients, healthcare partners, and website visitors. This policy explains what we collect, how we use it, and your rights.
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
                <h2 className="text-xl font-bold text-brand-navy mb-4">{s.title}</h2>
                <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">{s.content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
