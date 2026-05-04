"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { t, Lang } from "@/translations";

type ContextValue = {
  lang: Lang;
  toggle: () => void;
  tx: typeof t.en;
};

const LanguageContext = createContext<ContextValue>({
  lang: "en",
  toggle: () => {},
  tx: t.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "es") setLang(saved);
  }, []);

  const toggle = () => {
    setLang((prev) => {
      const next: Lang = prev === "en" ? "es" : "en";
      localStorage.setItem("lang", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle, tx: t[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
