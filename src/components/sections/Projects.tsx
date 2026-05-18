"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { projects } from "@/data/projects";
import { ExternalLink, FolderOpen } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";

export function Projects() {
  const { t, locale } = useLanguage();

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <SectionTitle
            title={t.projects.title}
            subtitle={t.projects.subtitle}
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <div
                className="group rounded-xl bg-surface border border-border-custom
                  hover:border-primary/30 hover:shadow-lg
                  transition-all duration-300 overflow-hidden h-full flex flex-col"
              >
                {/* Image Placeholder */}
                <div
                  className="relative h-48 bg-gradient-to-br from-primary/10 via-primary-light/5 to-transparent
                    flex items-center justify-center overflow-hidden"
                >
                  <FolderOpen
                    className="w-12 h-12 text-primary/30 group-hover:text-primary/50
                      transition-all duration-300 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div
                    className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5
                      transition-all duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                    {project.title[locale]}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
                    {project.description[locale]}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-medium rounded-md
                          bg-background text-text-secondary border border-border-custom"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-3 border-t border-border-custom">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-text-secondary
                          hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        {t.projects.viewProject}
                      </a>
                    ) : (
                      <span className="text-sm text-text-secondary/50 italic">
                        {t.projects.comingSoon}
                      </span>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-text-secondary
                          hover:text-primary transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        {t.projects.viewCode}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
