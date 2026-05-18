"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowDown, Download, Mail } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-light/15 rounded-full blur-[120px] animate-float"
        style={{ animationDelay: "3s" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Avatar */}
        <div className="mb-8 animate-fade-in">
          <div
            className="w-28 h-28 mx-auto rounded-full bg-surface border-2 border-border-custom
              flex items-center justify-center text-3xl font-bold gradient-text
              shadow-lg"
          >
            HM
          </div>
        </div>

        {/* Greeting */}
        <p className="text-text-secondary text-base sm:text-lg mb-3 animate-fade-in-up">
          {t.hero.greeting}
        </p>

        {/* Name */}
        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4
            animate-fade-in-up delay-100"
        >
          <span className="gradient-text">{t.hero.name}</span>
        </h1>

        {/* Title */}
        <div className="animate-fade-in-up delay-200">
          <span
            className="inline-block text-xl sm:text-2xl md:text-3xl font-semibold
              text-text-primary tracking-tight"
          >
            {t.hero.title}
          </span>
          <span
            className="inline-block w-0.5 h-7 ml-1 bg-primary align-middle"
            style={{ animation: "typing-cursor 1s step-end infinite" }}
          />
        </div>

        {/* Description */}
        <p
          className="mt-6 text-text-secondary text-base sm:text-lg max-w-2xl mx-auto
            leading-relaxed animate-fade-in-up delay-300"
        >
          {t.hero.description}
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4
            animate-fade-in-up delay-400"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 h-12 px-8 rounded-full text-sm font-semibold
              bg-primary text-white hover:bg-primary-dark
              transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/20
              hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            {t.hero.contactMe}
          </a>
          <a
            href="/cv/henrry-mendoza-cv.pdf"
            download
            className="flex items-center gap-2 h-12 px-8 rounded-full text-sm font-semibold
              border border-border-custom text-text-primary
              hover:border-primary hover:text-primary hover:bg-primary-glow
              transition-all duration-300 hover:-translate-y-0.5"
          >
            <Download className="w-4 h-4" />
            {t.hero.downloadCV}
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-fade-in delay-500">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex flex-col items-center gap-2 text-text-secondary
              hover:text-primary transition-colors"
          >
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
