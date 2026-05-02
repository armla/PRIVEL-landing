/*
 * PRIVEL — Language Context
 * Provides EN/ES toggle across the entire app
 */

import { createContext, useContext, useState, type ReactNode } from "react";
import { translations, type Lang } from "@/lib/translations";

type Translations = typeof translations.en;

interface LanguageContextValue {
  lang: Lang;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "es" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang] as unknown as Translations, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
