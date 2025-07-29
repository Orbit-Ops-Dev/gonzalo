"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { TexasFlag, MexicanFlag } from "@/components/FlagIcons";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { href: "/", label: t('nav.home') },
    { href: "/portfolio", label: t('nav.portfolio') },
    { href: "/about", label: t('nav.about') },
    { href: "/contact", label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-secondary/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <h1 className="text-2xl md:text-3xl font-serif font-light tracking-wider text-primary">
              Mayoko Photos
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link link-underline text-sm uppercase tracking-widest focus-ring ${
                      pathname === link.href ? 'text-accent' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Language Toggle */}
            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={() => setLanguage('en')}
                className={`language-toggle ${language === 'en' ? 'active' : ''}`}
                aria-label="Switch to English"
                title="English (RGV/Brownsville)"
              >
                <TexasFlag className="w-6 h-4" />
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`language-toggle ${language === 'es' ? 'active' : ''}`}
                aria-label="Cambiar a Español"
                title="Español (Matamoros/México)"
              >
                <MexicanFlag className="w-6 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-primary transition-all duration-300 my-1 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-secondary/98 backdrop-blur-lg transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <ul className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif text-primary hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Mobile Language Toggle */}
            <div className="flex items-center space-x-4 mt-8">
              <button
                onClick={() => setLanguage('en')}
                className={`language-toggle ${language === 'en' ? 'active' : ''}`}
                aria-label="Switch to English"
                title="English (RGV/Brownsville)"
              >
                <TexasFlag className="w-8 h-5" />
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`language-toggle ${language === 'es' ? 'active' : ''}`}
                aria-label="Cambiar a Español"
                title="Español (Matamoros/México)"
              >
                <MexicanFlag className="w-8 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
