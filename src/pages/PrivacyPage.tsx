import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { ShieldCheck, Lock, Eye, FileText, Mail } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 w-full min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>UK GDPR &amp; Data Protection Compliance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading mb-4">
            Privacy Policy &amp; Data Practices
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm">
            Last Updated: November 2026 • Legal Entity: <strong className="text-white">{COMPANY_INFO.legalName}</strong>
          </p>
        </div>

        {/* Content Blocks */}
        <div className="space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          
          <div className="p-6 rounded-2xl bg-navy-900 border border-slate-800">
            <h2 className="text-xl font-bold text-white font-heading mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5 text-cyan-400" />
              <span>1. Overview &amp; Data Controller</span>
            </h2>
            <p>
              This Privacy Policy explains how <strong className="text-white">{COMPANY_INFO.legalName}</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the Consultancy&rdquo;) processes personal data obtained via this website, direct communication channels, consultation requests, and recruitment applications.
            </p>
            <p className="mt-2">
              We operate strictly within the requirements of the UK Data Protection Act 2018 and the UK General Data Protection Regulation (UK GDPR).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-navy-900 border border-slate-800">
            <h2 className="text-xl font-bold text-white font-heading mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              <span>2. Categories of Personal Data Collected</span>
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-300 ml-2">
              <li>
                <strong className="text-white">Client &amp; Consultation Enquiries:</strong> Name, professional email address, telephone number, organization name, and operational requirements provided via our consultation forms.
              </li>
              <li>
                <strong className="text-white">Recruitment &amp; Job Applications:</strong> Candidate full name, email, phone number, Curriculum Vitae (CV) documents, employment history, qualifications, and optional cover notes submitted for open vacancies (IT Technician or Business Development Manager).
              </li>
              <li>
                <strong className="text-white">Technical Usage Data:</strong> Anonymized server logs, browser type, and interaction telemetry necessary to ensure website performance, frame scrubbing efficiency, and security defense against automated abuse.
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-navy-900 border border-slate-800">
            <h2 className="text-xl font-bold text-white font-heading mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-cyan-400" />
              <span>3. Lawful Bases for Processing</span>
            </h2>
            <p>
              We process personal information under the following UK GDPR legal bases:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-xl bg-navy-950 border border-slate-800">
                <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-1">
                  Contractual &amp; Pre-Contractual Steps
                </h4>
                <p className="text-slate-400 text-xs">
                  Reviewing client infrastructure scopes, drafting technical proposals, and processing employment applications at the candidate&rsquo;s request.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-navy-950 border border-slate-800">
                <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-1">
                  Legitimate Interests &amp; Consent
                </h4>
                <p className="text-slate-400 text-xs">
                  Direct business communications, IT system security monitoring, and explicit consent for storing applicant resumes during hiring rounds.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-navy-900 border border-slate-800">
            <h2 className="text-xl font-bold text-white font-heading mb-3">
              4. Data Retention &amp; Security Controls
            </h2>
            <p>
              All personal data and CV submissions are stored within secure, encrypted storage environments with strict role-based access restrictions. We do not sell, rent, or lease personal data to third-party marketing brokers.
            </p>
            <p className="mt-2">
              Candidate CV files are retained for the active recruitment cycle and securely destroyed within 6 months unless explicit consent for future talent pool consideration has been agreed.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-navy-900 border border-slate-800">
            <h2 className="text-xl font-bold text-white font-heading mb-3">
              5. Candidate &amp; Client Rights Under UK GDPR
            </h2>
            <p>
              Under UK data protection law, you possess explicit rights:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-300 ml-2 mt-2">
              <li>The right to request access to the personal data we hold about you.</li>
              <li>The right to rectification of inaccurate or outdated information.</li>
              <li>The right to erasure (&ldquo;right to be forgotten&rdquo;) where processing is no longer required.</li>
              <li>The right to restrict or object to specific processing operations.</li>
              <li>The right to lodge a complaint with the UK Information Commissioner&rsquo;s Office (ICO).</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-navy-900 border border-slate-800">
            <h2 className="text-xl font-bold text-white font-heading mb-3 flex items-center gap-2">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span>6. Data Privacy Contact</span>
            </h2>
            <p>
              To exercise any of your rights or request further clarification regarding data governance at <strong className="text-white">{COMPANY_INFO.legalName}</strong>, please contact our data team:
            </p>
            <div className="mt-3 p-4 rounded-xl bg-navy-950 border border-slate-800 text-xs space-y-1">
              <div>Email: <a href={`mailto:${COMPANY_INFO.contactEmail}`} className="text-cyan-400 hover:underline">{COMPANY_INFO.contactEmail}</a></div>
              <div>Telephone: <a href={`tel:${COMPANY_INFO.contactPhone}`} className="text-slate-200">{COMPANY_INFO.contactPhoneFormatted}</a></div>
              <div>Company: <span className="text-slate-200">{COMPANY_INFO.legalName}</span></div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
