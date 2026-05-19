"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { translations, type Locale } from "./translations";

// 1. Obtenemos el tipo dinámico de la estructura de tus traducciones
// Usamos 'es' como base, asumiendo que ambos idiomas tienen las mismas llaves.
type TranslationStructure = typeof translations["es"];

interface LanguageContextType {
  locale: Locale;
  t: TranslationStructure; // 2. Ahora 't' representa al objeto completo traducido, no solo a las llaves
  toggleLocale: () => void;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => (prev === "es" ? "en" : "es"));
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
  }, []);

  // 3. TypeScript ahora entenderá perfectamente que 't' cambiará entre 'es' y 'en'
  const t: TranslationStructure = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLocale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}