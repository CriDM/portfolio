import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Language, PORTFOLIO_DATA } from "../../data/portfolioData";
import avatar from "../../assets/avatar.png";
import { ArrowDown, Copy, ExternalLink, Sparkles, Terminal } from "lucide-react";

interface HomeProps {
  currentLang: Language;
  onCopyEmail: () => void;
}

export const Home: React.FC<HomeProps> = ({ currentLang, onCopyEmail }) => {
  const typedTarget = useRef<HTMLSpanElement>(null);
  const data = PORTFOLIO_DATA.hero;

  useEffect(() => {
    if (!typedTarget.current) return;

    const typedInstance = new Typed(typedTarget.current, {
      strings: data.roles[currentLang],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1800,
      loop: true,
      showCursor: true,
      cursorChar: "_",
    });

    return () => {
      typedInstance.destroy();
    };
  }, [currentLang]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 md:px-8 overflow-hidden"
    >
      {/* Ambient background glow effects */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Column: Text & CTAs */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs md:text-sm font-medium mb-6 backdrop-blur-md shadow-sm shadow-emerald-950">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{data.badge[currentLang]}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-4">
            {currentLang === "it" ? "Ciao, sono" : "Hi, I'm"}{" "}
            <span className="text-gradient-accent block mt-1">
              Cristian Della Monica
            </span>
          </h1>

          {/* Dynamic Typed Subtitle */}
          <div className="h-10 sm:h-12 flex items-center mb-6">
            <div className="flex items-center text-xl sm:text-2xl md:text-3xl font-mono text-slate-300">
              <span className="text-indigo-400 font-semibold mr-2">&gt;</span>
              <span className="text-slate-100 font-semibold" ref={typedTarget}></span>
            </div>
          </div>

          {/* Bio Description */}
          <p className="max-w-xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8">
            {data.description[currentLang]}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-medium text-sm sm:text-base shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{data.ctaProjects[currentLang]}</span>
            </button>

            <button
              onClick={onCopyEmail}
              className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-white/10 hover:border-indigo-500/50 font-medium text-sm sm:text-base shadow-md backdrop-blur-md hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer group"
            >
              <Copy className="w-4 h-4 text-indigo-400 group-hover:rotate-6 transition-transform" />
              <span>{data.ctaCopyEmail[currentLang]}</span>
            </button>
          </div>

          {/* Quick Tech Highlights Pills */}
          <div className="mt-10 pt-8 border-t border-white/10 w-full max-w-xl flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-slate-400">
            <span className="text-slate-500 mr-2 flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5 text-indigo-400" /> Stack:
            </span>
            {["TypeScript", "React", "Python", "FastAPI", "C++", "IPP Protocol", "Docker"].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-300 hover:border-indigo-500/30 hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: 3D Avatar with glow */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
            {/* Ambient halo ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/30 via-violet-500/20 to-cyan-500/30 blur-2xl animate-pulse-subtle" />
            <div className="absolute inset-4 rounded-3xl bg-slate-900/40 backdrop-blur-2xl border border-white/10 shadow-2xl rotate-2" />

            {/* Avatar image container */}
            <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
              <img
                src={avatar}
                alt="Cristian Della Monica Avatar"
                className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.6)] animate-float-slow hover:scale-105 transition-transform duration-500 cursor-pointer"
              />
            </div>

            {/* Subtle floating badge */}
            <div className="absolute -bottom-2 -left-2 z-20 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-md shadow-xl flex items-center gap-2 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span>Full-Stack & Systems</span>
            </div>

            <div className="absolute -top-2 -right-2 z-20 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-md shadow-xl flex items-center gap-1.5 text-xs font-mono text-slate-300">
              <span className="text-amber-400">★</span>
              <span>Open Source</span>
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
        <button
          onClick={() => scrollToSection("about")}
          className="text-xs font-mono text-slate-400 flex flex-col items-center gap-1"
          aria-label="Scroll to About Section"
        >
          <span className="tracking-widest uppercase text-[10px]">Scroll</span>
          <ArrowDown className="w-4 h-4 text-indigo-400 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Home;
