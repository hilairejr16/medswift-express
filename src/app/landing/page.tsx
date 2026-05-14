export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ===== TOP BAR ===== */}
      <div className="bg-[#CC1F35] py-2 text-center text-white text-xs font-semibold tracking-widest uppercase">
        📍 Serving Atlanta, GA Metro &nbsp;·&nbsp; 📞 (757) 940-8468
      </div>

      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-br from-[#1B3C6E] to-[#1e4a85] min-h-[92vh] flex flex-col justify-center relative overflow-hidden">

        {/* Background pattern dots */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />

        {/* Red accent stripe across middle */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-[#CC1F35] to-[#9B1827] opacity-20" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — text content */}
            <div>
              {/* Logo wordmark */}
              <div className="flex items-center gap-4 mb-8">
                <img
                  src="/logos/logo-icon.svg"
                  alt="MEDSWIFT EXPRESS shield"
                  className="w-16 h-16"
                />
                <div>
                  <div className="text-white font-black text-3xl leading-none tracking-tight">
                    <span className="text-white">MED</span><span className="text-[#FF4D65]">SWIFT</span>
                  </div>
                  <div className="text-blue-200 text-sm font-bold tracking-[0.25em] uppercase">Express</div>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                Medical Courier<br />
                <span className="text-[#FF4D65]">You Can Trust.</span>
              </h1>

              {/* Sub-headline */}
              <p className="text-blue-200 text-lg leading-relaxed mb-8 max-w-lg">
                Prescription delivery, medical supplies, and healthcare logistics — fast, reliable, and HIPAA-aware — across the Atlanta metro area.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="bg-white/10 border border-white/20 text-blue-100 text-xs font-semibold px-4 py-2 rounded-full">
                  ✅ Licensed &amp; Insured
                </span>
                <span className="bg-white/10 border border-white/20 text-blue-100 text-xs font-semibold px-4 py-2 rounded-full">
                  🔒 HIPAA-Aware
                </span>
                <span className="bg-white/10 border border-white/20 text-blue-100 text-xs font-semibold px-4 py-2 rounded-full">
                  ⚡ Same-Day Available
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:7579408468"
                  className="inline-flex items-center justify-center gap-2 bg-[#CC1F35] hover:bg-[#9B1827] text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                >
                  📞 Call (757) 940-8468
                </a>
                <a
                  href="mailto:beatricenatasha99@gmail.com?subject=Delivery Inquiry - MEDSWIFT EXPRESS"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200"
                >
                  ✉️ Send an Email
                </a>
              </div>
            </div>

            {/* Right — van illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/logos/van-illustration.svg"
                  alt="MEDSWIFT EXPRESS Delivery Van"
                  className="w-full max-w-[560px] drop-shadow-2xl"
                />
                {/* Floating badge */}
                <div className="absolute -top-4 -right-2 sm:right-4 bg-[#CC1F35] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse" />
                  On the road in Atlanta
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3 FEATURES ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-6">

            <div className="text-center p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#FEF2F2] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">🏥</div>
              <h3 className="font-black text-[#1B3C6E] text-lg mb-2">Pharmacy Partners</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Scheduled routes, same-day delivery, and recurring runs — tailored to your pharmacy workflow.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl border-2 border-[#CC1F35] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#FEF2F2] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">⚡</div>
              <h3 className="font-black text-[#CC1F35] text-lg mb-2">Same-Day Delivery</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Rush and same-day options available. We move fast — because patients can&apos;t wait.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#EFF6FF] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">🔒</div>
              <h3 className="font-black text-[#1B3C6E] text-lg mb-2">HIPAA-Aware</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Every delivery handled with discretion. BAA execution available on request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#FEF2F2] text-[#CC1F35] text-xs font-bold px-4 py-2 rounded-full mb-4 tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1B3C6E] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Whether you need same-day delivery or a recurring route, we&apos;re just a call or email away. No contracts required to get started.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mb-12">

            {/* Phone card */}
            <a
              href="tel:7579408468"
              className="group flex flex-col items-center gap-3 bg-white border-2 border-[#CC1F35] rounded-2xl p-8 hover:bg-[#CC1F35] transition-colors duration-200 shadow-sm hover:shadow-lg"
            >
              <span className="text-4xl">📞</span>
              <div>
                <div className="font-black text-[#CC1F35] group-hover:text-white text-xl transition-colors">(757) 940-8468</div>
                <div className="text-slate-400 group-hover:text-red-100 text-sm transition-colors mt-1">Tap to call us now</div>
              </div>
            </a>

            {/* Email card */}
            <a
              href="mailto:beatricenatasha99@gmail.com?subject=Delivery Inquiry - MEDSWIFT EXPRESS"
              className="group flex flex-col items-center gap-3 bg-white border-2 border-[#1B3C6E] rounded-2xl p-8 hover:bg-[#1B3C6E] transition-colors duration-200 shadow-sm hover:shadow-lg"
            >
              <span className="text-4xl">✉️</span>
              <div>
                <div className="font-black text-[#1B3C6E] group-hover:text-white text-base transition-colors break-all">beatricenatasha99@gmail.com</div>
                <div className="text-slate-400 group-hover:text-blue-100 text-sm transition-colors mt-1">Send us a message</div>
              </div>
            </a>
          </div>

          {/* Quick info strip */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <span>📍 Atlanta, GA Metro Area</span>
            <span>🕐 Mon – Fri: 8am – 6pm</span>
            <span>🕐 Sat: 9am – 2pm</span>
          </div>
        </div>
      </section>

      {/* ===== SOCIAL LINKS ===== */}
      <section className="py-12 bg-[#1B3C6E]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-blue-200 text-sm font-semibold mb-6 uppercase tracking-widest">Follow Us</p>
          <div className="flex justify-center gap-5 flex-wrap">

            {/* Instagram */}
            <a
              href="https://instagram.com/medswiftexpress"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MEDSWIFT EXPRESS on Instagram"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl transition-all duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="font-semibold text-sm">Instagram</span>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/medswiftexpress"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MEDSWIFT EXPRESS on Facebook"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl transition-all duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="font-semibold text-sm">Facebook</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/medswiftexpress"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MEDSWIFT EXPRESS on LinkedIn"
              className="group flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl transition-all duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="font-semibold text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#0F2549] py-8 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-blue-300 text-xs">
              &copy; {new Date().getFullYear()} MEDSWIFT EXPRESS. All rights reserved.
            </p>
            <div className="flex gap-5 text-xs text-blue-400">
              <a href="/privacy-policy/" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms-of-use/" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="/" className="hover:text-white transition-colors">Full Website</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
