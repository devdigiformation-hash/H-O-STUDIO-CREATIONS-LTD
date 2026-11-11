import React, { useState } from 'react';
import { COMPANY_INFO, CONSULTANCY_SERVICES } from '../data/company';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultServiceId?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultServiceId
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceCategory, setServiceCategory] = useState(
    defaultServiceId || CONSULTANCY_SERVICES[0].id
  );
  const [projectSummary, setProjectSummary] = useState('');
  const [timeline, setTimeline] = useState('Immediate / 1-3 Months');
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAgreed) return;

    setSubmitting(true);

    setTimeout(() => {
      const generatedRef = `HO-INQ-${Date.now().toString().slice(-6)}`;
      setInquiryRef(generatedRef);
      setSubmitting(false);
      setSubmitted(true);

      console.info('Consultation Request Logged:', {
        ref: generatedRef,
        fullName,
        email,
        phone,
        serviceCategory,
        projectSummary,
        timeline,
        timestamp: new Date().toISOString()
      });
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setInquiryRef(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setProjectSummary('');
    setPrivacyAgreed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative bg-navy-900 border border-slate-700/80 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl text-left">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close consultation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-heading">
              Consultation Requested
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto mb-4 leading-relaxed">
              Thank you, <strong className="text-white">{fullName}</strong>. Your enquiry has been routed to our senior technical consultants at {COMPANY_INFO.legalName}.
            </p>
            <div className="p-3 bg-navy-950 rounded-xl border border-slate-800 text-xs text-slate-400 max-w-xs mx-auto mb-6">
              Enquiry Reference: <span className="font-mono text-cyan-400 font-bold">{inquiryRef}</span>
            </div>
            <button
              onClick={handleReset}
              className="bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold px-6 py-2.5 rounded-xl text-sm transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Direct Client Advisory
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mt-1">
                Request an IT Consultation
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Discuss your infrastructure audit, cloud architecture, or bespoke software requirements with our engineers.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full name"
                    className="w-full bg-navy-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-slate-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.co.uk"
                    className="w-full bg-navy-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+44 7... or landline"
                    className="w-full bg-navy-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-slate-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Consultancy Focus *
                  </label>
                  <select
                    value={serviceCategory}
                    onChange={(e) => setServiceCategory(e.target.value)}
                    className="w-full bg-navy-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    {CONSULTANCY_SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Project Scope / Operational Requirements *
                </label>
                <textarea
                  required
                  rows={3}
                  value={projectSummary}
                  onChange={(e) => setProjectSummary(e.target.value)}
                  placeholder="Outline your current systems, objectives, or key infrastructure bottlenecks..."
                  className="w-full bg-navy-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-slate-600 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Estimated Target Timeline
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full bg-navy-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="Immediate / Critical Support">Immediate / Critical Support</option>
                  <option value="1-3 Months">1-3 Months</option>
                  <option value="3-6 Months">3-6 Months</option>
                  <option value="Strategic Planning Phase">Strategic Planning Phase</option>
                </select>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="consultation-consent"
                  required
                  checked={privacyAgreed}
                  onChange={(e) => setPrivacyAgreed(e.target.checked)}
                  className="mt-1 rounded border-slate-700 bg-navy-950 text-cyan-500 focus:ring-cyan-400"
                />
                <label htmlFor="consultation-consent" className="text-xs text-slate-400 leading-relaxed">
                  I agree that {COMPANY_INFO.legalName} may contact me regarding this consultancy request in line with the privacy policy.
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-navy-950 font-bold py-3 rounded-xl text-sm transition-all shadow-md disabled:opacity-50"
                >
                  {submitting ? (
                    <div className="w-5 h-5 border-2 border-navy-950 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
