"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "contact", href: "#contact" },
] as const;

export function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      rootMargin: "-80px 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass border-b border-border-custom shadow-sm"
          : "bg-transparent"
      }`}
      id="header"
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-lg font-bold tracking-tight text-text-primary hover:text-primary transition-colors"
        >
          <span className="gradient-text">&lt;</span>
          HM
          <span className="gradient-text"> /&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200
                ${
                  activeSection === link.key
                    ? "text-primary bg-primary-glow"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface"
                }`}
            >
              {t.header[link.key as keyof typeof t.header]}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <a
            href="/cv/henrry-mendoza-cv.pdf"
            download
            className="flex items-center gap-1.5 h-9 px-4 rounded-full text-sm font-medium
              bg-primary text-white hover:bg-primary-dark
              transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Download className="w-3.5 h-3.5" />
            {t.header.downloadCV}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-9 h-9 rounded-full flex items-center justify-center
              border border-border-custom text-text-secondary
              hover:text-primary hover:border-primary
              transition-all duration-300 cursor-pointer"
            aria-label="Toggle mobile menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96 border-b border-border-custom" : "max-h-0"
        }`}
      >
        <div className="glass px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200
                ${
                  activeSection === link.key
                    ? "text-primary bg-primary-glow"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface"
                }`}
            >
              {t.header[link.key as keyof typeof t.header]}
            </a>
          ))}
          <a
            href="/cv/henrry-mendoza-cv.pdf"
            download
            className="flex items-center justify-center gap-2 mt-2 py-2.5 rounded-lg text-sm font-medium
              bg-primary text-white hover:bg-primary-dark transition-all duration-300"
          >
            <Download className="w-3.5 h-3.5" />
            {t.header.downloadCV}
          </a>
        </div>
      </div>
    </header>
  );
}
