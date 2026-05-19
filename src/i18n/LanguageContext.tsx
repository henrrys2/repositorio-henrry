"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { translations, type Locale } from "./translations";

// 1. Mapeamos de forma recursiva la estructura de tus traducciones
// Convierte los textos fijos (ej. "Inicio", "Home") en un simple 'string' general
type DeepStringify<T> = {
  [K in keyof T]: T[K] extends object ? DeepStringify<T[K]> : string;
};

// 2. Creamos el tipo flexible basado en tu objeto en español
type TranslationStructure = DeepStringify<typeof translations["es"]>;

interface LanguageContextType {
  locale: Locale;
  t: TranslationStructure; // Ahora 't' aceptará tanto los textos en "es" como en "en"
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

  // 3. Forzamos el casteo aquí usando 'as unknown as TranslationStructure' 
  // para que TypeScript deje de comparar los textos literales "Inicio" vs "Home"
  const t = translations[locale] as unknown as TranslationStructure;

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