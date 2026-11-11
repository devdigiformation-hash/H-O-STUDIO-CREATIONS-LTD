import React, { useRef, useState, useEffect } from 'react';
import { SequenceConfig } from '../types';
import { getSequenceFrames } from '../data/sequences';
import { CinematicCanvas } from './CinematicCanvas';
import { ArrowRight, ChevronDown, Shield, CheckCircle } from 'lucide-react';

interface CinematicHeroProps {
  config: SequenceConfig;
  onExploreServices: () => void;
  onRequestConsultation: () => void;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({
  config,
  onExploreServices,
  onRequestConsultation
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const frames = getSequenceFrames(config);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollable = container.offsetHeight - window.innerHeight;

      if (totalScrollable <= 0) return;

      // Calculate progress relative to container top
      const scrolled = -rect.top;
      const rawProgress = scrolled / totalScrollable;
      const clamped = Math.max(0, Math.min(1, rawProgress));
      setProgress(clamped);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Multi-screen scroll height for smooth cinematic scrub
    <div ref={containerRef} className="relative h-[240vh] w-full bg-navy-950">
      {/* Sticky Fullscreen Stage */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        {/* Cinematic Scrubber Background */}
        <div className="absolute inset-0 z-0">
          <CinematicCanvas
            frames={frames}
            progress={progress}
            altText="H&O STUDIO CREATIONS L LTD Executive IT Consultancy Office"
            className="w-full h-full"
          />

          {/* Tasteful cinematic scrim overlay to guarantee text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/80 z-10" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-navy-950/40 to-navy-950/80 z-10 pointer-events-none" />
        </div>

        {/* Semantic Content Overlay */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-20">
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

          {/* Value Proposition */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal mb-8 text-shadow">
            We architect resilient server networks, bespoke software ecosystems, and high-security enterprise environments for ambitious UK businesses.
          </p>

          {/* High-conversion CTA Action Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
            <button
              onClick={onExploreServices}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-navy-950 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
            >
              <span>Explore IT Services</span>
              <ArrowRight className="w-4 h-4 text-navy-950" />
            </button>
            <button
              onClick={onRequestConsultation}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-slate-700 hover:border-cyan-400/50 text-slate-200 hover:text-white font-semibold text-sm sm:text-base bg-navy-900/80 hover:bg-navy-900 backdrop-blur-md transition-all"
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
    </div>
  );
};
