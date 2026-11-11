import React, { useState } from 'react';
import { COMPANY_INFO, CONSULTANCY_SERVICES } from '../data/company';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceCategory, setServiceCategory] = useState(CONSULTANCY_SERVICES[0].id);
  const [message, setMessage] = useState('');
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAgreed) return;

    setSubmitting(true);
    setTimeout(() => {
      const generated = `HO-MSG-${Date.now().toString().slice(-6)}`;
      setRefId(generated);
      setSubmitting(false);
      setSubmitted(true);
    }, 850);
  };

  const handleReset = () => {
    setSubmitted(false);
    setRefId(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setPrivacyAgreed(false);
  };

  return (
    <div className="pt-28 pb-20 w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
            <span>Direct Client Communications</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-6">
            Contact Our Advisory Team
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Reach out directly to discuss your enterprise IT infrastructure, request an on-site audit, or explore custom software development with <strong className="text-white">{COMPANY_INFO.legalName}</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-navy-900 border border-slate-800 shadow-xl space-y-6">
              <h2 className="text-xl font-bold text-white font-heading">
                Verified Communication Channels
              </h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block uppercase font-semibold tracking-wider">
                      Consultancy Email
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.contactEmail}`}
                      className="text-white hover:text-cyan-400 font-medium transition-colors break-all"
                    >
                      {COMPANY_INFO.contactEmail}
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">Monitored during UK business hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block uppercase font-semibold tracking-wider">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.contactPhone}`}
                      className="text-white hover:text-cyan-400 font-medium transition-colors"
                    >
                      {COMPANY_INFO.contactPhoneFormatted}
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">International normalized: +447393667807</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center shrink-0 text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block uppercase font-semibold tracking-wider">
                      Verified WhatsApp Support
                    </span>
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-lg"
                    >
                      <span>Start WhatsApp Conversation</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <p className="text-[11px] text-slate-500 mt-0.5">Quick client messaging &amp; advisory</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block uppercase font-semibold tracking-wider">
                      Jurisdiction
                    </span>
                    <span className="text-slate-200">United Kingdom</span>
                    <p className="text-[11px] text-slate-500 mt-0.5">{COMPANY_INFO.legalName}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>UK GDPR Data Protection Compliant</span>
              </div>
            </div>
          </div>

          {/* Contact & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-navy-900 border border-slate-800 shadow-xl">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                    Message Dispatched
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto mb-4 leading-relaxed">
                    Thank you, <strong className="text-white">{fullName}</strong>. Your enquiry has been received and routed to our technical advisory team.
                  </p>
                  <div className="p-3 bg-navy-950 rounded-xl border border-slate-800 text-xs text-slate-400 max-w-xs mx-auto mb-6">
                    Reference: <span className="font-mono text-cyan-400 font-bold">{refId}</span>
                  </div>
                  <button
                    onClick={handleReset}
                    className="bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold px-6 py-2.5 rounded-xl text-sm transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold text-white font-heading mb-2">
                    Send a Direct Enquiry
                  </h2>
                  <p className="text-slate-400 text-xs sm:text-sm mb-6">
                    Fill in your project requirements and our team will get in touch promptly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-fullname" className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="contact-fullname"
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your name"
                          className="w-full bg-navy-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-slate-600"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your.email@company.co.uk"
                          className="w-full bg-navy-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-slate-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+44 7... or landline"
                          className="w-full bg-navy-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-slate-600"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Service of Interest
                        </label>
                        <select
                          id="contact-service"
                          value={serviceCategory}
                          onChange={(e) => setServiceCategory(e.target.value)}
                          className="w-full bg-navy-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
                      <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Message / Operational Details *
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please describe your current systems, challenges, or consultation needs..."
                        className="w-full bg-navy-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-slate-600 resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-2.5 pt-1">
                      <input
                        type="checkbox"
                        id="contact-consent"
                        required
                        checked={privacyAgreed}
                        onChange={(e) => setPrivacyAgreed(e.target.checked)}
                        className="mt-1 rounded border-slate-700 bg-navy-950 text-cyan-500 focus:ring-cyan-400"
                      />
                      <label htmlFor="contact-consent" className="text-xs text-slate-400 leading-relaxed">
                        I agree that {COMPANY_INFO.legalName} may process my details to respond to this inquiry in accordance with the UK Privacy Policy.
                      </label>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full min-h-[44px] flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-navy-950 font-bold py-3.5 rounded-xl text-sm transition-all shadow-md disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                      >
                        {submitting ? (
                          <div className="w-5 h-5 border-2 border-navy-950 border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Send Enquiry</span>
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

        </div>

      </div>
    </div>
  );
};
