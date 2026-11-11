import React from 'react';
import { PageTab } from '../types';
import { COMPANY_INFO, METHODOLOGY_STEPS } from '../data/company';
import { ShieldCheck, Target, Cpu, Award, Terminal, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (tab: PageTab) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenConsultation
}) => {
  return (
    <div className="pt-28 pb-20 w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
            <span>About Our Practice</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-6">
            Engineering Precision in IT Consultancy
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            <strong className="text-white">{COMPANY_INFO.legalName}</strong> is a UK-focused information technology consultancy dedicated to designing resilient enterprise infrastructure, custom software systems, and proactive technical support frameworks.
          </p>
        </div>

        {/* Corporate Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-bold text-white font-heading">
              A Principled Approach to Modern Technology
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              In an era of rapidly multiplying cloud dependencies and cybersecurity vulnerabilities, businesses require objective, technically disciplined partners. We eliminate speculative buzzwords and deliver concrete, audited IT engineering.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether conducting an in-depth audit of complex server hardware, architecting scalable cloud workloads, or developing bespoke business automation tools, our engagements are anchored in technical rigour, transparent metrics, and measurable business uptime.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-navy-900 border border-slate-800">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Security-First Architecture</span>
                </div>
                <p className="text-slate-400 text-xs">
                  Proactive zero-trust network segregation and verified data compliance.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-navy-900 border border-slate-800">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-1">
                  <Cpu className="w-4 h-4" />
                  <span>Operational Uptime Focus</span>
                </div>
                <p className="text-slate-400 text-xs">
                  Engineering fault-tolerant systems backed by verified recovery drills.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-navy-900/80 border border-slate-700 shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-white font-heading border-b border-slate-800 pb-3">
                Corporate Factsheet
              </h3>
              <div className="space-y-3.5 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-500 block text-[11px] uppercase tracking-wider font-semibold">
                    Registered Legal Entity
                  </span>
                  <span className="text-white font-medium">{COMPANY_INFO.legalName}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px] uppercase tracking-wider font-semibold">
                    Core Business Classification
                  </span>
                  <span className="text-slate-200">{COMPANY_INFO.businessNature}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px] uppercase tracking-wider font-semibold">
                    Contact Channels
                  </span>
                  <span className="text-cyan-400">{COMPANY_INFO.contactEmail}</span>
                  <span className="text-slate-400 block">{COMPANY_INFO.contactPhoneFormatted}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px] uppercase tracking-wider font-semibold">
                    Jurisdiction
                  </span>
                  <span className="text-slate-200">{COMPANY_INFO.registeredCountry}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-colors"
                >
                  Request Technical Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Our Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading mt-1">
              Guiding Engineering Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-navy-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading mb-2">
                Technical Integrity
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                We recommend what your systems genuinely need — never inflated software licenses or needless architecture complexity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading mb-2">
                Operational Discipline
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Every server configuration, deployment pipeline, and security policy is rigorously tested, version-controlled, and thoroughly documented.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-navy-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading mb-2">
                Continuous Reliability
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                We design systems around high availability, automated failovers, and redundant network paths so that unforeseen events never halt operations.
              </p>
            </div>
          </div>
        </div>

        {/* Methodology Walkthrough */}
        <div className="p-10 rounded-3xl bg-navy-900 border border-slate-800 mb-16">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-bold text-white font-heading">
              Our 4-Stage Engagement Methodology
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Structured stages that eliminate scope ambiguity and ensure dependable delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY_STEPS.map((step) => (
              <div key={step.step} className="border-l-2 border-cyan-500/40 pl-4 space-y-1.5">
                <span className="text-cyan-400 font-bold text-xs uppercase tracking-wider">
                  Phase {step.step}
                </span>
                <h4 className="text-white font-bold text-sm font-heading">{step.name}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 text-navy-950 font-bold px-7 py-3 rounded-xl text-sm shadow-md transition-all"
          >
            <span>Connect with our Senior Consultants</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
