import React from 'react';
import { PageTab } from '../types';
import { CAREER_VACANCIES, COMPANY_INFO } from '../data/company';
import { Briefcase, ArrowUpRight, CheckCircle2, ShieldAlert, Award, Clock } from 'lucide-react';

interface CareersPageProps {
  onNavigate: (tab: PageTab) => void;
  onOpenApply: (vacancyId?: string) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({
  onOpenApply
}) => {
  return (
    <div className="pt-28 pb-20 w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>UK Recruitment &amp; Opportunities</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-6">
            Build Resilient Technology With Us
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            At <strong className="text-white">{COMPANY_INFO.legalName}</strong>, we are expanding our engineering and commercial advisory footprint. Explore open roles with transparent salary parameters and direct application review.
          </p>
        </div>

        {/* Non-Fabrication Notice & Transparent Working Standards */}
        <div className="p-4 rounded-2xl bg-navy-900 border border-slate-800 text-xs text-slate-400 mb-12 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-200">UK Employment Standards Notice:</strong> Exact contract type, working pattern (remote/hybrid/on-site), benefits package, and application closing dates will be finalized upon formal interview progression. All roles are strictly compliant with the UK Equality Act 2010.
          </p>
        </div>

        {/* Detailed Vacancies List */}
        <div className="space-y-12 mb-20">
          {CAREER_VACANCIES.map((vacancy) => (
            <div
              key={vacancy.id}
              className="p-5 sm:p-8 lg:p-10 rounded-3xl bg-navy-900 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-xl"
            >
              {/* Vacancy Header Bar */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    {vacancy.department}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading mt-1">
                    {vacancy.title}
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="px-4 py-2 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 font-extrabold text-sm sm:text-base">
                    {vacancy.salaryRange}
                  </div>
                  <button
                    onClick={() => onOpenApply(vacancy.id)}
                    className="min-h-[44px] flex items-center justify-center gap-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-navy-950 font-bold px-6 py-2.5 rounded-xl text-sm shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <span>Apply Now</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Role Overview */}
              <div className="py-6">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Role Overview
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {vacancy.overview}
                </p>
              </div>

              {/* Responsibilities & Requirements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-t border-slate-800/80">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                    <span>Key Responsibilities</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {vacancy.keyResponsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span>Candidate Requirements &amp; Experience</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {vacancy.requirements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key Deliverables & Apply Action */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Immediate hiring consideration • Direct hiring team review</span>
                </div>
                <button
                  onClick={() => onOpenApply(vacancy.id)}
                  className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <span>Submit CV for {vacancy.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Application Process Guidance */}
        <div className="p-8 rounded-3xl bg-navy-900 border border-slate-800">
          <h3 className="text-xl font-bold text-white font-heading mb-3">
            Our Recruitment Process
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
            1. Submit your application and CV online using our secure form. <br />
            2. Our senior technical lead evaluates your background against role competencies. <br />
            3. Qualified applicants are invited for an in-depth technical conversation and competency interview. <br />
            4. Formal employment offer and onboarding package delivered.
          </p>
          <button
            onClick={() => onOpenApply()}
            className="min-h-[44px] inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold px-6 py-2.5 rounded-xl text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Start Your Application
          </button>
        </div>

      </div>
    </div>
  );
};
