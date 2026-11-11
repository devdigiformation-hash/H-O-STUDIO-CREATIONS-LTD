import React from 'react';
import { PageTab } from '../types';
import { COMPANY_INFO } from '../data/company';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: PageTab) => void;
  onOpenApply: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenApply,
  onOpenConsultation
}) => {
  return (
    <footer className="bg-navy-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Corporate Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-cyan-500/30 bg-navy-900 flex items-center justify-center p-0.5 shadow-sm">
                <img
                  src="/logo.png"
                  alt="H&O STUDIO CREATIONS L LTD"
                  className="w-full h-full object-cover scale-105"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-base tracking-tight font-heading">
                  H&amp;O STUDIO CREATIONS <span className="text-cyan-400">L LTD</span>
                </h3>
                <p className="text-xs text-slate-400">UK Information Technology Consultancy</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              Delivering high-integrity enterprise technology consulting, hardened infrastructure management, custom software engineering, and mission-critical systems support.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>UK Registered Company • Professional IT Advisory</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-heading tracking-wide uppercase">
              Consultancy
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  IT Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('solutions')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('careers')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Engagement */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-heading tracking-wide uppercase">
              Opportunities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={onOpenApply}
                  className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 transition-colors"
                >
                  <span>Apply Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('careers')}
                  className="hover:text-slate-200 transition-colors"
                >
                  IT Technician (£35k–£45k)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('careers')}
                  className="hover:text-slate-200 transition-colors"
                >
                  Business Development (£50k–£60k)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="hover:text-slate-200 transition-colors"
                >
                  Request Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-heading tracking-wide uppercase">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${COMPANY_INFO.contactEmail}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {COMPANY_INFO.contactEmail}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <a
                  href={`tel:${COMPANY_INFO.contactPhone}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.contactPhoneFormatted}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>United Kingdom</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} <strong className="text-slate-400">{COMPANY_INFO.legalName}</strong>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy &amp; Data Practices
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-slate-300 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
