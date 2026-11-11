import React from 'react';
import { PageTab } from '../types';
import { CONSULTANCY_SERVICES } from '../data/company';
import { Server, Code2, ShieldCheck, Cloud, Cpu, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (tab: PageTab) => void;
  onOpenConsultation: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenConsultation
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-6 h-6 text-cyan-400" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      default:
        return <Compass className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="pt-28 pb-20 w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
            <span>Consultancy Scope</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-6">
            Enterprise IT Consultancy &amp; Solutions
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Our practice delivers rigorous technical solutions across corporate infrastructure, mission-critical server management, bespoke software engineering, and strategic advisory.
          </p>
        </div>

        {/* Detailed Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {CONSULTANCY_SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl bg-navy-900 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center mb-6">
                  {getIcon(service.icon)}
                </div>

                <h2 className="text-2xl font-bold text-white font-heading mb-3">
                  {service.title}
                </h2>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2.5 mb-8">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Typical Engagement Deliverables:
                  </h3>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Fixed-scope &amp; Retainer Advisory</span>
                <button
                  onClick={() => onOpenConsultation(service.id)}
                  className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg px-2"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Banner */}
        <div className="p-10 rounded-3xl bg-navy-900/90 border border-slate-800 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white font-heading mb-3">
            Require a Custom Technical Architecture?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            We review complex requirements under full confidentiality. Speak directly with a senior UK consultant.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenConsultation()}
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold px-7 py-3 rounded-xl text-sm transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Request Scoping Consultation
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center px-7 py-3 rounded-xl border border-slate-700 text-slate-200 hover:text-white text-sm font-semibold hover:bg-slate-800/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Direct Contact Details
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
