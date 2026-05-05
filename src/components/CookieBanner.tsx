"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-brand-navy text-white rounded-2xl shadow-2xl border border-white/10 p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="text-2xl flex-shrink-0">🍪</div>
        <div className="flex-1">
          <p className="text-sm text-slate-200 leading-relaxed">
            We use essential cookies to keep the site working and to remember your language preference.
            See our{" "}
            <Link href="/cookie-policy/" className="text-blue-300 hover:text-white underline">
              Cookie Policy
            </Link>{" "}
            for details.
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white border border-white/20 rounded-lg transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-semibold bg-brand-red hover:bg-brand-redmid text-white rounded-lg transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
