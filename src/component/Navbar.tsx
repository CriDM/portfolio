import React, { useState, useEffect } from "react";
import { Language, PORTFOLIO_DATA } from "../data/portfolioData";
import { Menu, X, Globe, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

interface NavbarProps {
  currentLang: Language;
  onToggleLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onToggleLang }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: currentLang === "it" ? "Home" : "Home" },
    { id: "about", label: currentLang === "it" ? "Chi Sono" : "About" },
    { id: "skills", label: currentLang === "it" ? "Competenze" : "Skills" },
    { id: "projects", label: currentLang === "it" ? "Progetti" : "Projects" },
    { id: "contact", label: currentLang === "it" ? "Contatti" : "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 md:py-6 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl flex items-center justify-between px-5 py-3 rounded-2xl border transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-indigo-950/20"
            : "bg-slate-900/40 backdrop-blur-md border-white/5"
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("home");
          }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-center font-mono font-bold text-xs shadow-sm group-hover:border-indigo-500/40 group-hover:scale-105 transition-all">
            <span className="text-slate-100 font-bold text-sm">&gt;</span>
            <span className="text-indigo-400 font-bold text-sm">_</span>
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
              Cristian Della Monica
            </span>
            <span className="text-[11px] font-mono text-slate-400">@CriDM</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-slate-950/50 p-1 rounded-xl border border-white/5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Right side: Language Switcher & Socials */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Toggle */}
          <div className="flex items-center bg-slate-950/60 p-1 rounded-xl border border-white/10 text-xs font-mono">
            <button
              onClick={() => onToggleLang("it")}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all ${
                currentLang === "it"
                  ? "bg-indigo-600/90 text-white shadow-sm font-semibold"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              🇮🇹 IT
            </button>
            <button
              onClick={() => onToggleLang("en")}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg transition-all ${
                currentLang === "en"
                  ? "bg-indigo-600/90 text-white shadow-sm font-semibold"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              🇬🇧 EN
            </button>
          </div>

          <div className="h-5 w-[1px] bg-white/10 mx-1" />

          {/* Social Links */}
          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-400 hover:text-indigo-400 hover:bg-white/10 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Lang Button */}
          <button
            onClick={() => onToggleLang(currentLang === "it" ? "en" : "it")}
            className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-white/10 text-white border border-white/10 flex items-center gap-1"
          >
            <Globe className="w-3.5 h-3.5 text-indigo-400" />
            {currentLang.toUpperCase()}
          </button>

          {/* Hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 bg-slate-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-2xl z-50 flex flex-col gap-3 animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl font-medium text-base transition-colors ${
                activeSection === link.id
                  ? "bg-indigo-600 text-white"
                  : "text-slate-300 hover:bg-white/5"
              }`}
            >
              {link.label}
            </button>
          ))}

          <div className="h-[1px] bg-white/10 my-1" />

          <div className="flex items-center justify-between px-2 pt-1">
            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 text-slate-300 hover:text-white"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/5 text-slate-300 hover:text-indigo-400"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="text-xs text-slate-400 font-mono">
              Cava de' Tirreni (SA), IT
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
