import React from 'react';
import { SequenceConfig } from '../types';
import { ArrowRight, ChevronDown, Shield, CheckCircle } from 'lucide-react';

interface CinematicHeroProps {
  config: SequenceConfig;
  onExploreServices: () => void;
  onRequestConsultation: () => void;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({
  onExploreServices,
  onRequestConsultation
}) => {
  return (
    <div className="relative min-h-[92vh] sm:min-h-screen w-full bg-[#070B14] flex items-center justify-center overflow-hidden pt-28 pb-16 sm:py-32">
      {/* Background Ambience: Architectural Grid & Atmospheric Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Tech Dot Matrix Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #38bdf8 1.5px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Soft Radial Ambient Lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/[0.08] rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/3 w-[500px] h-[300px] bg-blue-600/[0.08] rounded-full blur-[120px]" />

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-[#070B14]/70" />
      </div>

      {/* Semantic Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Business Nature Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900/90 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold shadow-lg backdrop-blur-md mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>UK Information Technology Consultancy</span>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="text-slate-300 hidden sm:inline">H&amp;O STUDIO CREATIONS L LTD</span>
        </div>

        {/* Real Semantic Main Heading (No duplicate logo) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 font-heading">
          Strategic IT Leadership &amp; <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
            Mission-Critical Infrastructure
          </span>
        </h1>

        {/* Value Proposition with high-contrast drop shadow */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal mb-8 text-shadow-hero">
          We architect resilient server networks, bespoke software ecosystems, and high-security enterprise environments for ambitious UK businesses.
        </p>

        {/* High-conversion Standardised CTA Action Group (48px height) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto min-h-[48px] h-12 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-navy-950 font-bold px-7 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <span>Explore IT Services</span>
            <ArrowRight className="w-4 h-4 text-navy-950" />
          </button>
          <button
            onClick={onRequestConsultation}
            className="w-full sm:w-auto min-h-[48px] h-12 inline-flex items-center justify-center px-7 rounded-xl border border-slate-700 hover:border-cyan-400/50 text-slate-200 hover:text-white font-semibold text-sm sm:text-base bg-navy-900/80 hover:bg-navy-900 backdrop-blur-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Request a Consultation
          </button>
        </div>

        {/* Verified Trust Markers */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-cyan-400" />
            <span>Full-Lifecycle IT Advisory</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-cyan-400" />
            <span>Hardened Network Security</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-cyan-400" />
            <span>UK Registered Consultancy</span>
          </div>
        </div>
      </div>

      {/* Restrained Scroll Indicator Cue */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-1 pointer-events-none text-slate-400">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-slate-400">
          Scroll to Explore
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
      </div>
    </div>
  );
};

