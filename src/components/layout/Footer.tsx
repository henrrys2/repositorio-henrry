"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { Heart, Code } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons/BrandIcons";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/henrrys2",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/henrry-mendoza",
    icon: LinkedinIcon,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/51977198880",
    icon: WhatsappIcon,
  },
];

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-custom bg-surface" id="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="text-lg font-bold tracking-tight text-text-primary">
              <span className="gradient-text">&lt;</span>
              HM
              <span className="gradient-text"> /&gt;</span>
            </span>
            <p className="text-text-secondary text-xs">
              © {currentYear} Henrry Mendoza. {t.footer.rights}
            </p>
          </div>

          {/* Made with */}
          <p className="text-text-secondary text-xs flex items-center gap-1">
            {t.footer.madeWith}{" "}
            <Heart className="w-3 h-3 text-primary fill-primary" />{" "}
            {t.footer.and}{" "}
            <Code className="w-3 h-3 text-primary" />
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center
                  border border-border-custom text-text-secondary
                  hover:text-primary hover:border-primary hover:bg-primary-glow
                  transition-all duration-300"
                aria-label={link.name}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
