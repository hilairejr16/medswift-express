import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, news, and tips from MEDSWIFT EXPRESS on medical courier services, pharmacy delivery, and healthcare logistics in Atlanta.",
};

const posts = [
  {
    slug: "why-pharmacies-need-dedicated-medical-courier",
    date: "May 1, 2026",
    category: "Industry Insights",
    categoryColor: "bg-brand-light text-brand-blue",
    title: "Why Pharmacies Need a Dedicated Medical Courier (Not a General Delivery App)",
    excerpt: "General delivery apps are built for speed, not for healthcare. Here's why a dedicated medical courier partner makes a real difference for your pharmacy and your patients.",
    readTime: "4 min read",
    icon: "💊",
  },
  {
    slug: "last-mile-healthcare-delivery-atlanta",
    date: "April 22, 2026",
    category: "Healthcare Logistics",
    categoryColor: "bg-brand-redlt text-brand-red",
    title: "The Last Mile Problem in Healthcare: How Courier Services Are Closing the Gap",
    excerpt: "Medications that never reach patients represent one of healthcare's most preventable failures. Medical couriers are stepping in to solve the last-mile problem — one delivery at a time.",
    readTime: "5 min read",
    icon: "🏥",
  },
  {
    slug: "hipaa-medical-courier-what-you-need-to-know",
    date: "April 10, 2026",
    category: "Compliance",
    categoryColor: "bg-green-50 text-brand-green",
    title: "HIPAA and Medical Courier Services: What Healthcare Providers Should Know",
    excerpt: "When you hand a prescription to a courier driver, patient privacy is on the line. Here's what to look for when choosing a HIPAA-aware delivery partner.",
    readTime: "6 min read",
    icon: "🔒",
  },
  {
    slug: "same-day-prescription-delivery-guide",
    date: "March 28, 2026",
    category: "Services",
    categoryColor: "bg-brand-light text-brand-blue",
    title: "Same-Day Prescription Delivery: A Complete Guide for Pharmacies",
    excerpt: "Offering same-day delivery can set your pharmacy apart — but only if it's done right. Here's everything you need to know about setting up a reliable same-day delivery workflow.",
    readTime: "5 min read",
    icon: "🚀",
  },
  {
    slug: "medical-courier-vs-rideshare-delivery",
    date: "March 15, 2026",
    category: "Industry Insights",
    categoryColor: "bg-brand-light text-brand-blue",
    title: "Medical Courier vs. Rideshare Delivery Apps: The Critical Difference",
    excerpt: "Some pharmacies use rideshare apps for prescription delivery. Here's why that approach carries serious risks — and what a purpose-built medical courier does differently.",
    readTime: "4 min read",
    icon: "⚖️",
  },
  {
    slug: "atlanta-pharmacy-delivery-trends-2026",
    date: "March 5, 2026",
    category: "Atlanta",
    categoryColor: "bg-slate-100 text-slate-600",
    title: "Pharmacy Delivery Trends in Atlanta for 2026: What Local Providers Need to Know",
    excerpt: "Atlanta's healthcare landscape is changing fast. Here's a look at how local pharmacies are adapting to patient expectations around prescription delivery — and what's coming next.",
    readTime: "5 min read",
    icon: "📍",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-navy to-[#1e4a85] pt-32 pb-16">
        <div className="container-lg text-center">
          <span className="inline-block bg-white/10 text-blue-100 text-xs font-semibold px-4 py-2 rounded-full border border-white/20 mb-4">
            MEDSWIFT Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Insights for Healthcare Professionals
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto leading-relaxed">
            Tips, industry news, and best practices for pharmacies and healthcare providers navigating medical delivery.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container-lg">
          {/* Featured post */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden mb-10">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-brand-navy to-brand-blue p-10 flex flex-col justify-center">
                <span className="text-5xl mb-4">{posts[0].icon}</span>
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit">
                  {posts[0].category}
                </span>
                <h2 className="text-2xl font-bold text-white leading-tight">{posts[0].title}</h2>
              </div>
              <div className="p-10 flex flex-col justify-center">
                <p className="text-slate-500 text-xs mb-3">{posts[0].date} · {posts[0].readTime}</p>
                <p className="text-slate-600 leading-relaxed mb-6">{posts[0].excerpt}</p>
                <span className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm">
                  Coming Soon <span className="text-xs bg-brand-light px-2 py-0.5 rounded-full">Article in progress</span>
                </span>
              </div>
            </div>
          </div>

          {/* Post grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(1).map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex flex-col">
                <div className="text-3xl mb-3">{post.icon}</div>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${post.categoryColor}`}>
                    {post.category}
                  </span>
                </div>
                <h3 className="font-bold text-brand-navy text-base leading-snug mb-2 flex-1">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="text-slate-400 text-xs">{post.date} · {post.readTime}</span>
                  <span className="text-xs text-slate-400 bg-slate-50 px-2 py-1 rounded-full">Coming Soon</span>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-14 bg-brand-navy text-white rounded-3xl p-10 text-center">
            <div className="text-4xl mb-3">📬</div>
            <h3 className="text-2xl font-bold mb-2">Stay Informed</h3>
            <p className="text-blue-200 text-sm mb-6 max-w-md mx-auto">
              Get the latest articles, delivery tips, and MEDSWIFT updates sent directly to your inbox.
            </p>
            <Link href="/contact/" className="btn-red text-sm px-6 py-3">
              Contact Us to Subscribe →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
