import React, { useState } from 'react';
import { CAREER_VACANCIES, COMPANY_INFO } from '../data/company';
import { X, Upload, CheckCircle2, AlertCircle, FileText, Send } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultVacancyId?: string;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  defaultVacancyId
}) => {
  const [selectedVacancy, setSelectedVacancy] = useState(
    defaultVacancyId || CAREER_VACANCIES[0].id
  );
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState<string | null>(null);
  const [coverLetter, setCoverLetter] = useState('');
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentRole = CAREER_VACANCIES.find((v) => v.id === selectedVacancy) || CAREER_VACANCIES[0];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setCvError('File size exceeds 5MB limit. Please provide a smaller document.');
      setCvFile(null);
      return;
    }

    // Check extension / type
    const validTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    const isPdfOrDoc =
      validTypes.includes(file.type) ||
      file.name.endsWith('.pdf') ||
      file.name.endsWith('.docx') ||
      file.name.endsWith('.doc');

    if (!isPdfOrDoc) {
      setCvError('Invalid format. Please upload your CV as a PDF or DOCX file.');
      setCvFile(null);
      return;
    }

    setCvError(null);
    setCvFile(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cvFile) {
      setCvError('Please upload your CV before submitting.');
      return;
    }
    if (!privacyAgreed) {
      return;
    }

    setSubmitting(true);

    // Simulate secure backend dispatch and record submission
    setTimeout(() => {
      const generatedRef = `HO-APP-${Date.now().toString().slice(-6)}`;
      setSubmissionId(generatedRef);
      setSubmitting(false);
      setSubmitted(true);

      console.info('Application securely dispatched for review:', {
        ref: generatedRef,
        role: currentRole.title,
        applicant: fullName,
        email,
        phone,
        cv: cvFile.name,
        timestamp: new Date().toISOString()
      });
    }, 900);
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmissionId(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setCvFile(null);
    setCoverLetter('');
    setPrivacyAgreed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative bg-navy-900 border border-slate-700/80 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl text-left">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close application modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 font-heading">
              Application Received
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto mb-4 leading-relaxed">
              Thank you, <strong className="text-white">{fullName}</strong>. Your application for{' '}
              <strong className="text-cyan-400">{currentRole.title}</strong> has been received by the hiring team at {COMPANY_INFO.legalName}.
            </p>
            <div className="p-3 bg-navy-950 rounded-xl border border-slate-800 text-xs text-slate-400 max-w-xs mx-auto mb-6">
              Application Reference: <span className="font-mono text-cyan-400 font-bold">{submissionId}</span>
            </div>
            <button
              onClick={handleReset}
              className="bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold px-6 py-2.5 rounded-xl text-sm transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                Career Application
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mt-1">
                Apply for {currentRole.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Compensation: <strong className="text-white">{currentRole.salaryRange}</strong>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Role Select */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Select Target Position *
                </label>
                <select
                  value={selectedVacancy}
                  onChange={(e) => setSelectedVacancy(e.target.value)}
                  className="w-full bg-navy-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {CAREER_VACANCIES.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.title} — {v.salary}
                    </option>
                  ))}
                </select>
              </div>

              {/* Personal Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Alexander Smith"
                    className="w-full bg-navy-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-slate-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alexander@example.co.uk"
                    className="w-full bg-navy-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+44 7... or 07..."
                  className="w-full bg-navy-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-slate-600"
                />
              </div>

              {/* CV Upload Field */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Upload Curriculum Vitae (CV) * <span className="text-slate-500">(PDF or DOCX, max 5MB)</span>
                </label>
                <div className="relative border-2 border-dashed border-slate-700 hover:border-cyan-500/50 rounded-xl p-4 text-center bg-navy-950/60 transition-colors">
                  <input
                    type="file"
                    accept=".pdf,.docx,.doc"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  {cvFile ? (
                    <div className="flex items-center justify-center gap-2 text-xs text-cyan-400 font-medium">
                      <FileText className="w-4 h-4" />
                      <span>{cvFile.name} ({(cvFile.size / 1024).toFixed(0)} KB)</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-1 text-slate-400 text-xs">
                      <Upload className="w-5 h-5 text-cyan-400 mb-1" />
                      <span className="font-medium text-slate-300">Click or drag file to upload</span>
                      <span className="text-[11px] text-slate-500">PDF, DOCX up to 5MB</span>
                    </div>
                  )}
                </div>
                {cvError && (
                  <p className="flex items-center gap-1.5 text-xs text-rose-400 mt-1.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{cvError}</span>
                  </p>
                )}
              </div>

              {/* Cover Note */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Brief Summary / Cover Note <span className="text-slate-500">(Optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  placeholder="Summarize your relevant IT experience, technical certifications, or commercial achievements..."
                  className="w-full bg-navy-950 border border-slate-700 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-slate-600 resize-none"
                />
              </div>

              {/* UK GDPR Consent */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="privacy-consent"
                  required
                  checked={privacyAgreed}
                  onChange={(e) => setPrivacyAgreed(e.target.checked)}
                  className="mt-1 rounded border-slate-700 bg-navy-950 text-cyan-500 focus:ring-cyan-400"
                />
                <label htmlFor="privacy-consent" className="text-xs text-slate-400 leading-relaxed">
                  I agree that {COMPANY_INFO.legalName} may process my personal data and CV solely for recruitment purposes in accordance with UK GDPR.
                </label>
              </div>

              {/* Submit Button */}
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
                      <span>Submit Application</span>
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
