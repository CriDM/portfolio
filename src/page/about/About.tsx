import React from "react";
import { Language, PORTFOLIO_DATA } from "../../data/portfolioData";
import { GraduationCap, Cpu, Layers, UserCheck, Sparkles, Code2 } from "lucide-react";

interface AboutProps {
  currentLang: Language;
}

export const About: React.FC<AboutProps> = ({ currentLang }) => {
  const data = PORTFOLIO_DATA.about;

  return (
    <section id="about" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Ambient glow */}
      <div className="ambient-glow-2" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
          <UserCheck className="w-3.5 h-3.5" />
          <span>{currentLang === "it" ? "PROFILO" : "PROFILE"}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          {data.title[currentLang]}
        </h2>
        <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
          {data.subtitle[currentLang]}
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Main Bio Story (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden group">
            {/* Top subtle highlight line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

            <div className="flex flex-col gap-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {data.bioParagraphs[currentLang].map((paragraph, index) => (
                <p key={index} className="text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {currentLang === "it" ? "Laurea in Informatica" : "B.Sc. in Computer Science"}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono">
                    Università degli Studi di Salerno
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{currentLang === "it" ? "In Corso" : "Active Student"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Bento (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Card 1: Core Strength */}
          <div className="glass-panel glass-panel-hover p-6 rounded-3xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1">
                  {currentLang === "it" ? "Approccio Full-Stack" : "Full-Stack Mindset"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {currentLang === "it"
                    ? "Dalla logica di business e API asincrone alla creazione di interfacce web reattive, moderne e pixel-perfect."
                    : "From business logic and async backend services to responsive, modern, pixel-perfect web interfaces."}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Low-Level & Protocol Curiosity */}
          <div className="glass-panel glass-panel-hover p-6 rounded-3xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1">
                  {currentLang === "it" ? "Sistemi & Reti" : "Systems & Networking"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {currentLang === "it"
                    ? "Passione per la programmazione concorrente (C++), protocolli di rete (IPP, CUPS, MQTT) ed ecosistemi Linux."
                    : "Deep interest in concurrency (C++), network communications (IPP, CUPS, MQTT), and headless Linux servers."}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Problem Solving & Collaboration */}
          <div className="glass-panel glass-panel-hover p-6 rounded-3xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white mb-1">
                  {currentLang === "it" ? "Problem Solving & Crescita" : "Continuous Learning"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {currentLang === "it"
                    ? "Esperienza lavorativa nel software e ottime doti relazionali: rapido nell'apprendere nuovi tool e lavorare in team."
                    : "Hands-on software experience paired with strong communication skills: quick at mastering new tools and team workflows."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
