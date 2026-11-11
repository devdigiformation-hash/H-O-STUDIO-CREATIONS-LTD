import React, { useState, useEffect } from 'react';
import { PageTab } from '../types';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HeaderProps {
  currentTab: PageTab;
  onNavigate: (tab: PageTab) => void;
  onOpenApply: () => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  onOpenApply,
  onOpenConsultation
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open, restore on close or unmount
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  const navItems: { label: string; tab: PageTab }[] = [
    { label: 'Home', tab: 'home' },
    { label: 'About', tab: 'about' },
    { label: 'Services', tab: 'services' },
    { label: 'Solutions', tab: 'solutions' },
    { label: 'Careers', tab: 'careers' },
    { label: 'Contact', tab: 'contact' }
  ];

  const handleNavClick = (tab: PageTab) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3'
          : 'bg-gradient-to-b from-navy-950/95 via-navy-950/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Primary Brand Anchor */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1 transition-all"
            aria-label="H&O STUDIO CREATIONS L LTD - Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden border border-cyan-500/30 group-hover:border-cyan-400 transition-all flex items-center justify-center bg-navy-900 shadow-md">
              <img
                src="/logo.png"
                alt="H&O STUDIO CREATIONS L LTD Monogram"
                className="w-full h-full object-cover scale-105"
                loading="eager"
              />
            </div>
            <div>
              <div className="text-white font-bold tracking-tight text-sm sm:text-base group-hover:text-cyan-400 transition-colors flex items-center gap-1 font-heading">
                <span>H&amp;O STUDIO CREATIONS</span>
                <span className="text-cyan-400 font-extrabold">L LTD</span>
              </div>
              <p className="text-[11px] text-slate-400 tracking-wider uppercase font-medium">
                IT Consultancy
              </p>
            </div>
          </button>

          {/* Desktop Navigation (Enabled on xl: 1280px+ to ensure zero wrapping and spacious alignment) */}
          <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-2">
            {navItems.map((item) => {
              const isActive = currentTab === item.tab;
              return (
                <button
                  key={item.tab}
                  onClick={() => handleNavClick(item.tab)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Action Buttons (Standardised 40px Height) */}
          <div className="hidden xl:flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="h-10 text-xs font-semibold text-slate-300 hover:text-white px-4 py-2 rounded-lg border border-slate-700 hover:border-slate-500 transition-all hover:bg-slate-800/40 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Consultation
            </button>
            <button
              onClick={onOpenApply}
              className="h-10 flex items-center justify-center gap-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-navy-950 font-bold px-4 py-2 rounded-lg text-sm shadow-md hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Apply Now - Career Opportunities"
            >
              <span>Apply Now</span>
              <ArrowUpRight className="w-4 h-4 text-navy-950" />
            </button>
          </div>

          {/* Mobile / Tablet Action Group (<xl Breakpoint, Standardised 44x44px Touch Targets) */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenApply}
              className="min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-navy-950 shadow-sm flex items-center justify-center gap-1 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Apply Now - Career Vacancies"
            >
              <span>Apply</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-navy-950" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-h-[44px] min-w-[44px] p-2.5 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-navy-950/98 border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = currentTab === item.tab;
              return (
                <button
                  key={item.tab}
                  onClick={() => handleNavClick(item.tab)}
                  className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/50 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApply();
                }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-navy-950 font-bold py-3 rounded-xl shadow-md text-base"
              >
                <span>Apply Now (Open Vacancies)</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 rounded-xl border border-slate-700 text-slate-200 text-sm font-semibold hover:bg-slate-800/40 transition-all text-center"
              >
                Request a Consultation
              </button>
            </div>

            <div className="pt-3 flex flex-col gap-1 text-xs text-slate-400 px-2">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`mailto:${COMPANY_INFO.contactEmail}`} className="hover:text-slate-200">
                  {COMPANY_INFO.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`tel:${COMPANY_INFO.contactPhone}`} className="hover:text-slate-200">
                  {COMPANY_INFO.contactPhoneFormatted}
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
