import React, { useRef, useState, useEffect } from 'react';
import { SequenceConfig } from '../types';
import { getSequenceFrames } from '../data/sequences';
import { CinematicCanvas } from './CinematicCanvas';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface CinematicSectionProps {
  config: SequenceConfig;
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  ctaText: string;
  onCtaClick: () => void;
  accentNote?: string;
}

export const CinematicSection: React.FC<CinematicSectionProps> = ({
  config,
  badge,
  title,
  description,
  bullets,
  ctaText,
  onCtaClick,
  accentNote
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const frames = getSequenceFrames(config);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = container.offsetHeight - viewportHeight;

      if (totalScrollable <= 0) return;

      // Scrolled progress within pinned track
      const scrolled = -rect.top;
      const rawProgress = scrolled / totalScrollable;
      const clamped = Math.max(0, Math.min(1, rawProgress));
      setProgress(clamped);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isVisualRight = config.desktopPosition === 'right';

  return (
    // Height ensures smooth scroll scrub duration
    <div ref={containerRef} className="relative h-[220vh] w-full bg-navy-950">
      {/* Sticky Viewport Stage - Safely centered below sticky header */}
      <div className="sticky top-0 w-full h-screen h-[100dvh] flex items-center justify-center pt-14 sm:pt-20 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-12 items-center max-h-[calc(100dvh-4.5rem)] sm:max-h-[calc(100dvh-5.5rem)] lg:max-h-none overflow-y-auto lg:overflow-visible pr-1 lg:pr-0">
          
          {/* Text/Content Column */}
          <div
            className={`lg:col-span-5 flex flex-col justify-center order-2 ${
              isVisualRight ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            {/* Category Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-[11px] sm:text-xs font-semibold w-fit mb-2 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{badge}</span>
            </div>

            {/* Semantic Section Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-2 sm:mb-4 font-heading leading-tight">
              {title}
            </h2>

            {/* Description Copy */}
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-6">
              {description}
            </p>

            {/* Key Deliverables / Bullets */}
            <div className="space-y-1.5 sm:space-y-2.5 mb-3 sm:mb-6">
              {bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{bullet}</span>
                </div>
              ))}
            </div>

            {/* Accent Note (e.g. Careers salaries, strictly compliant) */}
            {accentNote && (
              <div className="p-2.5 sm:p-3.5 rounded-xl bg-navy-900/90 border border-slate-800 text-[11px] sm:text-xs text-slate-300 mb-3 sm:mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                <span className="font-medium text-slate-200 leading-snug">{accentNote}</span>
              </div>
            )}

            {/* Section CTA Button (Tier 2 Medium: min-h-[44px]) */}
            <div>
              <button
                onClick={onCtaClick}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-navy-950 font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4 text-navy-950 shrink-0" />
              </button>
            </div>
          </div>

          {/* Cinematic Scrubber Visual Stage Column */}
          <div
            className={`lg:col-span-7 order-1 ${
              isVisualRight ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            {/* Visual Frame Wrapper with aspect containment */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/90 bg-navy-900 shadow-2xl cinematic-canvas-shadow aspect-[16/9] w-full max-h-[26vh] sm:max-h-[35vh] lg:max-h-[64vh]">
              {/* Center-Pinned Canvas Scrubber */}
              <CinematicCanvas
                frames={frames}
                progress={progress}
                altText={title}
                className="w-full h-full object-contain"
              />

              {/* Subtle Ambient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
