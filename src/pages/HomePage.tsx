import React from 'react';
import { PageTab } from '../types';
import { CINEMATIC_SEQUENCES } from '../data/sequences';
import { CONSULTANCY_SERVICES, CAREER_VACANCIES, METHODOLOGY_STEPS } from '../data/company';
import { CinematicHero } from '../components/CinematicHero';
import { CinematicSection } from '../components/CinematicSection';
import { ArrowRight, Server, Code2, ShieldCheck, Cpu, ArrowUpRight, CheckCircle, ChevronRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: PageTab) => void;
  onOpenApply: (vacancyId?: string) => void;
  onOpenConsultation: (serviceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenApply,
  onOpenConsultation
}) => {
  const [seq1, seq2, seq3, seq4] = CINEMATIC_SEQUENCES;

  return (
    <div className="w-full">
      {/* 1. CINEMATIC FULLSCREEN HERO (VIDEO_01: 0-15s) */}
      <CinematicHero
        config={seq1}
        onExploreServices={() => onNavigate('services')}
        onRequestConsultation={() => onOpenConsultation()}
      />

      {/* 2. CINEMATIC SECTION 1 (VIDEO_02: 0-10s ONLY) - IT Infrastructure (Desktop: Visual on Right) */}
      <CinematicSection
        config={seq2}
        badge="Enterprise Infrastructure"
        title="High-Reliability Server & Network Operations"
        description="We configure, rack-mount, and manage mission-critical on-premise hardware and hyperconverged infrastructure designed for continuous business uptime."
        bullets={[
          "Precision server rack cabling, switch configurations, and cooling management",
          "Automated off-site disaster backups and rapid bare-metal recovery protocols",
          "Hardened perimeter firewalls, zero-trust VLANs, and active directory governance"
        ]}
        ctaText="Explore Infrastructure Support"
        onCtaClick={() => onNavigate('services')}
        accentNote="Proactive 24/7 endpoint telemetry & SLA-backed maintenance"
      />

      {/* 3. CINEMATIC SECTION 2 (VIDEO_03: 0-15s) - Software Development (Desktop: Visual on Left) */}
      <CinematicSection
        config={seq3}
        badge="Software & Digital Solutions"
        title="Bespoke Software Engineering & Cloud Modernisation"
        description="Our software engineering consultancy develops resilient web architectures, resilient microservices, and internal business platforms tailored to eliminate operational friction."
        bullets={[
          "Modern full-stack cloud applications built with TypeScript, React, and robust APIs",
          "Enterprise database design, data sanitisation, and high-throughput query caching",
          "Continuous integration and automated container pipelines with zero deployment downtime"
        ]}
        ctaText="View Software Capabilities"
        onCtaClick={() => onNavigate('solutions')}
        accentNote="Engineered for high concurrency, security, and long-term maintainability"
      />

      {/* 4. CINEMATIC SECTION 3 (VIDEO_04: 0-10s ONLY) - Careers & Recruitment (Desktop: Visual on Right) */}
      <CinematicSection
        config={seq4}
        badge="Engineering Careers"
        title="Join H&O STUDIO CREATIONS L LTD"
        description="We are expanding our UK technical consultancy practice and currently welcoming applications for two dedicated professional vacancies."
        bullets={[
          "IT Technician — £35,000 to £45,000 per annum (gross)",
          "Business Development Manager — £50,000 to £60,000 per annum (gross)",
          "Direct involvement in real-world enterprise infrastructure and client systems"
        ]}
        ctaText="View Vacancies & Apply"
        onCtaClick={() => onOpenApply()}
        accentNote="Transparent compensation • Disciplined engineering environment"
      />

      {/* 5. CONSULTANCY PILLARS OVERVIEW */}
      <section className="py-24 bg-navy-900 border-t border-slate-800 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Core Technical Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-2 mb-4 font-heading">
              Comprehensive IT Consultancy Services
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We provide objective, high-calibre advisory and hands-on systems engineering to safeguard and accelerate your technology landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONSULTANCY_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="group p-7 rounded-2xl bg-navy-950/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-navy-950 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-cyan-400 transition-all">
                    {srv.icon === 'Server' && <Server className="w-6 h-6" />}
                    {srv.icon === 'Code2' && <Code2 className="w-6 h-6" />}
                    {srv.icon === 'ShieldCheck' && <ShieldCheck className="w-6 h-6" />}
                    {srv.icon === 'Cpu' && <Cpu className="w-6 h-6" />}
                    {srv.icon !== 'Server' && srv.icon !== 'Code2' && srv.icon !== 'ShieldCheck' && srv.icon !== 'Cpu' && (
                      <Server className="w-6 h-6" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2.5 font-heading group-hover:text-cyan-400 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {srv.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {srv.deliverables.map((d, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onOpenConsultation(srv.id)}
                  className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg group/btn pt-2 border-t border-slate-800/80 transition-colors"
                >
                  <span>Enquire for this service</span>
                  <ChevronRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SYSTEMATIC METHODOLOGY */}
      <section className="py-20 bg-navy-950 border-t border-slate-800/90 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Disciplined Delivery Framework
            </span>
            <h2 className="text-3xl font-bold text-white mt-1 font-heading">
              How We Deliver IT Value
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Every client engagement follows an empirical, risk-managed path from discovery to ongoing operational support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY_STEPS.map((m) => (
              <div
                key={m.step}
                className="p-6 rounded-2xl bg-navy-900/60 border border-slate-800 relative hover:border-slate-700 transition-colors"
              >
                <div className="text-3xl font-black font-heading text-slate-700 mb-3">
                  {m.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-heading">
                  {m.name}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CAREERS SPOTLIGHT SECTION */}
      <section className="py-20 bg-navy-900 border-t border-slate-800 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                UK Recruitment
              </span>
              <h2 className="text-3xl font-bold text-white mt-1 font-heading">
                Open Career Vacancies
              </h2>
              <p className="text-slate-400 text-sm mt-1 max-w-xl">
                Competitive salary ranges with transparent requirements. Apply directly online.
              </p>
            </div>
            <button
              onClick={() => onNavigate('careers')}
              className="min-h-[44px] inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg px-2"
            >
              <span>View Full Careers Page</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CAREER_VACANCIES.map((vac) => (
              <div
                key={vac.id}
                className="p-5 sm:p-8 rounded-2xl bg-navy-950 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <span className="text-xs text-slate-400">{vac.department}</span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mt-1">
                        {vac.title}
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-bold border border-cyan-500/30 shrink-0 self-start sm:self-auto">
                      {vac.salary}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {vac.overview}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Responsibilities:
                    </span>
                    {vac.keyResponsibilities.slice(0, 3).map((r, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs text-slate-400">{vac.type}</span>
                  <button
                    onClick={() => onOpenApply(vac.id)}
                    className="w-full sm:w-auto min-h-[44px] flex items-center justify-center gap-1.5 bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold px-4 py-2 rounded-xl text-xs sm:text-sm shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <span>Apply for this Role</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONSULTATION LEAD CONVERSION BANNER */}
      <section className="py-20 bg-gradient-to-b from-navy-900 to-navy-950 border-t border-slate-800 relative z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Direct Technical Engagement
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4 font-heading">
                Ready to Upgrade Your Enterprise Technology?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                Connect directly with our UK IT consultants to scope your infrastructure requirements, evaluate security posture, or plan bespoke software development.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onOpenConsultation()}
                  className="w-full sm:w-auto min-h-[48px] h-12 inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-navy-950 font-bold px-8 rounded-xl shadow-lg text-sm sm:text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  Schedule Initial Consultation
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto min-h-[48px] h-12 inline-flex items-center justify-center px-8 rounded-xl border border-slate-700 text-slate-200 hover:text-white font-semibold text-sm sm:text-base hover:bg-slate-800/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  View Direct Contact Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
