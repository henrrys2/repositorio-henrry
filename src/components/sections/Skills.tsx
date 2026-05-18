"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { skillCategories } from "@/data/skills";
import { Monitor, Server, Database, Wrench } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  frontend: Monitor,
  backend: Server,
  databases: Database,
  tools: Wrench,
};

export function Skills() {
  const { t } = useLanguage();

  const getCategoryTitle = (key: string): string => {
    return t.skills[key as keyof typeof t.skills] || key;
  };

  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <SectionTitle title={t.skills.title} subtitle={t.skills.subtitle} />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => {
            const IconComponent = categoryIcons[category.key] || Wrench;

            return (
              <ScrollReveal key={category.key} delay={catIndex * 100}>
                <div
                  className="p-6 rounded-xl bg-surface border border-border-custom
                    hover:border-primary/30 hover:shadow-lg
                    transition-all duration-300 h-full group"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-lg bg-primary-glow flex items-center justify-center
                        group-hover:bg-primary/20 transition-colors duration-300"
                    >
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {getCategoryTitle(category.key)}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1.5 text-sm font-medium rounded-lg
                          bg-background text-text-secondary border border-border-custom
                          hover:text-primary hover:border-primary/40 hover:bg-primary-glow
                          transition-all duration-200 cursor-default"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
