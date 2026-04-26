import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { dictionary, type DictKey, type Language } from "./dictionary";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggle: () => void;
  t: (key: DictKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
  defaultLang = "fr",
}: {
  children: ReactNode;
  defaultLang?: Language;
}) {
  const [lang, setLang] = useState<Language>(defaultLang);

  const t = useCallback((key: DictKey) => dictionary[key][lang], [lang]);
  const toggle = useCallback(() => setLang((l) => (l === "fr" ? "en" : "fr")), []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT must be used inside <LanguageProvider>");
  return ctx;
}
