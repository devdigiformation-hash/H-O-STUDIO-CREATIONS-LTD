export type PageTab = 'home' | 'about' | 'services' | 'solutions' | 'careers' | 'contact' | 'privacy';

export interface SequenceConfig {
  id: 'VIDEO_01' | 'VIDEO_02' | 'VIDEO_03' | 'VIDEO_04';
  title: string;
  subtitle: string;
  badge: string;
  ctaText: string;
  ctaAction: 'consultation' | 'careers' | 'services' | 'solutions';
  desktopPosition: 'fullscreen' | 'right' | 'left';
  folder: string;
  frameCount: number;
  approvedDuration: number;
  approvedEndSeconds: number;
  trimPolicy: string;
  validationStatus: string;
}

export interface CareerVacancy {
  id: string;
  title: string;
  salary: string;
  salaryRange: string;
  department: string;
  type: string;
  location: string;
  overview: string;
  keyResponsibilities: string[];
  requirements: string[];
  deliverables: string[];
}

export interface JobApplicationData {
  vacancyId: string;
  fullName: string;
  email: string;
  phone: string;
  cvFileName?: string;
  cvFileSize?: number;
  coverLetter?: string;
  privacyAgreed: boolean;
}

export interface ConsultationInquiryData {
  fullName: string;
  email: string;
  phone: string;
  serviceCategory: string;
  projectSummary: string;
  timeline: string;
  privacyAgreed: boolean;
}
