import React from "react";
import { Language, PORTFOLIO_DATA } from "../../data/portfolioData";
import {
  Code,
  Layout,
  Server,
  Database,
  Terminal,
  Cpu,
  Boxes,
  Network,
  Layers,
  Wrench,
  CheckCircle,
} from "lucide-react";

interface SkillsProps {
  currentLang: Language;
}

export const Skills: React.FC<SkillsProps> = ({ currentLang }) => {
  const data = PORTFOLIO_DATA.skillsSection;
  const categories = data.categories;

  const categoryConfigs = [
    {
      key: "languages",
      title: categories.languages.title[currentLang],
      icon: <Code className="w-5 h-5 text-indigo-400" />,
      accentBorder: "group-hover:border-indigo-500/40",
      accentBg: "bg-indigo-500/10",
      badgeColor: "text-indigo-400 border-indigo-500/30",
      items: categories.languages.items,
    },
    {
      key: "frontend",
      title: categories.frontend.title[currentLang],
      icon: <Layout className="w-5 h-5 text-cyan-400" />,
      accentBorder: "group-hover:border-cyan-500/40",
      accentBg: "bg-cyan-500/10",
      badgeColor: "text-cyan-400 border-cyan-500/30",
      items: categories.frontend.items,
    },
    {
      key: "backend",
      title: categories.backend.title[currentLang],
      icon: <Server className="w-5 h-5 text-violet-400" />,
      accentBorder: "group-hover:border-violet-500/40",
      accentBg: "bg-violet-500/10",
      badgeColor: "text-violet-400 border-violet-500/30",
      items: categories.backend.items,
    },
    {
      key: "devops",
      title: categories.devops.title[currentLang],
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      accentBorder: "group-hover:border-emerald-500/40",
      accentBg: "bg-emerald-500/10",
      badgeColor: "text-emerald-400 border-emerald-500/30",
      items: categories.devops.items,
    },
  ];

  return (
    <section id="skills" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Ambient background glow */}
      <div className="ambient-glow-3" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>{currentLang === "it" ? "STACK TECNOLOGICO" : "TECH STACK"}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          {data.title[currentLang]}
        </h2>
        <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
          {data.subtitle[currentLang]}
        </p>
      </div>

      {/* 4 Categorized Bento Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {categoryConfigs.map((cat) => (
          <div
            key={cat.key}
            className={`glass-panel p-6 sm:p-7 rounded-3xl transition-all duration-300 border border-white/5 group hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-950/20 flex flex-col justify-between`}
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${cat.accentBg} border border-white/5`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {cat.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  {cat.items.length} {currentLang === "it" ? "tecnologie" : "skills"}
                </span>
              </div>

              {/* Skills Items List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-white/15 transition-all duration-200 group/item flex flex-col justify-center"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-slate-200 group-hover/item:text-white text-sm">
                        {item.name}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50 group-hover/item:bg-indigo-400 transition-colors" />
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Micro footer hint */}
            <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                {currentLang === "it" ? "Utilizzato in progetti reali" : "Production & project verified"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
