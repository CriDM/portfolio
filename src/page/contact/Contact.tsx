import React from "react";
import { Language, PORTFOLIO_DATA } from "../../data/portfolioData";
import { Mail, Copy, MapPin, ArrowUp, Send, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../../component/Icons";

interface ContactProps {
  currentLang: Language;
  onCopyEmail: () => void;
}

export const Contact: React.FC<ContactProps> = ({ currentLang, onCopyEmail }) => {
  const data = PORTFOLIO_DATA.contact;
  const personal = PORTFOLIO_DATA.personal;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 px-4 md:px-8 border-t border-white/5 overflow-hidden">
      {/* Ambient glow */}
      <div className="ambient-glow-2" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Contact Banner Card */}
        <div className="w-full glass-panel rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-white/10 shadow-2xl mb-16">
          {/* Subtle gradient banner line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500" />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
            <Send className="w-3.5 h-3.5" />
            <span>{currentLang === "it" ? "METTITI IN CONTATTO" : "GET IN TOUCH"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {data.title[currentLang]}
          </h2>

          <p className="max-w-xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            {data.subtitle[currentLang]}
          </p>

          {/* Email Box with One-Click Copy */}
          <div className="max-w-md mx-auto p-2 sm:p-2.5 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-between gap-2 shadow-inner mb-8">
            <div className="flex items-center gap-3 pl-3 overflow-hidden">
              <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
              <span className="text-sm font-mono text-slate-200 truncate select-all">
                {personal.email}
              </span>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={onCopyEmail}
                className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md shadow-indigo-600/30 transition-all cursor-pointer"
                title={currentLang === "it" ? "Copia email" : "Copy email"}
              >
                <Copy className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">
                  {currentLang === "it" ? "Copia" : "Copy"}
                </span>
              </button>

              <a
                href={`mailto:${personal.email}`}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                title="Open email client"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center justify-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white text-sm font-medium transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-indigo-300 text-sm font-medium transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-indigo-400" />
              <span>LinkedIn</span>
            </a>

            <div className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/5 text-slate-400 text-xs font-mono">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{personal.location[currentLang]}</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5 text-xs text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Cristian Della Monica</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Crafted with modern React
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>{currentLang === "it" ? "Torna su" : "Back to top"}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
