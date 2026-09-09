import React, { useState } from "react";
import { Language, PORTFOLIO_DATA } from "./data/portfolioData";
import { Navbar } from "./component/Navbar";
import { Toast } from "./component/Toast";
import Home from "./page/home/Home";
import About from "./page/about/About";
import Skills from "./page/skills/Skills";
import Project from "./page/project/Project";
import Contact from "./page/contact/Contact";

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem("cdm_portfolio_lang");
    return saved === "en" || saved === "it" ? saved : "it";
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleToggleLang = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem("cdm_portfolio_lang", lang);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    const msg = PORTFOLIO_DATA.contact.copiedNotification[currentLang];
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  return (
    <div className="relative min-h-screen bg-[#070a12] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-white">
      {/* Floating Modern Navbar */}
      <Navbar currentLang={currentLang} onToggleLang={handleToggleLang} />

      {/* Main Page Flow */}
      <main className="flex flex-col">
        <Home currentLang={currentLang} onCopyEmail={handleCopyEmail} />
        <About currentLang={currentLang} />
        <Skills currentLang={currentLang} />
        <Project currentLang={currentLang} />
        <Contact currentLang={currentLang} onCopyEmail={handleCopyEmail} />
      </main>

      {/* Feedback Toast */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
