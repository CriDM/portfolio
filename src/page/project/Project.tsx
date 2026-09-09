import React from "react";
import { Language, PORTFOLIO_DATA, ProjectItem } from "../../data/portfolioData";
import ippImage from "../../assets/ipp.png";
import {
  FolderGit2,
  ExternalLink,
  PackageCheck,
  Server,
  Activity,
  Cpu,
  Layers,
  FileCode,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "../../component/Icons";

interface ProjectProps {
  currentLang: Language;
}

export const Project: React.FC<ProjectProps> = ({ currentLang }) => {
  const projects = PORTFOLIO_DATA.projects;

  const getProjectIcon = (id: string) => {
    switch (id) {
      case "ipp-browser":
        return <PackageCheck className="w-5 h-5 text-indigo-400" />;
      case "print-server":
        return <Server className="w-5 h-5 text-cyan-400" />;
      case "dicom-tools":
        return <Activity className="w-5 h-5 text-emerald-400" />;
      case "prime-set-research":
        return <Cpu className="w-5 h-5 text-violet-400" />;
      case "traffic-simulator":
        return <Layers className="w-5 h-5 text-amber-400" />;
      case "preventivatore":
        return <FileCode className="w-5 h-5 text-pink-400" />;
      default:
        return <FolderGit2 className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="projects" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto overflow-hidden">
      {/* Ambient background glow */}
      <div className="ambient-glow-1" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-3">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>{currentLang === "it" ? "PORTFOLIO & PROGETTI" : "PORTFOLIO & PROJECTS"}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          {currentLang === "it" ? "I Miei Progetti" : "Featured Work & Projects"}
        </h2>
        <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
          {currentLang === "it"
            ? "Una selezione di librerie open-source, server autonomi, simulazioni e progetti sviluppati con focus su efficienza e design."
            : "A curated selection of open-source libraries, autonomous servers, simulations, and utilities built for performance and reliability."}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {projects.map((proj) => {
          const isIpp = proj.id === "ipp-browser";

          return (
            <div
              key={proj.id}
              className={`glass-panel glass-panel-hover rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-white/5 transition-all duration-300 relative group overflow-hidden ${
                proj.isFeatured ? "md:border-indigo-500/20 shadow-lg shadow-indigo-950/10" : ""
              }`}
            >
              {/* Top ambient highlight on card */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/15 transition-all duration-500" />

              <div>
                {/* Card Top: Icon, Title & Badge */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-slate-900/80 border border-white/10 group-hover:scale-105 transition-transform">
                      {getProjectIcon(proj.id)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                          {proj.title}
                        </h3>
                      </div>
                      <p className="text-xs text-indigo-400 font-mono mt-0.5">
                        {proj.tagline[currentLang]}
                      </p>
                    </div>
                  </div>

                  {proj.badge && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-white/5 border border-white/10 text-slate-300 shrink-0">
                      {proj.badge}
                    </span>
                  )}
                </div>

                {/* Optional Image Preview for IPP Browser */}
                {isIpp && (
                  <div className="my-4 rounded-2xl overflow-hidden border border-white/10 bg-slate-950/80 p-2 group-hover:border-indigo-500/30 transition-colors">
                    <img
                      src={ippImage}
                      alt="IPP Browser NPM Preview"
                      className="w-full h-auto rounded-xl object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                )}

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {proj.description[currentLang]}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/5 text-slate-400 group-hover:text-slate-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Action Links */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium border border-white/10 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}

                  {proj.npmUrl && (
                    <a
                      href={proj.npmUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 hover:text-white text-xs font-medium border border-indigo-500/30 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>NPM Registry</span>
                    </a>
                  )}
                </div>

                <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-indigo-400" />
                  Verified
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
