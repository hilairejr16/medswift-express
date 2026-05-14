import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms and conditions governing the use of the MEDSWIFT EXPRESS website and services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing and using the MEDSWIFT EXPRESS website (medswiftexpress.com), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.

These terms apply to all visitors, users, and clients of MEDSWIFT EXPRESS.`,
  },
  {
    title: "2. Description of Services",
    content: `MEDSWIFT EXPRESS provides medical courier services including:
• Prescription and medication delivery from pharmacies to patients
• Medical supply and equipment delivery
• Same-day and scheduled delivery services
• Recurring route services for healthcare facilities

Service availability is subject to geographic coverage, driver availability, and order confirmation. Use of our services is governed by a separate service agreement with your organization.`,
  },
  {
    title: "3. Use of This Website",
    content: `You agree to use this website for lawful purposes only. You must not:
• Attempt to gain unauthorized access to any part of the site
• Transmit any harmful, offensive, or disruptive content
• Use the site to impersonate another person or entity
• Scrape or collect data from the website without permission
• Interfere with the website's security or operation

We reserve the right to restrict access to users who violate these terms.`,
  },
  {
    title: "4. Quote Requests and Service Agreements",
    content: `Submitting a quote request through our website does not constitute a binding service agreement. All service arrangements are confirmed by a MEDSWIFT EXPRESS representative.

Pricing, availability, and service terms are agreed upon separately. We reserve the right to decline any service request at our discretion.`,
  },
  {
    title: "5. Intellectual Property",
    content: `All content on this website — including text, graphics, logos, images, and design — is the property of MEDSWIFT EXPRESS and is protected by applicable copyright and trademark laws.

You may not reproduce, distribute, or use any content from this site without prior written permission from MEDSWIFT EXPRESS.`,
  },
  {
    title: "6. Limitation of Liability",
    content: `MEDSWIFT EXPRESS provides this website on an "as is" basis. We make no warranties, express or implied, regarding:
• The accuracy or completeness of website content
• Uninterrupted or error-free access to the website
• Fitness for a particular purpose

To the fullest extent permitted by law, MEDSWIFT EXPRESS shall not be liable for any direct, indirect, incidental, or consequential damages arising from use of this website.`,
  },
  {
    title: "7. Third-Party Links",
    content: `Our website may contain links to third-party websites. These links are provided for convenience only. MEDSWIFT EXPRESS has no control over, and accepts no responsibility for, the content or practices of any linked third-party website.`,
  },
  {
    title: "8. Governing Law",
    content: `These Terms of Use are governed by the laws of the State of Georgia, United States. Any disputes arising from these terms or use of this website shall be subject to the exclusive jurisdiction of the courts of Georgia.`,
  },
  {
    title: "9. Changes to These Terms",
    content: `MEDSWIFT EXPRESS reserves the right to modify these Terms of Use at any time. Changes take effect immediately upon posting. Continued use of the website constitutes acceptance of the revised terms.`,
  },
  {
    title: "10. Contact",
    content: `Questions about these Terms of Use? Contact us:

MEDSWIFT EXPRESS
Atlanta, GA Metro Area
Phone: (757) 940-8468
Email: beatricenatasha99@gmail.com`,
  },
];

export default function TermsOfUsePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-navy to-[#1e4a85] pt-32 pb-16">
        <div className="container-lg text-center">
          <span className="inline-block bg-white/10 text-blue-100 text-xs font-semibold px-4 py-2 rounded-full border border-white/20 mb-4">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Terms of Use</h1>
          <p className="text-blue-200 text-sm">Last Updated: May 2026</p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-brand-redlt border border-brand-red/20 rounded-2xl p-6 mb-10">
            <p className="text-slate-700 text-sm leading-relaxed">
              Please read these terms carefully before using the MEDSWIFT EXPRESS website or services. By using our site, you agree to these terms in full.
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
