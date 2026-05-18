"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { experiences } from "@/data/experience";
import { MapPin, Calendar, Building2 } from "lucide-react";

function formatDate(dateStr: string, locale: string): string {
  const [year, month] = dateStr.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString(locale === "es" ? "es-ES" : "en-US", {
    year: "numeric",
    month: "short",
  });
}

export function Experience() {
  const { t, locale } = useLanguage();

  return (
    <section id="experience" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <SectionTitle
            title={t.experience.title}
            subtitle={t.experience.subtitle}
          />
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-px bg-border-custom" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.company} delay={index * 150}>
                <div className="relative pl-8 sm:pl-20">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 sm:left-8 top-1 w-3 h-3 -translate-x-1.5
                      rounded-full bg-primary border-2 border-background shadow-md
                      shadow-primary/20"
                  />

                  {/* Card */}
                  <div
                    className="p-6 rounded-xl bg-background border border-border-custom
                      hover:border-primary/30 hover:shadow-md
                      transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-primary flex-shrink-0" />
                          {exp.company}
                        </h3>
                        <p className="text-primary font-medium text-sm mt-0.5">
                          {exp.role[locale]} · {exp.type[locale]}
                        </p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 text-sm text-text-secondary">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(exp.startDate, locale)} —{" "}
                          {exp.endDate
                            ? formatDate(exp.endDate, locale)
                            : t.experience.present}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description[locale].map((item, i) => (
                        <li
                          key={i}
                          className="text-text-secondary text-sm leading-relaxed flex gap-2"
                        >
                          <span className="text-primary mt-1.5 flex-shrink-0">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs font-medium rounded-md
                            bg-primary-glow text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
