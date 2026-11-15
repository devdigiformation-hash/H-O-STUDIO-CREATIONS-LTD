import React from 'react';
import { SequenceConfig } from '../types';
import { CleanMediaSlot } from './CleanMediaSlot';
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
  const isVisualRight = config.desktopPosition === 'right';

  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#070B14] border-t border-slate-800/80">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Text / Content Column */}
          <div
            className={`lg:col-span-5 flex flex-col justify-center order-2 ${
              isVisualRight ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            {/* Category Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-[11px] sm:text-xs font-semibold w-fit mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{badge}</span>
            </div>

            {/* Semantic Section Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3 sm:mb-4 font-heading leading-tight">
              {title}
            </h2>

            {/* Description Copy */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              {description}
            </p>

            {/* Key Deliverables / Bullets */}
            <div className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-6">
              {bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{bullet}</span>
                </div>
              ))}
            </div>

            {/* Accent Note (e.g. Careers salaries, strictly compliant) */}
            {accentNote && (
              <div className="p-3 sm:p-3.5 rounded-xl bg-navy-900/90 border border-slate-800 text-xs text-slate-300 mb-4 sm:mb-6 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                <span className="font-medium text-slate-200 leading-snug">{accentNote}</span>
              </div>
            )}

            {/* Section CTA Button (Tier 2 Medium: min-h-[44px]) */}
            <div>
              <button
                onClick={onCtaClick}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-navy-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4 text-navy-950 shrink-0" />
              </button>
            </div>
          </div>

          {/* Reserved Clean Media Slot Visual Column (16:9 Standard Aspect Ratio) */}
          <div
            className={`lg:col-span-7 order-1 ${
              isVisualRight ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/90 bg-navy-900 shadow-2xl cinematic-canvas-shadow aspect-[16/9] w-full">
              {/* Neutral Unbranded IT Architecture Placeholder */}
              <CleanMediaSlot
                slotId={config.id}
                title={title}
                className="w-full h-full"
              />

              {/* Ambient Vignette & Inset Border */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

