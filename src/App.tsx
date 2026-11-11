import React, { useState } from 'react';
import { PageTab } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ApplicationModal } from './components/ApplicationModal';
import { ConsultationModal } from './components/ConsultationModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<PageTab>('home');
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedVacancyId, setSelectedVacancyId] = useState<string | undefined>(undefined);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleNavigate = (tab: PageTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenApply = (vacancyId?: string) => {
    setSelectedVacancyId(vacancyId);
    setApplyModalOpen(true);
  };

  const handleOpenConsultation = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-navy-950 font-sans">
      {/* Sticky Header with Brand Logo & Prominent 'Apply Now' CTA */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenApply={() => handleOpenApply()}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Dynamic Viewport */}
      <main className="flex-1 w-full">
        {currentTab === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenApply={handleOpenApply}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
        {currentTab === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {currentTab === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
        {currentTab === 'solutions' && (
          <SolutionsPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}
        {currentTab === 'careers' && (
          <CareersPage
            onNavigate={handleNavigate}
            onOpenApply={handleOpenApply}
          />
        )}
        {currentTab === 'contact' && <ContactPage />}
        {currentTab === 'privacy' && <PrivacyPage />}
      </main>

      {/* Corporate UK Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenApply={() => handleOpenApply()}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Authentic WhatsApp Floating Button (Bottom-Right) */}
      <WhatsAppButton />

      {/* Application Flow Modal with CV validation */}
      <ApplicationModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        defaultVacancyId={selectedVacancyId}
      />

      {/* Consultation Scoping Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        defaultServiceId={selectedServiceId}
      />
    </div>
  );
};

export default App;
