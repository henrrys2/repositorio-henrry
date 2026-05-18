"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Briefcase, Code2, FolderGit2 } from "lucide-react";

export function About() {
  const { t } = useLanguage();

  const stats = [
    {
      value: "5+",
      label: t.about.stats.experience,
      icon: Briefcase,
    },
    {
      value: "15+",
      label: t.about.stats.technologies,
      icon: Code2,
    },
    {
      value: "10+",
      label: t.about.stats.projects,
      icon: FolderGit2,
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <SectionTitle title={t.about.title} />
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text Content */}
          <div className="md:col-span-3 space-y-5">
            <ScrollReveal delay={100}>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                {t.about.description}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                {t.about.description2}
              </p>
            </ScrollReveal>
          </div>

          {/* Stats */}
          <div className="md:col-span-2 grid gap-4">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={100 + index * 100}>
                <div
                  className="flex items-center gap-4 p-5 rounded-xl bg-background
                    border border-border-custom
                    hover:border-primary/30 hover:shadow-md
                    transition-all duration-300 group"
                >
                  <div
                    className="w-12 h-12 rounded-lg bg-primary-glow flex items-center justify-center
                      group-hover:bg-primary/20 transition-colors duration-300"
                  >
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-text-primary gradient-text">
                      {stat.value}
                    </p>
                    <p className="text-text-secondary text-sm">{stat.label}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
