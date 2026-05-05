import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the MEDSWIFT EXPRESS team. We're hiring professional medical courier drivers and support staff in Atlanta, GA.",
};

const openings = [
  {
    title: "Medical Courier Driver",
    type: "Full-Time",
    location: "Atlanta, GA Metro",
    tag: "Hiring Now",
    color: "bg-brand-greenlt text-brand-green",
    desc: "Deliver prescriptions and medical supplies across the Atlanta metro area. Represent MEDSWIFT EXPRESS with professionalism and reliability on every run.",
    requirements: [
      "Valid Georgia driver's license with clean driving record",
      "Reliable personal vehicle (van or SUV preferred)",
      "Ability to pass a background check",
      "Punctual, professional, and customer-focused",
      "Smartphone for delivery confirmation and routing",
    ],
  },
  {
    title: "Part-Time Courier Driver",
    type: "Part-Time / Flexible",
    location: "Atlanta, GA Metro",
    tag: "Hiring Now",
    color: "bg-brand-greenlt text-brand-green",
    desc: "Flexible delivery runs for drivers looking for part-time work in the medical courier space. Set your availability and build a consistent route over time.",
    requirements: [
      "Valid Georgia driver's license",
      "Clean driving record",
      "Reliable transportation",
      "Professional appearance and demeanor",
      "Ability to pass a background check",
    ],
  },
  {
    title: "Dispatcher / Operations Coordinator",
    type: "Full-Time",
    location: "Remote / Atlanta, GA",
    tag: "Coming Soon",
    color: "bg-slate-100 text-slate-500",
    desc: "Coordinate daily delivery schedules, assign drivers, and ensure seamless communication between pharmacies and our delivery team.",
    requirements: [
      "Experience in logistics, dispatch, or operations coordination",
      "Strong communication and multitasking skills",
      "Familiarity with route optimization tools",
      "Healthcare or medical delivery background a plus",
      "Detail-oriented and calm under pressure",
    ],
  },
];

const perks = [
  { icon: "💰", title: "Competitive Pay", desc: "Paid per delivery with performance bonuses for top drivers." },
  { icon: "📅", title: "Flexible Scheduling", desc: "Full-time and part-time routes available to fit your lifestyle." },
  { icon: "🚗", title: "Use Your Own Vehicle", desc: "No fleet requirement — use your personal vehicle and get mileage support." },
  { icon: "🏥", title: "Meaningful Work", desc: "Every delivery helps a real patient get the care they need." },
  { icon: "📈", title: "Growth Opportunity", desc: "As we grow across Atlanta, so does our team. Leadership roles ahead." },
  { icon: "🤝", title: "Supportive Team", desc: "A small, focused team where every person matters." },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-navy to-[#1e4a85] pt-32 pb-16">
        <div className="container-lg text-center">
          <span className="inline-block bg-white/10 text-blue-100 text-xs font-semibold px-4 py-2 rounded-full border border-white/20 mb-4">
            Join Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Careers at MEDSWIFT EXPRESS
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto leading-relaxed">
            We&apos;re building a reliable, professional courier team in Atlanta. If you care about doing meaningful work with integrity, we want to hear from you.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 bg-white">
        <div className="container-lg">
          <div className="text-center mb-10">
            <span className="section-badge-red">Why Work With Us</span>
            <h2 className="section-title mt-2">More Than Just a Delivery Job</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {perks.map((p) => (
              <div key={p.title} className="card text-center">
                <div className="text-3xl mb-2">{p.icon}</div>
                <h3 className="font-bold text-brand-navy text-sm mb-1">{p.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="py-16 bg-slate-50">
        <div className="container-lg">
          <div className="text-center mb-10">
            <span className="section-badge">Open Positions</span>
            <h2 className="section-title mt-2">Current Openings</h2>
          </div>
          <div className="space-y-6 max-w-3xl mx-auto">
            {openings.map((job) => (
              <div key={job.title} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs bg-brand-light text-brand-blue px-3 py-1 rounded-full font-medium">{job.type}</span>
                      <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">📍 {job.location}</span>
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${job.color}`}>{job.tag}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{job.desc}</p>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Requirements</p>
                  <ul className="space-y-1">
                    {job.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-slate-600 text-sm">
                        <span className="text-brand-green mt-0.5">✓</span> {r}
                      </li>
                    ))}
                  </ul>
                </div>
                {job.tag === "Hiring Now" && (
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <a
                      href="mailto:beatricenatasha99@gmail.com?subject=Job Application - MEDSWIFT EXPRESS"
                      className="btn-red text-sm px-5 py-2.5"
                    >
                      Apply by Email →
                    </a>
                    <p className="text-slate-400 text-xs mt-2">
                      Send your name, contact info, and a brief note about yourself to beatricenatasha99@gmail.com
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-brand-navy to-brand-red">
        <div className="container-md text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Don&apos;t See the Right Role?</h2>
          <p className="text-blue-100 mb-6 max-w-md mx-auto text-sm leading-relaxed">
            We&apos;re always looking for great people. Send us your info and we&apos;ll keep you in mind as we grow.
          </p>
          <a
            href="mailto:beatricenatasha99@gmail.com?subject=General Job Inquiry - MEDSWIFT EXPRESS"
            className="btn-outline-white text-sm px-6 py-3"
          >
            Send a General Inquiry →
          </a>
        </div>
      </section>
    </>
  );
}
