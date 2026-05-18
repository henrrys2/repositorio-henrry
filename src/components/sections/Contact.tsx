"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Send,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons/BrandIcons";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "henrry_15hugo@hotmail.com",
    href: "mailto:henrry_15hugo@hotmail.com",
  },
  {
    icon: WhatsappIcon,
    labelKey: "whatsapp" as const,
    value: "+51 977 198 880",
    href: "https://wa.me/51977198880",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "henrry-mendoza",
    href: "https://linkedin.com/in/henrry-mendoza",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "henrrys2",
    href: "https://github.com/henrrys2",
  },
];

export function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    try {
      // Replace with your Formspree endpoint
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormState("idle"), 5000);
      } else {
        setFormState("error");
        setTimeout(() => setFormState("idle"), 5000);
      }
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <SectionTitle
            title={t.contact.title}
            subtitle={t.contact.subtitle}
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <ScrollReveal delay={100}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-text-primary mb-1.5"
                >
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder={t.contact.namePlaceholder}
                  required
                  className="w-full h-11 px-4 rounded-lg bg-background border border-border-custom
                    text-text-primary text-sm placeholder:text-text-secondary/50
                    focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30
                    transition-all duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-text-primary mb-1.5"
                >
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder={t.contact.emailPlaceholder}
                  required
                  className="w-full h-11 px-4 rounded-lg bg-background border border-border-custom
                    text-text-primary text-sm placeholder:text-text-secondary/50
                    focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30
                    transition-all duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-text-primary mb-1.5"
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder={t.contact.messagePlaceholder}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border-custom
                    text-text-primary text-sm placeholder:text-text-secondary/50
                    focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30
                    transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formState === "sending"}
                className="flex items-center justify-center gap-2 w-full h-12 rounded-lg
                  text-sm font-semibold bg-primary text-white
                  hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed
                  transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-primary/20
                  cursor-pointer"
              >
                {formState === "sending" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t.contact.sending}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t.contact.send}
                  </>
                )}
              </button>

              {/* Status Messages */}
              {formState === "success" && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 text-green-500 text-sm">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  {t.contact.success}
                </div>
              )}
              {formState === "error" && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 text-red-500 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {t.contact.error}
                </div>
              )}
            </form>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={200}>
            <div className="space-y-4">
              {/* Location */}
              <div
                className="flex items-center gap-4 p-5 rounded-xl bg-background
                  border border-border-custom hover:border-primary/30
                  transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 rounded-lg bg-primary-glow flex items-center justify-center
                    group-hover:bg-primary/20 transition-colors duration-300"
                >
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">
                    {t.contact.location}
                  </p>
                  <p className="text-text-primary font-medium text-sm">
                    Ilo, Moquegua — Perú
                  </p>
                </div>
              </div>

              {/* Contact Links */}
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-xl bg-background
                    border border-border-custom hover:border-primary/30
                    transition-all duration-300 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg bg-primary-glow flex items-center justify-center
                      group-hover:bg-primary/20 transition-colors duration-300"
                  >
                    <link.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">
                      {link.label || (link.labelKey && t.contact[link.labelKey])}
                    </p>
                    <p className="text-text-primary font-medium text-sm group-hover:text-primary transition-colors">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
