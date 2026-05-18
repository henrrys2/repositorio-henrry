"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      onClick={toggleLocale}
      className="flex items-center gap-1.5 h-9 px-3 rounded-full
        border border-border-custom text-text-secondary text-sm font-medium
        hover:text-primary hover:border-primary
        transition-all duration-300 cursor-pointer"
      aria-label="Toggle language"
      id="language-toggle"
    >
      <Globe className="w-3.5 h-3.5" />
      <span className="uppercase tracking-wider text-xs">
        {locale === "es" ? "EN" : "ES"}
      </span>
    </button>
  );
}
