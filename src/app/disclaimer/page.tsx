import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important disclaimers regarding MEDSWIFT EXPRESS services and website content.",
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-navy to-[#1e4a85] pt-32 pb-16">
        <div className="container-lg text-center">
          <span className="inline-block bg-white/10 text-blue-100 text-xs font-semibold px-4 py-2 rounded-full border border-white/20 mb-4">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Disclaimer</h1>
          <p className="text-blue-200 text-sm">Last Updated: May 2026</p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          {[
            {
              title: "General Disclaimer",
              body: `The information provided on this website is for general informational purposes only. While MEDSWIFT EXPRESS strives to keep the content accurate and up to date, we make no representations or warranties of any kind — express or implied — about the completeness, accuracy, reliability, or suitability of the information on this site.

Any reliance you place on such information is strictly at your own risk.`,
            },
            {
              title: "No Medical Advice",
              body: `MEDSWIFT EXPRESS is a courier and logistics service. We do not provide medical advice, diagnose conditions, or recommend treatments. Content on this website related to medications, medical supplies, or healthcare is for descriptive purposes only.

For medical questions, always consult a licensed healthcare professional.`,
            },
            {
              title: "Delivery Times",
              body: `While we strive to meet all scheduled delivery windows, MEDSWIFT EXPRESS cannot guarantee specific delivery times in all circumstances. Factors such as traffic, weather, road conditions, or force majeure events may affect delivery schedules.

MEDSWIFT EXPRESS shall not be liable for any damages resulting from delayed deliveries caused by circumstances outside our reasonable control.`,
            },
            {
              title: "Service Availability",
              body: `Our services are subject to availability within our service area. MEDSWIFT EXPRESS reserves the right to modify, suspend, or discontinue any service at any time without prior notice.

Coverage areas may change. Contact us to confirm service availability for your specific locations.`,
            },
            {
              title: "Limitation of Liability",
              body: `To the maximum extent permitted by applicable law, MEDSWIFT EXPRESS, its owners, employees, and agents shall not be held liable for any indirect, incidental, special, consequential, or punitive damages arising from:

• Use or inability to use our services
• Delay, loss, or damage of delivered items (beyond our stated liability cap)
• Reliance on information provided on this website

Liability for any direct damages shall not exceed the amount paid for the specific delivery in question.`,
            },
            {
              title: "External Links",
              body: `This website may contain links to external websites operated by third parties. These links are provided for your convenience only. MEDSWIFT EXPRESS has no control over the content of those sites and accepts no responsibility for them.`,
            },
            {
              title: "Copyright Notice",
              body: `© 2026 MEDSWIFT EXPRESS. All rights reserved.

All content on this website — including but not limited to text, graphics, logos, images, and page layouts — is owned by or licensed to MEDSWIFT EXPRESS. Unauthorized reproduction, distribution, or modification of any content is strictly prohibited.

The MEDSWIFT EXPRESS name and logo are trademarks of MEDSWIFT EXPRESS. Unauthorized use is not permitted.`,
            },
            {
              title: "Questions",
              body: `If you have any questions about this Disclaimer, contact us:\n\nPhone: (757) 940-8468\nEmail: beatricenatasha99@gmail.com\nAtlanta, GA Metro Area`,
            },
          ].map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-brand-navy mb-4">{s.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
